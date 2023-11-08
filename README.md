# react-native-demo

## 注意事项

- 每次安装涉及原生代码的新依赖后，都需要重新构建开发版，否则应用会有报错并且无法正常打开
- 尽量不要手动修改原生代码，可尝试通过 expo 的 SDK 或编写 expo 插件实现
- 本脚手架不提交 android 和 ios 目录至远程仓库，因为这两个目录由 expo prebuild 时自动生成，即原生代码由 expo 控制生成。
- 如果因为某些特殊需求，必须要手动修改原生代码，则 android 和 ios 目录需要提交至远程仓库，且需要去掉构建时 `expo prebuild` 命令的 `--clean` 参数
- 之所以为`expo prebuild` 命令加 `--clean` 参数，是因为修改 expo 配置文件后，缓存可能会导致 build 的应用还是用的旧的 expo 配置（玄学）

## 代码风格

- 不要写大量的行内样式，如果样式很多，抽离至 StyleSheet，保持代码的可读性

## 环境配置

### ios 相关

```bash
# 安装ruby版本管理工具
brew install rbenv

# 安装ruby
rbenv install 3.2.2

# 修改终端配置文件 .zshrc 或 .bashrc，优先使用rbenv的ruby，而不是系统的ruby
export PATH="$HOME/.rbenv/shims:$PATH"

# gem使用国内源
gem sources --add https://gems.ruby-china.com/ --remove https://rubygems.org/

# 安装ios相关依赖 (一般不需要手动安装，在构建开发版app时，脚本中会自动安装)
pnpm install-ios-deps
```

## 目录结构

```bash
src
├── assets                    # 本地静态资源
├── components                # 业务通用组件
│   ├── EnvSwitcher             # 切换后端环境组件，也可查看appConfig、expoConfig、本地日志等。（主要用于调试）
│   ├── ErrorBoundary           # 异常处理组件，里面封装了处理前端异常的逻辑
│   ├── IconFont                # 基于iconfont的图标组件，由react-native-iconfont-cli自动生成
│   ├── ScreenWrapper           # 页面通用根容器，它封装了自定义的navbar
│   └── ...
├── hooks                     # 自定义hooks
├── i18n                      # 国际化、多语言
├── navigators                # react-navigation navigators, 路由导航
│   ├── bottom-tab.tsx          # 主页面底部tab菜单 (createBottomTabNavigator)
│   ├── root.tsx                # 根路由导航 (createStackNavigator)
│   └── routes.tsx              # 定义全局的路由配置信息 (路由名称与入参映射类型、路由名称与screen映射，底部tab菜单配置)
├── screens                   # react-navigation screens, 类似web的pages
├── services                  # api服务
├── stores                    # 全局状态
│   └── user.ts                 # 存储用户信息，以及设置或获取api token
├── theme                     # 基础主题样式
├── utils                     # 工具函数
│   ├── env.tsx                 # 主要是定义 getBuildEnv 和 getAppEnv 的逻辑
│   ├── request.ts              # 基于 fetch api 封装的 http 请求函数
│   └── ...
├── App.tsx                   # App 入口
├── config.tsx                # 定义各个环境的配置信息 (比如 api 地址)
└── global.tsx                # 定义全局的变量 (比如用于屏幕适配的 px2dp 函数、用于日志记录的 log 函数等)
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
# 以下的逻辑统一封装在了 src/components/ErrorBoundary 组件中
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
