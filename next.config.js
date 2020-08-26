const SassWrapper = require('@zeit/next-sass');

module.exports = SassWrapper({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: true,
    localIdentName: '[hash:base36:4]',
  },
  sassLoaderOptions: {
    data: `
      @import "styles/event.scss";
      @import "styles/layout.scss";
      @import "styles/modarkbul.scss";
      @import "styles/styles.scss";
      @import "styles/transition.scss";
      @import "styles/variables.scss";
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
