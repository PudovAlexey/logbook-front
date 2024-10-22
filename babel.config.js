module.exports = function(api) {
  api.cache(false);
  return {
    plugins: [
      [
        'module:react-native-dotenv',
        {
          envName: 'APP_ENV',
          moduleName: '@env',
          path: '.env',
          blocklist: null,
          allowlist: null,
          blacklist: null, // DEPRECATED
          whitelist: null, // DEPRECATED
          safe: false,
          allowUndefined: true,
          verbose: false,
        },
          'react-native-reanimated/plugin',
      ],
    ],
    presets: ['babel-preset-expo'],
  };
};
