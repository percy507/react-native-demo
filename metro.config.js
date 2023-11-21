const { getDefaultConfig } = require('expo/metro-config');
const { mergeConfig } = require('@react-native/metro-config');
const metroDefault = require('metro-config/src/defaults/defaults.js');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    unstable_enableSymlinks: true,
    assetExts: metroDefault.assetExts.concat(['html']),
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
