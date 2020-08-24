webpackHotUpdate_N_E("pages/index",{

/***/ "./components/wrap.d.yml":
/*!*******************************!*\
  !*** ./components/wrap.d.yml ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

const doc = [({"en":({"반가워요!":"Annyeong!", "[[]] ᅍ":"[[]] ～ wldh.", "반가워요! - ㅈㅇ":"Annyeong! - wldh", "제목 없음":"Untitled", "김지오의 홈페이지입니다.":"Jio Gim's homepage."})})];
module.exports = doc.length <= 1 ? doc[0] : doc;

/***/ }),

/***/ "./components/wrap.tsx":
/*!*****************************!*\
  !*** ./components/wrap.tsx ***!
  \*****************************/
/*! exports provided: domain, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "domain", function() { return domain; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "../node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _global_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global/i18n */ "./global/i18n.tsx");
/* harmony import */ var _global_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global/theme */ "./global/theme.tsx");
/* harmony import */ var _global_feature__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global/feature */ "./global/feature.tsx");
/* harmony import */ var _global_features__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global/features */ "./global/features/index.tsx");
/* harmony import */ var _wrap_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wrap.scss */ "./components/wrap.scss");
/* harmony import */ var _wrap_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wrap_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wrap_d_yml__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./wrap.d.yml */ "./components/wrap.d.yml");
/* harmony import */ var _wrap_d_yml__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wrap_d_yml__WEBPACK_IMPORTED_MODULE_9__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\jio\\Desktop\\homepage\\src\\components\\wrap.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var domain = 'https://www.wldh.org';
;

var Wrapper = function Wrapper(props) {
  _s();

  var children = props.children,
      title = props.title,
      isMain = props.isMain,
      description = props.description,
      thumbnailURL = props.thumbnailURL,
      useFavicoff = props.useFavicoff,
      classList = props.classList,
      requiredFeatures = props.requiredFeatures,
      allowCrawling = props.allowCrawling;

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])(),
      pathname = _useRouter.pathname;

  var _useI18n = Object(_global_i18n__WEBPACK_IMPORTED_MODULE_4__["useI18n"])(_wrap_d_yml__WEBPACK_IMPORTED_MODULE_9___default.a),
      t = _useI18n.t,
      setLocale = _useI18n.setLocale;

  var _useTheme = Object(_global_theme__WEBPACK_IMPORTED_MODULE_5__["useTheme"])(),
      getTheme = _useTheme.getTheme,
      setTheme = _useTheme.setTheme; // Feature check


  var featureCheckTargets = requiredFeatures instanceof Array ? Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(new Set([_global_features__WEBPACK_IMPORTED_MODULE_7__["InternetExplorer"], _global_features__WEBPACK_IMPORTED_MODULE_7__["CSSVariable"]].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(requiredFeatures)))) : Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(new Set([_global_features__WEBPACK_IMPORTED_MODULE_7__["InternetExplorer"], _global_features__WEBPACK_IMPORTED_MODULE_7__["CSSVariable"], requiredFeatures]));
  Object(_global_feature__WEBPACK_IMPORTED_MODULE_6__["useFeature"])(featureCheckTargets);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    // Locale set
    setLocale(document.documentElement.lang === 'ko' ? 'ko' : 'en'); // Theme set

    setTheme(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    /* DO ONLY ONCE */
  ]); // Redefine meta information

  var fallbackTitle = title || t('제목 없음');
  var fallbackDescription = description || t('김지오의 홈페이지입니다.');
  var dispColor = getTheme() === 'dark' ? '#2b2b2b' : '#ffffff';
  var dispTitle = isMain ? t('반가워요!') : t('[[]] ᅍ', [fallbackTitle]);
  var metaTitle = isMain ? t('반가워요! - ㅈㅇ') : fallbackTitle;
  var metaDescription = fallbackDescription;
  var metaURL = "".concat(domain).concat(pathname);
  var metaImage = thumbnailURL;
  var className = classList instanceof Array ? classList.join(' ') : classList;
  var robots = allowCrawling ? 'noimageindex' : 'noindex,nofollow'; // Render

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, __jsx("meta", {
    name: "theme-color",
    content: dispColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "robots",
    content: robots,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "description",
    content: metaDescription,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:title",
    content: metaTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:url",
    content: metaURL,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:image",
    content: metaImage,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:description",
    content: metaDescription,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }), __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, dispTitle), __jsx("link", {
    href: useFavicoff ? '/favicoff.ico' : '/favicon.ico',
    rel: "shortcut icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, children));
};

_s(Wrapper, "56c+5V607JRbvhDSIkcmdLFpynM=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"], _global_i18n__WEBPACK_IMPORTED_MODULE_4__["useI18n"], _global_theme__WEBPACK_IMPORTED_MODULE_5__["useTheme"], _global_feature__WEBPACK_IMPORTED_MODULE_6__["useFeature"]];
});

_c = Wrapper;
Wrapper.defaultProps = {
  title: undefined,
  description: undefined,
  isMain: false,
  thumbnailURL: '/images/banner-index.png',
  useFavicoff: false,
  classList: undefined,
  requiredFeatures: undefined,
  allowCrawling: true,
  children: undefined
};
/* harmony default export */ __webpack_exports__["default"] = (Wrapper);

var _c;

$RefreshReg$(_c, "Wrapper");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./global/features/CSS.variable.tsx":
/*!******************************************!*\
  !*** ./global/features/CSS.variable.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {var checkMetric = {
  name: 'CSS.variable',
  checker: function checker() {
    return !!(CSS && CSS.supports('color', 'var(--a)'));
  }
};
/* harmony default export */ __webpack_exports__["default"] = (checkMetric);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./global/features/InternetExplorer.tsx":
/*!**********************************************!*\
  !*** ./global/features/InternetExplorer.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {var checkMetric = {
  name: 'Intenet Explorer Check',
  checker: function checker() {
    return {
      pass: !window.isIE,
      fn: checkMetric,
      importance: 2000,
      infoEn: 'Internet Explorer is an old browser, does not support modern web technologies. This page will not be rendered as intended or workproperly.',
      infoKo: 'Internet Explorer는 현대 웹 기술을 지원하지 않는 낡은 브라우저입니다. 이 페이지는 Internet Explorer에서 온전하게 보이거나 작동하지않습니다.',
      linkEn: 'https://techcommunity.microsoft.com/t5/windows-it-pro-blog/the-perils-of-using-internet-explorer-as-your-default-browser/ba-p/331732',
      linkKo: 'http://newslabit.hankyung.com/article/201902192484G'
    };
  }
};
/* harmony default export */ __webpack_exports__["default"] = (checkMetric);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./global/features/String.Includes.tsx":
/*!*********************************************!*\
  !*** ./global/features/String.Includes.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {var checkMetric = {
  name: 'String.includes',
  checker: function checker() {
    return !!String.prototype.includes;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (checkMetric);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./global/features/index.tsx":
/*!***********************************!*\
  !*** ./global/features/index.tsx ***!
  \***********************************/
/*! exports provided: InternetExplorer, CSSVariable, StringIncludes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _InternetExplorer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InternetExplorer */ "./global/features/InternetExplorer.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InternetExplorer", function() { return _InternetExplorer__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _CSS_variable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CSS.variable */ "./global/features/CSS.variable.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSVariable", function() { return _CSS_variable__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _String_Includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./String.Includes */ "./global/features/String.Includes.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StringIncludes", function() { return _String_Includes__WEBPACK_IMPORTED_MODULE_2__["default"]; });






;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_wrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/wrap */ "./components/wrap.tsx");
/* harmony import */ var _components_StageFront__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/StageFront */ "./components/StageFront/index.tsx");
var _this = undefined,
    _jsxFileName = "C:\\Users\\jio\\Desktop\\homepage\\src\\pages\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Index = function Index() {
  return __jsx(_components_wrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
    isMain: true,
    requiredFeatures: [],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, __jsx(_components_StageFront__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }));
};

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy93cmFwLmQueW1sIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3dyYXAudHN4Iiwid2VicGFjazovL19OX0UvLi9nbG9iYWwvZmVhdHVyZXMvQ1NTLnZhcmlhYmxlLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vZ2xvYmFsL2ZlYXR1cmVzL0ludGVybmV0RXhwbG9yZXIudHN4Iiwid2VicGFjazovL19OX0UvLi9nbG9iYWwvZmVhdHVyZXMvU3RyaW5nLkluY2x1ZGVzLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vZ2xvYmFsL2ZlYXR1cmVzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbImRvbWFpbiIsIldyYXBwZXIiLCJwcm9wcyIsImNoaWxkcmVuIiwidGl0bGUiLCJpc01haW4iLCJkZXNjcmlwdGlvbiIsInRodW1ibmFpbFVSTCIsInVzZUZhdmljb2ZmIiwiY2xhc3NMaXN0IiwicmVxdWlyZWRGZWF0dXJlcyIsImFsbG93Q3Jhd2xpbmciLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsInVzZUkxOG4iLCJkaWN0IiwidCIsInNldExvY2FsZSIsInVzZVRoZW1lIiwiZ2V0VGhlbWUiLCJzZXRUaGVtZSIsImZlYXR1cmVDaGVja1RhcmdldHMiLCJBcnJheSIsIlNldCIsIkludGVybmV0RXhwbG9yZXIiLCJDU1NWYXJpYWJsZSIsInVzZUZlYXR1cmUiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImxhbmciLCJkYXRhc2V0IiwidGhlbWUiLCJmYWxsYmFja1RpdGxlIiwiZmFsbGJhY2tEZXNjcmlwdGlvbiIsImRpc3BDb2xvciIsImRpc3BUaXRsZSIsIm1ldGFUaXRsZSIsIm1ldGFEZXNjcmlwdGlvbiIsIm1ldGFVUkwiLCJtZXRhSW1hZ2UiLCJjbGFzc05hbWUiLCJqb2luIiwicm9ib3RzIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIiwiY2hlY2tNZXRyaWMiLCJuYW1lIiwiY2hlY2tlciIsIkNTUyIsInN1cHBvcnRzIiwicGFzcyIsIndpbmRvdyIsImlzSUUiLCJmbiIsImltcG9ydGFuY2UiLCJpbmZvRW4iLCJpbmZvS28iLCJsaW5rRW4iLCJsaW5rS28iLCJTdHJpbmciLCJwcm90b3R5cGUiLCJpbmNsdWRlcyIsIkluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxlQUFlLE9BQU8seUlBQXlJLEVBQUU7QUFDakssZ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVPLElBQU1BLE1BQU0sR0FBRyxzQkFBZjtBQVlOOztBQUVELElBQU1DLE9BQXlCLEdBQUcsU0FBNUJBLE9BQTRCLENBQUNDLEtBQUQsRUFBa0I7QUFBQTs7QUFBQSxNQUVoREMsUUFGZ0QsR0FJOUNELEtBSjhDLENBRWhEQyxRQUZnRDtBQUFBLE1BRXRDQyxLQUZzQyxHQUk5Q0YsS0FKOEMsQ0FFdENFLEtBRnNDO0FBQUEsTUFFL0JDLE1BRitCLEdBSTlDSCxLQUo4QyxDQUUvQkcsTUFGK0I7QUFBQSxNQUV2QkMsV0FGdUIsR0FJOUNKLEtBSjhDLENBRXZCSSxXQUZ1QjtBQUFBLE1BRVZDLFlBRlUsR0FJOUNMLEtBSjhDLENBRVZLLFlBRlU7QUFBQSxNQUVJQyxXQUZKLEdBSTlDTixLQUo4QyxDQUVJTSxXQUZKO0FBQUEsTUFFaUJDLFNBRmpCLEdBSTlDUCxLQUo4QyxDQUVpQk8sU0FGakI7QUFBQSxNQUU0QkMsZ0JBRjVCLEdBSTlDUixLQUo4QyxDQUU0QlEsZ0JBRjVCO0FBQUEsTUFHaERDLGFBSGdELEdBSTlDVCxLQUo4QyxDQUdoRFMsYUFIZ0Q7O0FBQUEsbUJBSzdCQyw2REFBUyxFQUxvQjtBQUFBLE1BSzFDQyxRQUwwQyxjQUsxQ0EsUUFMMEM7O0FBQUEsaUJBTXpCQyw0REFBTyxDQUFDQyxrREFBRCxDQU5rQjtBQUFBLE1BTTFDQyxD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QixHQUFHLFNBQW5CQSxLQUFtQjtBQUFBLFNBQ3ZCLE1BQUMsd0RBQUQ7QUFDRSxVQUFNLE1BRFI7QUFFRSxvQkFBZ0IsRUFBRSxFQUZwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUUsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsQ0FEdUI7QUFBQSxDQUF6Qjs7S0FBTUEsSztBQVNTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43N2Y3ZDYwNGIyMzVkYjQ0ZGQ4NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZG9jID0gWyh7XCJlblwiOih7XCLrsJjqsIDsm4zsmpQhXCI6XCJBbm55ZW9uZyFcIiwgXCJbW11dIOGFjVwiOlwiW1tdXSDvvZ4gd2xkaC5cIiwgXCLrsJjqsIDsm4zsmpQhIC0g44WI44WHXCI6XCJBbm55ZW9uZyEgLSB3bGRoXCIsIFwi7KCc66qpIOyXhuydjFwiOlwiVW50aXRsZWRcIiwgXCLquYDsp4DsmKTsnZgg7ZmI7Y6Y7J207KeA7J6F64uI64ukLlwiOlwiSmlvIEdpbSdzIGhvbWVwYWdlLlwifSl9KV07XG5tb2R1bGUuZXhwb3J0cyA9IGRvYy5sZW5ndGggPD0gMSA/IGRvY1swXSA6IGRvYzsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHVzZUkxOG4gfSBmcm9tICcuLi9nbG9iYWwvaTE4bic7XG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJy4uL2dsb2JhbC90aGVtZSc7XG5pbXBvcnQgeyB1c2VGZWF0dXJlIH0gZnJvbSAnLi4vZ2xvYmFsL2ZlYXR1cmUnO1xuaW1wb3J0IHsgRmVhdHVyZSwgSW50ZXJuZXRFeHBsb3JlciwgQ1NTVmFyaWFibGUgfSBmcm9tICcuLi9nbG9iYWwvZmVhdHVyZXMnO1xuXG5pbXBvcnQgJy4vd3JhcC5zY3NzJztcbmltcG9ydCBkaWN0IGZyb20gJy4vd3JhcC5kLnltbCc7XG5cbmV4cG9ydCBjb25zdCBkb21haW4gPSAnaHR0cHM6Ly93d3cud2xkaC5vcmcnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB0aXRsZT86IHN0cmluZ1xuICBkZXNjcmlwdGlvbj86IHN0cmluZ1xuICBpc01haW4/OiBib29sZWFuXG4gIHRodW1ibmFpbFVSTD86IHN0cmluZ1xuICB1c2VGYXZpY29mZj86IGJvb2xlYW5cbiAgY2xhc3NMaXN0Pzogc3RyaW5nIHwgc3RyaW5nW11cbiAgcmVxdWlyZWRGZWF0dXJlcz86IEZlYXR1cmVbXVxuICBhbGxvd0NyYXdsaW5nPzogYm9vbGVhblxuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0RWxlbWVudCB8IFJlYWN0LlJlYWN0RWxlbWVudFtdXG59O1xuXG5jb25zdCBXcmFwcGVyOiBSZWFjdC5TRkM8UHJvcHM+ID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgY2hpbGRyZW4sIHRpdGxlLCBpc01haW4sIGRlc2NyaXB0aW9uLCB0aHVtYm5haWxVUkwsIHVzZUZhdmljb2ZmLCBjbGFzc0xpc3QsIHJlcXVpcmVkRmVhdHVyZXMsXG4gICAgYWxsb3dDcmF3bGluZyxcbiAgfSA9IHByb3BzO1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyB0LCBzZXRMb2NhbGUgfSA9IHVzZUkxOG4oZGljdCk7XG4gIGNvbnN0IHsgZ2V0VGhlbWUsIHNldFRoZW1lIH0gPSB1c2VUaGVtZSgpO1xuXG4gIC8vIEZlYXR1cmUgY2hlY2tcbiAgY29uc3QgZmVhdHVyZUNoZWNrVGFyZ2V0cyA9IHJlcXVpcmVkRmVhdHVyZXMgaW5zdGFuY2VvZiBBcnJheVxuICAgID8gWy4uLm5ldyBTZXQoW0ludGVybmV0RXhwbG9yZXIsIENTU1ZhcmlhYmxlLCAuLi5yZXF1aXJlZEZlYXR1cmVzXSldXG4gICAgOiBbLi4ubmV3IFNldChbSW50ZXJuZXRFeHBsb3JlciwgQ1NTVmFyaWFibGUsIHJlcXVpcmVkRmVhdHVyZXNdKV07XG4gIHVzZUZlYXR1cmUoZmVhdHVyZUNoZWNrVGFyZ2V0cyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBMb2NhbGUgc2V0XG4gICAgc2V0TG9jYWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID09PSAna28nID8gJ2tvJyA6ICdlbicpO1xuXG4gICAgLy8gVGhlbWUgc2V0XG4gICAgc2V0VGhlbWUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRhdGFzZXQudGhlbWUgPT09ICdkYXJrJyA/ICdkYXJrJyA6ICdsaWdodCcpO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbLyogRE8gT05MWSBPTkNFICovXSk7XG5cbiAgLy8gUmVkZWZpbmUgbWV0YSBpbmZvcm1hdGlvblxuICBjb25zdCBmYWxsYmFja1RpdGxlID0gdGl0bGUgfHwgdCgn7KCc66qpIOyXhuydjCcpO1xuICBjb25zdCBmYWxsYmFja0Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24gfHwgdCgn6rmA7KeA7Jik7J2YIO2ZiO2OmOydtOyngOyeheuLiOuLpC4nKTtcblxuICBjb25zdCBkaXNwQ29sb3IgPSBnZXRUaGVtZSgpID09PSAnZGFyaycgPyAnIzJiMmIyYicgOiAnI2ZmZmZmZic7XG4gIGNvbnN0IGRpc3BUaXRsZSA9IGlzTWFpbiA/IHQoJ+uwmOqwgOybjOyalCEnKSA6IHQoJ1tbXV0g4YWNJywgW2ZhbGxiYWNrVGl0bGVdKTtcbiAgY29uc3QgbWV0YVRpdGxlID0gaXNNYWluID8gdCgn67CY6rCA7JuM7JqUISAtIOOFiOOFhycpIDogZmFsbGJhY2tUaXRsZTtcbiAgY29uc3QgbWV0YURlc2NyaXB0aW9uID0gZmFsbGJhY2tEZXNjcmlwdGlvbjtcbiAgY29uc3QgbWV0YVVSTCA9IGAke2RvbWFpbn0ke3BhdGhuYW1lfWA7XG4gIGNvbnN0IG1ldGFJbWFnZSA9IHRodW1ibmFpbFVSTDtcbiAgY29uc3QgY2xhc3NOYW1lOiBzdHJpbmcgPSBjbGFzc0xpc3QgaW5zdGFuY2VvZiBBcnJheSA/IGNsYXNzTGlzdC5qb2luKCcgJykgOiBjbGFzc0xpc3Q7XG4gIGNvbnN0IHJvYm90cyA9IGFsbG93Q3Jhd2xpbmcgPyAnbm9pbWFnZWluZGV4JyA6ICdub2luZGV4LG5vZm9sbG93JztcblxuICAvLyBSZW5kZXJcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9e2Rpc3BDb2xvcn0gLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInJvYm90c1wiIGNvbnRlbnQ9e3JvYm90c30gLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17bWV0YURlc2NyaXB0aW9ufSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17bWV0YVRpdGxlfSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9e21ldGFVUkx9IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXttZXRhSW1hZ2V9IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXttZXRhRGVzY3JpcHRpb259IC8+XG4gICAgICAgIDx0aXRsZT57ZGlzcFRpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIGhyZWY9e3VzZUZhdmljb2ZmID8gJy9mYXZpY29mZi5pY28nIDogJy9mYXZpY29uLmljbyd9IHJlbD1cInNob3J0Y3V0IGljb25cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e2NoaWxkcmVufTwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuV3JhcHBlci5kZWZhdWx0UHJvcHMgPSB7XG4gIHRpdGxlOiB1bmRlZmluZWQsXG4gIGRlc2NyaXB0aW9uOiB1bmRlZmluZWQsXG4gIGlzTWFpbjogZmFsc2UsXG4gIHRodW1ibmFpbFVSTDogJy9pbWFnZXMvYmFubmVyLWluZGV4LnBuZycsXG4gIHVzZUZhdmljb2ZmOiBmYWxzZSxcbiAgY2xhc3NMaXN0OiB1bmRlZmluZWQsXG4gIHJlcXVpcmVkRmVhdHVyZXM6IHVuZGVmaW5lZCxcbiAgYWxsb3dDcmF3bGluZzogdHJ1ZSxcbiAgY2hpbGRyZW46IHVuZGVmaW5lZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdyYXBwZXI7XG4iLCJpbXBvcnQgeyBGZWF0dXJlIH0gZnJvbSAnLic7XHJcblxyXG5jb25zdCBjaGVja01ldHJpYzogRmVhdHVyZSA9IHtcclxuICBuYW1lOiAnQ1NTLnZhcmlhYmxlJyxcclxuICBjaGVja2VyOiAoKSA9PiAhIShDU1MgJiYgQ1NTLnN1cHBvcnRzKCdjb2xvcicsICd2YXIoLS1hKScpKSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNoZWNrTWV0cmljO1xyXG4iLCJpbXBvcnQgeyBGZWF0dXJlIH0gZnJvbSAnLic7XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7IGludGVyZmFjZSBXaW5kb3cgeyBpc0lFOiBib29sZWFuOyB9IH1cclxuXHJcbmNvbnN0IGNoZWNrTWV0cmljOiBGZWF0dXJlID0ge1xyXG4gIG5hbWU6ICdJbnRlbmV0IEV4cGxvcmVyIENoZWNrJyxcclxuICBjaGVja2VyOiAoKSA9PiAoe1xyXG4gICAgcGFzczogIXdpbmRvdy5pc0lFLFxyXG4gICAgZm46IGNoZWNrTWV0cmljLFxyXG4gICAgaW1wb3J0YW5jZTogMjAwMCxcclxuICAgIGluZm9FbjogJ0ludGVybmV0IEV4cGxvcmVyIGlzIGFuIG9sZCBicm93c2VyLCBkb2VzIG5vdCBzdXBwb3J0IG1vZGVybiB3ZWIgdGVjaG5vbG9naWVzLiBUaGlzIHBhZ2Ugd2lsbCBub3QgYmUgcmVuZGVyZWQgYXMgaW50ZW5kZWQgb3Igd29ya3Byb3Blcmx5LicsXHJcbiAgICBpbmZvS286ICdJbnRlcm5ldCBFeHBsb3JlcuuKlCDtmITrjIAg7Ju5IOq4sOyIoOydhCDsp4Dsm5DtlZjsp4Ag7JWK64qUIOuCoeydgCDruIzrnbzsmrDsoIDsnoXri4jri6QuIOydtCDtjpjsnbTsp4DripQgSW50ZXJuZXQgRXhwbG9yZXLsl5DshJwg7Jio7KCE7ZWY6rKMIOuztOydtOqxsOuCmCDsnpHrj5ntlZjsp4DslYrsirXri4jri6QuJyxcclxuICAgIGxpbmtFbjogJ2h0dHBzOi8vdGVjaGNvbW11bml0eS5taWNyb3NvZnQuY29tL3Q1L3dpbmRvd3MtaXQtcHJvLWJsb2cvdGhlLXBlcmlscy1vZi11c2luZy1pbnRlcm5ldC1leHBsb3Jlci1hcy15b3VyLWRlZmF1bHQtYnJvd3Nlci9iYS1wLzMzMTczMicsXHJcbiAgICBsaW5rS286ICdodHRwOi8vbmV3c2xhYml0Lmhhbmt5dW5nLmNvbS9hcnRpY2xlLzIwMTkwMjE5MjQ4NEcnLFxyXG4gIH0pLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2hlY2tNZXRyaWM7XHJcbiIsImltcG9ydCB7IEZlYXR1cmUgfSBmcm9tICcuJztcclxuXHJcbmNvbnN0IGNoZWNrTWV0cmljOiBGZWF0dXJlID0ge1xyXG4gIG5hbWU6ICdTdHJpbmcuaW5jbHVkZXMnLFxyXG4gIGNoZWNrZXI6ICgpID0+ICEhU3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlcyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNoZWNrTWV0cmljO1xyXG4iLCJpbXBvcnQgSW50ZXJuZXRFeHBsb3JlciBmcm9tICcuL0ludGVybmV0RXhwbG9yZXInO1xyXG5pbXBvcnQgQ1NTVmFyaWFibGUgZnJvbSAnLi9DU1MudmFyaWFibGUnO1xyXG5pbXBvcnQgU3RyaW5nSW5jbHVkZXMgZnJvbSAnLi9TdHJpbmcuSW5jbHVkZXMnO1xyXG5cclxuZXhwb3J0IHsgSW50ZXJuZXRFeHBsb3JlciwgQ1NTVmFyaWFibGUsIFN0cmluZ0luY2x1ZGVzIH07XHJcblxyXG5leHBvcnQgdHlwZSBGZWF0dXJlID0ge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBjaGVja2VyOiBGZWF0dXJlQ2hlY2tlcjtcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIEZlYXR1cmVDaGVja1Jlc3VsdEJhc2ljID0gYm9vbGVhbjtcclxuZXhwb3J0IHR5cGUgRmVhdHVyZUNoZWNrUmVzdWx0QWR2YW5jZWQgPSB7XHJcbiAgaW1wb3J0YW5jZTogbnVtYmVyO1xyXG4gIGZuOiBGZWF0dXJlO1xyXG4gIHBhc3M6IGJvb2xlYW47XHJcbiAgaW5mb0VuOiBzdHJpbmc7XHJcbiAgaW5mb0tvOiBzdHJpbmc7XHJcbiAgbGlua0tvOiBzdHJpbmc7XHJcbiAgbGlua0VuOiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBGZWF0dXJlQ2hlY2tlciA9ICgoKSA9PiBGZWF0dXJlQ2hlY2tSZXN1bHRCYXNpYykgfCAoKCkgPT4gRmVhdHVyZUNoZWNrUmVzdWx0QWR2YW5jZWQpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFdyYXBwZXIgZnJvbSAnLi4vY29tcG9uZW50cy93cmFwJztcbmltcG9ydCBTdGFnZUZyb250IGZyb20gJy4uL2NvbXBvbmVudHMvU3RhZ2VGcm9udCc7XG5cbmNvbnN0IEluZGV4OiBSZWFjdC5TRkMgPSAoKSA9PiAoXG4gIDxXcmFwcGVyXG4gICAgaXNNYWluXG4gICAgcmVxdWlyZWRGZWF0dXJlcz17W119XG4gID5cbiAgICA8U3RhZ2VGcm9udCAvPlxuICA8L1dyYXBwZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=