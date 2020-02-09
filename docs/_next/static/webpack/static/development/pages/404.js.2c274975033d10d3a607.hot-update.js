webpackHotUpdate("static\\development\\pages\\404.js",{

/***/ "./pages/404.tsx":
/*!***********************!*\
  !*** ./pages/404.tsx ***!
  \***********************/
/*! exports provided: default, config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _misc_imageDescriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../misc/imageDescriptors */ "./misc/imageDescriptors.tsx");
/* harmony import */ var _components_BackStage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/BackStage */ "./components/BackStage/index.tsx");
/* harmony import */ var _misc_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../misc/i18n */ "./misc/i18n.tsx");
var _jsxFileName = "C:\\Users\\wldhg\\Desktop\\homepage\\src\\pages\\404.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var NotFound = function NotFound() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(__jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null)),
      linkPlaceholder = _useState[0],
      setLink = _useState[1];

  var routeLink = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])().query.link;
  var routeSrc = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])().query.src;

  var _useI18n = Object(_misc_i18n__WEBPACK_IMPORTED_MODULE_4__["useI18n"])('404'),
      t = _useI18n.t;
  /* Main function */


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var parsedLink = routeLink || '';
    var parsedSrc = routeSrc || '';
    var reqText = '';
    var reqURL = '';
    var showLink = false;

    if (parsedSrc === 'go') {
      reqText = "".concat(parsedSrc, ".wldh.org/").concat(parsedLink);
      reqURL = "https://".concat(parsedSrc, ".wldh.org/").concat(parsedLink);
      showLink = true;
    } else if (parsedSrc === 'www') {
      window.location.replace("https://www.wldh.org/".concat(parsedLink));
    } else if (parsedLink.length === 0 && window.location.href !== 'https://www.wldh.org/404' && window.location.href !== 'https://www.wldh.org/404.html') {
      reqText = "www.wldh.org".concat(window.location.pathname);
      reqURL = "https://www.wldh.org".concat(window.location.pathname);
      showLink = true;
    }

    if (showLink) {
      setLink(__jsx("a", {
        "data-mono": "slide",
        href: reqURL,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, reqText));
      var tpSpan = document.querySelector('[data-visible="transparent"]');
      if (tpSpan) tpSpan.dataset.visible = 'opaque';
    }
  }, [routeLink, routeSrc]);
  /* Render */

  return __jsx(_components_BackStage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: t('404:title'),
    detailedTitle: t('404:detail'),
    message: t('404:message'),
    image: _misc_imageDescriptors__WEBPACK_IMPORTED_MODULE_2__["default"].gIsland,
    metaImage: "/static/images/banner-404.png",
    favicoff: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("span", {
    "data-visible": "transparent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, t('404:requrl'), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), "\u2002\u2002\u2002", linkPlaceholder, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), __jsx("a", {
    "data-alt": true,
    href: "https://www.wldh.org/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, t('404:orgohome'))));
};

/* harmony default export */ __webpack_exports__["default"] = (NotFound);
var config = {
  amp: 'true'
};

/***/ })

})
//# sourceMappingURL=404.js.2c274975033d10d3a607.hot-update.js.map