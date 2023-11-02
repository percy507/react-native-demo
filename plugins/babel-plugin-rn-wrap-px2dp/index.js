/* eslint-disable */
// @ts-nocheck

const properties = require('./properties');
// const fs = require('fs');

/**
 * A Babel plugin that auto add `px2dp` for specific style attributes. It only handle the styles
 * in node's style attribute and styles in StyleSheet.
 *
 * @param {import('@babel/core')} babel - The Babel object.
 * @param {import('@babel/core').PluginOptions} [options] - Plugin options (optional).
 * @returns {import('@babel/core').PluginObj} Babel plugin object.
 */
module.exports = function (babel, options) {
  const { types: t } = babel;

  // fs.writeFileSync('./log.txt', '');
  // const appendLog = (val) => fs.appendFileSync('./log.txt', val);

  const wrapPx2dp = (value) => {
    return t.callExpression(t.identifier('px2dp'), [value]);
  };

  /**
   * @param {import('@babel/core').NodePath} path
   * @returns {void}
   */
  const traverseWrap = (path) => {
    path.traverse({
      enter(path) {
        if (path.node.name === 'px2dp') return;

        if (t.isProperty(path.node) && properties.includes(path.node.key.name)) {
          const value = path.node.value;
          // if already wrapped, then do nothing
          if (t.isCallExpression(value) && value.callee.name === 'px2dp') return;
          if (value.value === 0 || typeof value.value === 'string') return;
          path.node.value = wrapPx2dp(value);
        } else if (path.isReferencedIdentifier()) {
          // check referenced variable
          let bindingPath = path.scope.getBinding(path.node.name)?.path;
          if (!bindingPath) return;

          if (bindingPath.isVariableDeclarator()) {
            let init = bindingPath.node.init;
            if (
              init?.type === 'ObjectExpression' ||
              init?.type === 'ConditionalExpression' ||
              (init?.type === 'CallExpression' && init.callee.name === '_objectSpread') ||
              init?.type === 'ArrowFunctionExpression' ||
              init?.type === 'FunctionExpression'
            ) {
              traverseWrap(bindingPath);
            }
          } else if (bindingPath.isFunctionDeclaration()) {
            // appendLog(`\n11 ${path.node.name} ${bindingPath?.type}\n`);
            let outerPathName = path.node.name;
            bindingPath.traverse({
              enter(path) {
                let innerPathName = path.node.name;

                // avoid circular reference, which will make babel crashed
                if (innerPathName === outerPathName) return;
                if (innerPathName === '_this') return;
                if (innerPathName === '_classCallCheck') return;
                if (path.node.type === 'ThisExpression') return;

                // appendLog(`22 ${innerPathName} ${path.node.type}\n`);

                if (path.isObjectExpression() || path.isReferencedIdentifier()) {
                  // appendLog(`33 ${innerPathName} ${path.node.type}\n`);
                  traverseWrap(path.parentPath);
                }
              },
            });
          }
        }
      },
    });
  };

  return {
    name: 'babel-plugin-rn-wrap-px2dp',
    visitor: {
      CallExpression(path) {
        if (
          path.node.callee.object?.name === 'StyleSheet' &&
          ['create', 'compose', 'flatten'].includes(path.node.callee.property?.name)
        ) {
          traverseWrap(path);
        }
      },
      JSXAttribute(path) {
        const nodeName = path.node.name?.name;
        if (nodeName === 'style') traverseWrap(path);
        else if (
          (nodeName === 'width' || nodeName === 'height') &&
          path.parentPath.node.name?.name === 'Svg'
        ) {
          path.node.value.expression = wrapPx2dp(path.node.value.expression);
        }
      },
    },
  };
};
