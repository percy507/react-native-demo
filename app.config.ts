import type { ExpoConfig } from 'expo/config';

import type { BUILD_ENV_TYPE } from './src/utils/env';

const splashScreenBG = '#2e3c4b';

export default (): ExpoConfig => {
  const buildEnv = (process.env.RN_APP_BUILD_ENV || 'debug') as BUILD_ENV_TYPE;
  const buildVersion = '1.0.0';

  const getIdentifier = () => {
    let str = 'com.company.rndemo';
    if (buildEnv === 'release') return str;
    return `${str}.${buildEnv}`;
  };

  return {
    name: 'RN-demo',
    slug: 'RN-demo',
    version: buildVersion,
    orientation: 'portrait',
    icon: './src/assets/app_icon.png',
    userInterfaceStyle: 'light',
    backgroundColor: splashScreenBG,
    splash: {
      image: './src/assets/app_splash.png',
      resizeMode: 'contain',
      backgroundColor: splashScreenBG,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      bundleIdentifier: getIdentifier(),
      infoPlist: {
        NSCameraUsageDescription: '需要访问您的相机来拍照',
        NSPhotoLibraryUsageDescription: '需要访问您的照片库来保存照片',
      },
    },
    android: {
      package: getIdentifier(),
      adaptiveIcon: {
        foregroundImage: './src/assets/app_adaptive_icon.png',
        backgroundColor: '#ffffff',
      },
      permissions: ['CAMERA', 'READ_EXTERNAL_STORAGE', 'WRITE_EXTERNAL_STORAGE'],
    },
    androidNavigationBar: {
      backgroundColor: splashScreenBG,
    },
    experiments: {
      tsconfigPaths: true,
    },
    extra: {
      buildEnv,
    },
    updates: {
      enabled: true,
      useClassicUpdates: true,
    },
    plugins: [
      ['./plugins/expo-withAndroidQueries.js'],
      [
        'app-icon-badge',
        {
          enabled: buildEnv !== 'release',
          badges: [
            { text: buildEnv, type: 'banner', color: 'white' },
            { text: buildVersion, type: 'ribbon', color: 'white' },
          ],
        },
      ],
    ],
  };
};
