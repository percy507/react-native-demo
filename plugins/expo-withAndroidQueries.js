/* eslint-disable */
// @ts-nocheck

const { withAndroidManifest } = require('@expo/config-plugins');

const withAndroidQueries = (config) => {
  const buildIntend = (scheme, actionType, categoryType = 'DEFAULT') => {
    return {
      data: [{ $: { 'android:scheme': scheme } }],
      action: [{ $: { 'android:name': `android.intent.action.${actionType}` } }],
      category: [{ $: { 'android:name': `android.intent.category.${categoryType}` } }],
    };
  };
  return withAndroidManifest(config, (config) => {
    config.modResults.manifest.queries = [
      {
        // List of Android Actions
        // https://gist.github.com/zr0n/dfa1afadf7e785e25d53fc2af7c4eee2
        intent: [
          buildIntend('tel', 'DIAL'),
          buildIntend('mailto', 'SENDTO'),
          buildIntend('http', 'VIEW'),
          buildIntend('https', 'VIEW'),
          buildIntend('taobao', 'VIEW'),
        ],
      },
    ];

    return config;
  });
};

module.exports = withAndroidQueries;
