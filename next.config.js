const SassWrapper = require('@zeit/next-sass');

module.exports = SassWrapper({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: true,
    localIdentName: '[hash:base64:7]',
  },
  sassLoaderOptions: {
    data: `
      @import "src/assets/mixins.scss";
      @import "src/assets/variables.scss";
    `,
  },
});
