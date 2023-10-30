#!/usr/bin/env bash

set -ex

platform=$1
mode=${2:-"debug"}

# export build mode as env
export APP_BUILD_MODE=$mode

# To generate all the Android and IOS files
npx expo prebuild

if [[ $platform == "ios" ]]; then
  pnpm install-ios-deps
fi

# build the app
npx react-native "run-$platform" --mode=$mode

if [[ $platform == "android" ]]; then
  echo "Finished building Android APK"
fi

if [[ $platform == "ios" ]]; then
  echo "Finished building iOS IPA"
fi
