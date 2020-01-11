const SassWrapper = require('@zeit/next-sass');

module.exports = SassWrapper({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: true,
    localIdentName: '[emoji]-[sha512:hash:base62:7]',
  },
  sassLoaderOptions: {
    data: `
      @import "src/assets/mixins.scss";
      @import "src/assets/variables.scss";
    `,
  },
});
