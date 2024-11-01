#!/usr/bin/env bash

set -ex

platform=$1   # android | ios
build_mode=$2 # Debug | Release
build_env=$3  # debug | staging | release

echo_success() {
  echo -e "\033[32m${1}\033[0m"
}

echo_error() {
  echo -e "\033[31m${1}\033[0m"
}

# test if version number has format: `x.x.x` or `x.x.x.x`
if [[ $build_version =~ ^[0-9]+(\.[0-9]+){2,3}$ ]]; then
  echo "build_version ==> $build_version"
else
  echo "build_version is not valid"
fi

# export as env, 这个环境变量在 expo 配置文件中用 (app.config.ts)
export RN_APP_BUILD_ENV=$build_env

# 使用 expo prebuild 命令自动生成 android 和 ios 目录，项目依赖由用户安装
# 如果卡在创建原生代码目录，十有八九是网络问题
# 可以尝试给全局npm配置文件添加代理 `~/.npmrc`
# proxy=http://127.0.0.1:1087
# https-proxy=http://127.0.0.1:1087
npx expo prebuild --clean --no-install --platform $platform

pnpm install

# 禁止 fastlane 检查更新
export FASTLANE_SKIP_UPDATE_CHECK=true

if [[ $platform == "android" ]]; then
  bundle install
  bundle exec fastlane "android${build_mode}" "build_env:${build_env}"
  echo_success "Finished building ~"
elif [[ $platform == "ios" ]]; then
  pnpm install-ios-deps

  if [[ $build_env == "staging" ]]; then
    bundle exec fastlane "ios${build_mode}Test"
  else
    bundle exec fastlane "ios${build_mode}"
  fi

  echo_success "Finished building ~"
else
  echo_error "[Error] platform is not valid: $platform"
  exit 1
fi
