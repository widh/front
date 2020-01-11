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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "../node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_BackStage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/BackStage */ "./components/BackStage/index.tsx");
/* harmony import */ var _assets_imageDescriptors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/imageDescriptors */ "./assets/imageDescriptors.tsx");

var _jsxFileName = "C:\\Users\\wldhg\\Desktop\\homepage\\src\\pages\\404.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var NotFound = function NotFound() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(__jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null)),
      linkPlaceholder = _useState[0],
      setLink = _useState[1];

  var routeLink = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])().query.link;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
      _useTranslation2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useTranslation, 2),
      t = _useTranslation2[0],
      i18n = _useTranslation2[1];
  /* Internationalization */


  i18n.addResources('en', '404', {
    title: 'Huh... I don\'t know.',
    detail: 'The page that you\'re looking for does not exist.',
    message: 'I\'ve never done this before...How about typing whole the URL again?',
    requrl: 'Requested URL:'
  });
  i18n.addResources('ko', '404', {
    title: '어... 모르겠어요.',
    detail: '찾으시는 페이지가 존재하지 않아요.',
    message: '전에는 이런 적이 없었는데... 다시 한 번 시도해보시겠어요?',
    requrl: '가려던 페이지:'
  });
  /* Main function */

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    console.log(routeLink);
    var parsedLink = routeLink || '';
    var reqText = '';
    var reqURL = '';

    if (parsedLink && parsedLink.length > 0) {
      reqText = "go.wldh.org/".concat(parsedLink);
      reqURL = "https://go.wldh.org/".concat(parsedLink);
    } else {
      reqText = "www.wldh.org".concat(window.location.pathname);
      reqURL = "https://www.wldh.org".concat(window.location.pathname);
    }

    setLink(__jsx("a", {
      href: reqURL,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, reqText));
    var tpSpan = document.querySelector('[data-visible="transparent"]');
    if (tpSpan) tpSpan.dataset.visible = 'opaque';
  }, [routeLink]);
  /* Render */

  return __jsx(_components_BackStage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: t('404:title'),
    detailedTitle: t('404:detail'),
    message: t('404:message'),
    image: _assets_imageDescriptors__WEBPACK_IMPORTED_MODULE_5__["default"].gIsland,
    metaImage: "/images/banner-404.png",
    favicoff: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("span", {
    "data-visible": "transparent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, t('404:requrl'), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), "\u2002\u2002\u2002", linkPlaceholder));
};

/* harmony default export */ __webpack_exports__["default"] = (NotFound);
var config = {
  amp: 'true'
};

/***/ })

})
//# sourceMappingURL=404.js.53c932ade8335064b0d2.hot-update.js.map