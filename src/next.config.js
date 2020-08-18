const SassWrapper = require('@zeit/next-sass');

module.exports = SassWrapper({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: true,
    localIdentName: '[sha512:hash:base62:7]',
  },
  sassLoaderOptions: {
    data: `
      @import "global/style.scss";
    `,
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: 'js-yaml-loader',
    });
    return config;
  },
});
