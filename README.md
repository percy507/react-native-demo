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

## 屏幕适配

React Native 的默认尺寸单位是密度无关像素（device-independent pixels，简称 dp）。这个单位类似于 Android 中的 dp 或 iOS 中的 points。它是一个相对单位，是基于设备的像素密度来计算的，可以在不同的屏幕上保持一致的视觉外观。

```bash
# 自定义封装 utils/style 模块 (`px2dp`, `PxStyleSheet`)
常规样式使用 PxStyleSheet 替代 StyleSheet
行内样式或逻辑中样式，使用 px2dp 手动转换

顶部导航栏和底部菜单不做适配？
第三方组件库怎么做适配？

# 未来改进
调研下如何使用babel插件自动转行StyleSheet和行内样式
https://github.com/kukudeshiyi/babel-plugin-react-native-style-adaptation

# 别的单位的转换
https://github.com/alexfoxy/react-native-units
```
