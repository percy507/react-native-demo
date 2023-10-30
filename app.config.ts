import type { ExpoConfig } from 'expo/config';

const debugConfig = {
  name: 'RN-demo(debug)',
  identifier: 'com.company.rndemo.debug',
};

const releaseConfig = {
  name: 'RN-demo',
  identifier: 'com.company.rndemo',
};

const splashScreenBG = '#2e3c4b';

export default (): ExpoConfig => {
  const isRelease = process.env.APP_BUILD_MODE?.toLowerCase() === 'release';

  return {
    name: isRelease ? releaseConfig.name : debugConfig.name,
    slug: 'RN-demo',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: splashScreenBG,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      bundleIdentifier: isRelease ? releaseConfig.identifier : debugConfig.identifier,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      package: isRelease ? releaseConfig.identifier : debugConfig.identifier,
    },
    androidNavigationBar: {
      backgroundColor: splashScreenBG,
    },
    web: {
      favicon: './assets/favicon.png',
    },
    experiments: {
      tsconfigPaths: true,
    },
    extra: {
      isRelease,
    },
  };
};
