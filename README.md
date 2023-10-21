# react-native-demo

## 注意事项

- 每次安装涉及原生代码的新依赖后，都需要重新构建开发版的 expo go 应用，否则会有报错

## 目录结构

```bash
src
├── App.tsx                   # App root
├── components                # 自定义组件
├── hooks                     # 自定义hooks
├── i18n                      # 国际化、多语言
├── navigators                # react-navigation navigators, 类似web的layout
├── screens                   # react-navigation screens, 类似web的pages
├── services                  # api服务
├── stores                    # 全局状态
│   └── user.ts
├── theme                     # base styles for the application
└── utils
```

## 库选型

```bash
# 状态管理
# jotai，简单易用
https://github.com/pmndrs/jotai

# 路由管理
# 暂时使用 react-navigation, 以后可以试试 expo router
# https://docs.expo.dev/routing/introduction/
https://github.com/react-navigation/react-navigation

# 键值对数据本地持久化
# 比RN官方的AsyncStorage更快，更安全（官方目前已弃用AsyncStorage）
https://github.com/mrousavy/react-native-mmkv

# 使用iconfont
https://github.com/iconfont-cli/react-native-iconfont-cli

# webview
# https://docs.expo.dev/versions/latest/sdk/webview/
npx expo install react-native-webview

# lottie 动画
# https://docs.expo.dev/versions/latest/sdk/lottie/
npx expo install lottie-react-native

# toast
https://github.com/arnnis/react-native-toast-notifications/

# http请求
基于 Fetch API 封装


react-native-ui-lib
```

## 代码风格

- 不要写大量的行内样式，如果样式很多，抽离至 StyleSheet，保持代码的可读性
