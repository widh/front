webpackHotUpdate("styles",{

/***/ "./components/FrontStage/style.scss":
/*!******************************************!*\
  !*** ./components/FrontStage/style.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"background":"_2zo0mh_","hidden":"_3AhDHKa","brand":"_1ArWTHE","switch":"Ub6Md8p","shiney":"_2yxqpvQ","text-roller":"_3-ngXLi","banner-container":"_1Rg_2WV","links":"_3TykLV2","author":"_37RZRVc","removed":"_2UM1CY4","link-container":"_1Ls71lb"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1578172015256");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.72519cb91f330d990ded.hot-update.js.map