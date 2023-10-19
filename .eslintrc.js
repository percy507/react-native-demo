module.exports = {
  root: true,
  extends: ['@react-native'],
  plugins: ['simple-import-sort'],
  rules: {
    curly: 0,
    'no-unused-vars': 0,
    'no-undef': 0,
    'simple-import-sort/imports': 2,
    'simple-import-sort/exports': 2,
    'react/react-in-jsx-scope': 0,
    'react/no-unstable-nested-components': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-shadow': 0,
    '@typescript-eslint/no-unused-vars': [2],
    '@typescript-eslint/consistent-type-imports': [2],
    '@typescript-eslint/no-duplicate-imports': 2,
    'react-native/no-inline-styles': 2, // 不要写行内样式，尽量将样式封装至组件或全局样式token中
  },
};
