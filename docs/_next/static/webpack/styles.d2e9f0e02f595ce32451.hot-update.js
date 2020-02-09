webpackHotUpdate("styles",{

/***/ "./components/BackStage/style.scss":
/*!*****************************************!*\
  !*** ./components/BackStage/style.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"wrapper":"🈴-qr9a8Gv","header":"💊-4zRwZHi","main":"🕹-115YtDH","footer":"🕑-jHAJqER","blhx":"👮🏽‍♂️-3hHwYYS"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1581266035275");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.d2e9f0e02f595ce32451.hot-update.js.map