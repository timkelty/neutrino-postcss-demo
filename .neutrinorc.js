module.exports = {
  use: [
    [
      '@neutrinojs/web',
      {
        html: {
          title: 'postcss test'
        },
        style: {
          loaders: [
            {
              useId: 'postcss',
              loader: require.resolve('postcss-loader'),
              options: {},
            }
          ]
        }
      }
    ]
  ]
};
