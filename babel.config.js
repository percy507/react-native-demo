module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'inline-import',
        {
          extensions: ['.html'],
        },
      ],
      './plugins/babel-plugin-rn-wrap-px2dp/index.js',
      'react-native-reanimated/plugin',
    ],
  };
};
