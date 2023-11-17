import { useNavigation } from '@react-navigation/native';
import { useEffect, useRef, useState } from 'react';
import type { WebViewNavigation } from 'react-native-webview';
import { WebView } from 'react-native-webview';

import { ScreenWrapper } from '@/components';
import type { StackNav } from '@/navigators/routes';

export function DemoWebviewLoadUriScreen() {
  const nav = useNavigation<StackNav>();
  const [webviewNavState, setWebviewNavState] = useState<WebViewNavigation>();
  const webviewNavStateRef = useRef(webviewNavState);
  webviewNavStateRef.current = webviewNavState;
  const webviewRef = useRef<WebView>(null);

  useEffect(() => {
    // 如果webview的当前路由不是其路由栈中的最后一个，则不返回到上一个 screen
    // 且返回手势或点击返回按钮会触发webview页面的返回操作
    nav.addListener('beforeRemove', (e) => {
      if (!webviewNavStateRef.current?.canGoBack) {
        return nav.dispatch(e.data.action);
      }
      e.preventDefault();
      webviewRef.current?.goBack();
    });
  }, [nav]);

  const onNavigationStateChange = (event: WebViewNavigation) => {
    setWebviewNavState(event);

    console.log('onNavigationStateChange', event);

    const webview = webviewRef.current;
    const { url } = event;
    if (!webview || !url) return;

    // handle certain doctypes
    if (url.includes('.pdf')) {
      webview.stopLoading();
      // open a modal with the PDF viewer
    }

    // redirect somewhere else
    if (url.includes('html-tutorial.html')) {
      const newURL = 'https://reactnative.dev/';
      const redirectTo = 'window.location = "' + newURL + '"';
      webview.injectJavaScript(redirectTo);
    }
  };
  return (
    <ScreenWrapper navbar={{ title: '菜鸟教程（0_0）' }}>
      <WebView
        ref={webviewRef}
        source={{ uri: 'https://www.runoob.com/' }}
        setSupportMultipleWindows={false} // 防止webview中的链接跳转至外部浏览器
        onNavigationStateChange={onNavigationStateChange}
      />
    </ScreenWrapper>
  );
}

export function DemoWebviewLoadHtmlScreen() {
  const html = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>HTML示例代码</title>
      <style>
        body {
          font-family: Arial, sans-serif;
        }

        blockquote {
          border-left: 3px solid #39f;
          padding-left: 6px;
          margin-left:10px;
          color: red;
        }
      </style>
    </head>
    <body>
      <h1>HTML 示例代码</h1>
      <p>这是一个示例代码的段落。</p>
      <blockquote>这是一个引用块。</blockquote>
      <ul>
        <li>列表项1</li>
        <li>列表项2</li>
        <li>列表项3</li>
      </ul>
      <ol>
        <li>有序列表项1</li>
        <li>有序列表项2</li>
        <li>有序列表项3</li>
      </ol>
      <h2>这是一个标题2</h2>
      <p><strong>粗体文本</strong>和<em>斜体文本</em>示例。</p>
      <a href="https://developer.mozilla.org/en-US/">超链接</a>
      <img
        src="https://live.mdnplay.dev/en-US/docs/Web/HTML/Element/img/favicon144.png"
        alt="示例图片"
      />
      <table>
        <tr>
          <th>表头1</th>
          <th>表头2</th>
          <th>表头3</th>
        </tr>
        <tr>
          <td>单元格1</td>
          <td>单元格2</td>
          <td>单元格3</td>
        </tr>
        <tr>
          <td>单元格4</td>
          <td>单元格5</td>
          <td>单元格6</td>
        </tr>
      </table>
      <form>
        <fieldset>
          <legend>个人信息</legend>
          <label for="name">姓名:</label>
          <input type="text" id="name" name="name" /><br />
          <label for="email">邮箱:</label>
          <input type="email" id="email" name="email" /><br />
        </fieldset>
        <input type="submit" value="提交" />
      </form>
      <iframe
        src="https://developer.mozilla.org/en-US/"
        width="100%"
        height="300px"
      ></iframe>

      <hr />

      <footer>
        <p>版权所有 &copy; 2021</p>
      </footer>

      <script>
        (function () {
          window.ReactNativeWebView.postMessage(
            JSON.stringify({ from: "html字符串" })
          );
        })();
      </script>
    </body>
  </html>
  `;

  const INJECTED_JAVASCRIPT = `(function() {
    window.ReactNativeWebView.postMessage(JSON.stringify({id:'11233', bizId: 'BZ_009898'}));
})();`;

  return (
    <ScreenWrapper navbar={{ title: '渲染静态html' }}>
      <WebView
        source={{ html }}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        onMessage={(e) => {
          console.log('onMessage data', e.nativeEvent.data);
        }}
      />
    </ScreenWrapper>
  );
}
