webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./assets/features.tsx":
/*!*****************************!*\
  !*** ./assets/features.tsx ***!
  \*****************************/
/*! exports provided: WFeatureDisclaimer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WFeatureDisclaimer", function() { return WFeatureDisclaimer; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "../node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);

// Managing JavaScript, CSS Features & Versions

/* Feature Disclaimer */
var WFeatureDisclaimer = function WFeatureDisclaimer(msgEN, msgKR, btnEN, btnKR, urlEN, urlKR) {
  var anchor = '';

  if (btnEN && btnKR && urlEN && urlEN.length > 0) {
    anchor = "<div><a href=\"".concat(urlEN, "\">").concat(btnEN);

    if (urlKR && urlKR.length > 0) {
      anchor += "</a><br><a href=\"".concat(urlKR, "\">");
    } else {
      anchor += '<br>';
    }

    anchor += "".concat(btnKR, "</a></div>");
  }

  return "<div id=\"browser-disclaimer\"><div><div><em>".concat(msgEN, "</em><br><em>").concat(msgKR, "</em></div>").concat(anchor, "</div></div><link href=\"/styles/browser-disclaimer.min.css\" rel=\"stylesheet\" />");
};
/* Type Definition */

;
/* Features */

var Features = {
  includes: function includes() {
    return true;
  },

  /* Checked by Wrapper */
  promise: function promise() {
    return !!_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a;
  },
  cssVar: function cssVar() {
    return true;
  },

  /* Checked by Wrapper */
  cssFilter: function cssFilter() {
    return !!(CSS && CSS.supports('filter', 'blur(0px)'));
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Features);

/***/ })

})
//# sourceMappingURL=index.js.f781025ff0f31269e2b9.hot-update.js.map