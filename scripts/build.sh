#!/usr/bin/env bash

set -ex

platform=$1   # android | ios
build_mode=$2 # debug | release | Debug | Release
build_env=$3  # debug | staging | release

# test if version number has format: `x.x.x` or `x.x.x.x`
if [[ $build_version =~ ^[0-9]+(\.[0-9]+){2,3}$ ]]; then
  echo "build_version ==> $build_version"
else
  echo "build_version is not valid"
fi

# export as env, 这个环境变量在 expo 配置文件中用 (app.config.ts)
export RN_APP_BUILD_ENV=$build_env

# 使用 expo prebuild 命令自动生成 android 和 ios 目录，项目依赖由用户安装
npx expo prebuild --clean --no-install --platform $platform

pnpm install

if [[ $platform == "ios" ]]; then
  pnpm install-ios-deps
fi

# build the app
npx react-native "run-$platform" --mode=$build_mode

if [[ $platform == "android" ]]; then
  echo "Finished building Android APK"
fi

if [[ $platform == "ios" ]]; then
  echo "Finished building iOS IPA"
fi
