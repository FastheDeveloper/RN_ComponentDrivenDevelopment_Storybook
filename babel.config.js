module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          extensions: ['.ts', '.tsx', '.js', 'jsx', '.ios.js', '.android.js'],
          alias: {
            '@/': '*',
            '@components': './components',
            '@screens': './src/screens',
            '@types': './src/lib/types',
          },
        },
      ],
      'nativewind/babel',
    ],
  }
}
