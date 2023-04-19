module.exports = {
  plugins: [
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: { flexbox: 'no-2009' },
        stage: 3,
        features: { 'custom-properties': false },
      },
    ],
  ],
};

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins.push([
    '@fullhuman/postcss-purgecss',
    {
      content: [
        './app/**/*.{js,jsx,ts,tsx}',
        './components/**/*.{js,jsx,ts,tsx}',
      ],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
      safelist: ['html', 'body', 'svg-inline--fa'],
    },
  ]);
}
