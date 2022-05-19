module.exports = {
  plugins: [
    [
      'postcss-custom-media',
      {
        importFrom: ['src/styles/media.css'],
      },
    ],
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': true,
          'nesting-rules': true,
        },
      },
    ],
  ],
};
