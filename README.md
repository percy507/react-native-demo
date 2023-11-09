# react-native-demo

## 介绍

该 react-native 脚手架集成了 expo、pnpm、typescript、eslint 等工具，有多种常用功能的测试性页面。

```bash
# 使用 expo 的优势
- 安装兼容 expo 的第三方库时，如果涉及修改原生代码，expo 会自动帮我们处理，从而开发者无需手动修改原生代码
- 使用 `npx expo install` 安装依赖时，会自动根据当前项目情况，选择最佳的依赖版本
```

## 开始使用

### 环境配置

```bash
brew install watchman   # for watching changes in the filesystem
```

#### android 相关

```bash
# install the JDK(Java Development Kit)
brew tap homebrew/cask-versions
brew install zulu11

# install Android Studio，并安装文档里相关的android sdk及其tools
# https://reactnative.dev/docs/environment-setup?package-manager=npm&guide=native&platform=android
brew install android-studio

# 设置环境变量
export PATH="/opt/homebrew/opt/ruby/bin:$PATH" # prefer to use ruby which installed by brew
export LDFLAGS="-L/opt/homebrew/opt/ruby/lib"
export CPPFLAGS="-I/opt/homebrew/opt/ruby/include"

export JAVA_HOME="/Library/Java/JavaVirtualMachines/zulu-11.jdk/Contents/Home"
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

#### ios 相关

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

### 环境介绍(构建环境 & 后端环境)

- 构建环境: 即打包 app 时的环境

  - `debug`: debug build，即 expo 的 development build，仅限本地开发用；不支持页面中切换后端环境，如需切换后端环境，自行改代码
  - `staging`: release build，测试时用(产品走查、测试走查、演示环境等)；此时的 app 与生产环境一模一样，除过默认后端环境不一样；支持在页面中切换所有后端环境，默认为后端测试环境
  - `release`: release build, 生产环境；不支持在页面中切换后端环境

- 后端环境: 即后端服务器的环境，可按需自己设置所需的环境，以下为默认的环境

  - `local`: 本地开发用
  - `dev`: 开发环境
  - `test`: 测试环境
  - `prod`: 生产环境

### 相关命令

```bash
git clone <repo>

# 安装依赖
pnpm i

# 构建开发版
pnpm build:android:debug
pnpm build:ios:debug

# 启动本地服务
pnpm start

# 构建测试版
pnpm build:android:staging
pnpm build:ios:staging

# 构建生产版
pnpm build:android:release
pnpm build:ios:release

# 更新 iconfont
# 修改 iconfont.json 里的 symbol_url 为最新的 url，然后执行下面的目录
pnpm buildIconFont
```

### 注意事项

- 每次安装涉及原生代码的新依赖后，都需要重新构建开发版，否则应用会有报错并且无法正常打开
- 尽量不要手动修改原生代码，可尝试通过 expo 的 SDK 或编写 expo 插件实现
- 本脚手架不提交 android 和 ios 目录至远程仓库，因为这两个目录由 expo prebuild 时自动生成，即原生代码由 expo 控制生成。
- 如果因为某些特殊需求，必须要手动修改原生代码，则 android 和 ios 目录需要提交至远程仓库，且需要去掉构建时 `expo prebuild` 命令的 `--clean` 参数
- 之所以为`expo prebuild` 命令加 `--clean` 参数，是因为修改 expo 配置文件后，缓存可能会导致 build 的应用还是用的旧的 expo 配置（玄学 🫣）

## 代码风格

- 不要写大量的行内样式，如果样式很多，抽离至 StyleSheet，保持代码的可读性
- 诸如 `Text`、 `View` 等基础组件尽量从 `@/components` 引入，而不要直接使用 react-native 的，因为我们进行了二次封装，可以给其增加一些更易使用的功能

## 目录结构

```bash
src
├── assets                    # 本地静态资源
├── components                # 业务通用组件
│   ├── DebugTool               # 调试工具。可切换后端环境组件，也可查看appConfig、expoConfig、本地日志等
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

## 常见功能的相关方案

### 库选型

```bash
# 组件库
https://github.com/wix/react-native-ui-lib (选用: 组件种类多)
https://github.com/tamagui/tamagui (弃用: 启动demo，感觉有点卡，动画效果过多了，组件偏少)
https://github.com/ant-design/ant-design-mobile-rn (弃用: 2018年，仓库转为个人维护，更新较少)
https://github.com/callstack/react-native-paper

# 表单管理
https://github.com/react-hook-form/react-hook-form

# 状态管理: jotai，简单易用
https://github.com/pmndrs/jotai

# 路由管理: 使用 react-navigation, 以后可以试试 [expo router](https://docs.expo.dev/routing/introduction/)
https://github.com/react-navigation/react-navigation

# 键值对数据本地持久化
# 比RN官方的AsyncStorage更快，更安全（官方目前已弃用AsyncStorage）
https://github.com/mrousavy/react-native-mmkv

# 使用 iconfont
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

# portal
https://github.com/gorhom/react-native-portal

# 工具类库
https://github.com/iamkun/dayjs/ 日期格式化
https://github.com/onubo/react-native-logs 记录日志
```

### 其他第三方库

```bash
# 社区库搜索
https://reactnative.directory/

# swipe left and right through pages of data
https://github.com/callstack/react-native-pager-view

https://github.com/wuba/react-native-echarts

https://github.com/gorhom/react-native-bottom-sheet
```

### 屏幕适配

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

### 异常捕获

```bash
# 以下的逻辑统一封装在了 src/components/ErrorBoundary 组件中
组件树中的异常: 用 ErrorBoundary 组件
普通js的异常: 用 ErrorUtils.setGlobalHandler
未捕获的Promise错误: 用 global.HermesInternal?.enablePromiseRejectionTracker
Native异常捕获: ???
```

## 调试相关

### 安卓

```bash
# 安卓
https://adbshell.com/
[Adb useful commands list](https://gist.github.com/Pulimet/5013acf2cd5b28e55036c82c91bd56d8)

# 以root用户进入shell
adb root
adb shell

# 列出当前连接的设备
adb devices

# 查看app的日志
adb logcat -e "com.company.rndemo.debug"

# 安装 apk 到设备
adb -s "<device-id>" install "<path-to-apk>"

# app 私有文件目录，比如mmkv和logs文件就存储在这里
/data/data/[包名]/files

# 改变安卓模拟器的屏幕尺寸
mac: 按住 command + 上/下箭头 进行改变
windows: 按住 ctrl + 上/下箭头 进行改变
```

## 待做事项

```bash
# 思考如何设置基础主题(先这样凑乎吧，开发多了再优化)
https://github.com/efstathiosntonas/react-native-style-libraries-benchmark
https://github.com/jpudysz/react-native-unistyles
```

## 乱七八糟的资料

```bash
# ios上架
https://www.v2ex.com/t/344112
[iOS 使用fastlane实现自动化打包](https://juejin.cn/post/7009172244253540383)

# Android系统文件目录结构
https://www.jianshu.com/p/05c0691f4d73
https://www.cnblogs.com/pixy/p/4744501.html
https://blog.smallraw.com/archives/276/

# iOS文件系统目录结构
https://kanchuan.com/blog/127-ios-filesystem

# CocoaPods
CocoaPods的本地缓存目录是 ~/Library/Caches/CocoaPods/

# Putting the Expo vs React Native debate to rest
https://retool.com/blog/expo-cli-vs-react-native-cli/

# 没 2 年 React Native 开发经验，你都遇不到这些坑
https://supercodepower.com/react-native-tweet
https://supercodepower.com/docs/react-native-upgrade/index

# React Native APIs turned into React Hooks for use in functional React components Resources
https://github.com/react-native-community/hooks

# List of Android Actions
https://gist.github.com/zr0n/dfa1afadf7e785e25d53fc2af7c4eee2

# 版本管理工具及 Ruby 工具链环境
https://www.desgard.com/2020/06/11/cocoapods-story-1.html

# 拆包?
[Metro拆包工作原理与实战](https://segmentfault.com/a/1190000041944570)
[React Native 拆包原理和实践](https://cloud.tencent.com/developer/article/1782216)
```
