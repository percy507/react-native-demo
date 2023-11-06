# react-native-demo

## 注意事项

- 每次安装涉及原生代码的新依赖后，都需要重新构建开发版的 expo go 应用，否则会有报错
- 除非必须要修改原生代码，否则不提交 android 和 ios 目录至远程仓库，因为其由 expo prebuild 时自动生成

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
# 组件库
https://github.com/wix/react-native-ui-lib (选用：组件种类多)
https://github.com/tamagui/tamagui (弃用：启动demo，感觉有点卡，动画效果过多了，组件偏少)
https://github.com/ant-design/ant-design-mobile-rn (弃用：2018年，仓库转为个人维护，更新较少)

# 表单管理
https://github.com/react-hook-form/react-hook-form

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

# 工具类库
https://github.com/iamkun/dayjs/ 日期格式化
https://github.com/onubo/react-native-logs 记录日志
```

## 代码风格

- 不要写大量的行内样式，如果样式很多，抽离至 StyleSheet，保持代码的可读性

## 屏幕适配

React Native 的默认尺寸单位是密度无关像素（device-independent pixels，简称 dp）。这个单位类似于 Android 中的 dp 或 iOS 中的 points。它是一个相对单位，是基于设备的像素密度来计算的，可以在不同的屏幕上保持一致的视觉外观。

```bash
# 屏幕适配方案
1. 基于设计稿宽度与屏幕宽度的比例，封装 `px2dp` 方法
2. 编写babel插件，自动为指定的长度类样式属性的值包裹 `px2dp` 方法，从而适配当前屏幕
3. babel插件会转换当前项目以及所有第三方库的行内样式以及StyleSheet.create中定义的样式

# babel插件，插件的局限性等信息请查看插件根目录的 README.md
./plugins/babel-plugin-rn-wrap-px2dp/index.js

# 别的样式单位
https://github.com/alexfoxy/react-native-units
```

## 异常捕获

```bash
组件树中的异常: 用 ErrorBoundary 组件
普通js的异常: 用 ErrorUtils.setGlobalHandler
未捕获的Promise错误: 用 global.HermesInternal?.enablePromiseRejectionTracker
Native异常捕获: ???
```

## 调试相关

```bash
# 安卓
https://adbshell.com/
[Adb useful commands list](https://gist.github.com/Pulimet/5013acf2cd5b28e55036c82c91bd56d8)

# 以root用户进入shell
adb root
adb shell

# app 私有文件目录，比如mmkv和logs文件就存储在这里
/data/data/[包名]/files
```

## 待做事项

```bash
# 思考如何设置基础主题(先这样凑乎吧，开发多了再优化)
https://github.com/efstathiosntonas/react-native-style-libraries-benchmark
https://github.com/jpudysz/react-native-unistyles
```
