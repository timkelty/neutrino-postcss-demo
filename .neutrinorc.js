module.exports = {
  use: [
    [
      '@neutrinojs/web',
      {
        html: {
          title: 'postcss test'
        },
        style: neutrino => ({
          loaders: [
            {
              useId: 'postcss',
              loader: require.resolve('postcss-loader'),
              options: {
                config: {
                  path: neutrino.options.root,
                  ctx: {
                    basePath: neutrino.options.source
                  }
                },
              },
            }
          ]
        })
      }
    ]
  ]
};
