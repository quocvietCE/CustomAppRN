module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./__tests__/'],
          '@components': './src/components',
          '@pages': './src/pages',
          '@constants': './src/constants',
          '@helpers': './src/helpers',
          '@models': './src/models',
          '@services': './src/services',
          '@themes': './src/constants/themes',
          '@store': './src/store',
          '@configs': './configs',
        },
      },
    ],
  ],
};
