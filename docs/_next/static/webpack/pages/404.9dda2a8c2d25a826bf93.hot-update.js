webpackHotUpdate_N_E("pages/404",{

/***/ "./pages/404.tsx":
/*!***********************!*\
  !*** ./pages/404.tsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_wrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/wrap */ "./components/wrap.tsx");
/* harmony import */ var _components_StageBack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/StageBack */ "./components/StageBack/index.tsx");
/* harmony import */ var _global_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global/i18n */ "./global/i18n.tsx");
/* harmony import */ var _404_d_yml__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./404.d.yml */ "./pages/404.d.yml");
/* harmony import */ var _404_d_yml__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_404_d_yml__WEBPACK_IMPORTED_MODULE_5__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\jio\\Desktop\\homepage\\src\\pages\\404.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Index = function Index() {
  _s();

  var _useI18n = Object(_global_i18n__WEBPACK_IMPORTED_MODULE_4__["useI18n"])(_404_d_yml__WEBPACK_IMPORTED_MODULE_5___default.a),
      t = _useI18n.t;

  var _useRouter$query = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])().query,
      link = _useRouter$query.link,
      src = _useRouter$query.src;
  return __jsx(_components_wrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: t('어... 모르겠어요.'),
    description: t('찾으시는 페이지가 존재하지 않아요.'),
    thumbnailURL: "/images/banner-404.png",
    useFavicoff: true,
    allowCrawling: false,
    requiredFeatures: [],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(_components_StageBack__WEBPACK_IMPORTED_MODULE_3__["default"], {
    header: t('어... 모르겠어요.'),
    detail: t('찾으시는 페이지가 존재하지 않아요.'),
    suggestion: t('전에는 이런 적이 없었는데... 다시 한 번 시도해보시겠어요?'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, "Test")));
};

_s(Index, "iP7bTmBRh9IOGjXVczVH0w0NySA=", false, function () {
  return [_global_i18n__WEBPACK_IMPORTED_MODULE_4__["useI18n"], next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvNDA0LnRzeCJdLCJuYW1lcyI6WyJJbmRleCIsInVzZUkxOG4iLCJkaWN0IiwidCIsInVzZVJvdXRlciIsInF1ZXJ5IiwibGluayIsInNyYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxLQUFnQixHQUFHLFNBQW5CQSxLQUFtQixHQUFNO0FBQUE7O0FBQUEsaUJBQ2ZDLDREQUFPLENBQUNDLGlEQUFELENBRFE7QUFBQSxNQUNyQkMsQ0FEcUIsWUFDckJBLENBRHFCOztBQUFBLHlCQUVQQyw2REFBUyxHQUFHQyxLQUZMO0FBQUEsTUFFckJDLElBRnFCLG9CQUVyQkEsSUFGcUI7QUFBQSxNQUVmQyxHQUZlLG9CQUVmQSxHQUZlO0FBSTdCLFNBQ0UsTUFBQyx3REFBRDtBQUNFLFNBQUssRUFBRUosQ0FBQyxDQUFDLGFBQUQsQ0FEVjtBQUVFLGVBQVcsRUFBRUEsQ0FBQyxDQUFDLHFCQUFELENBRmhCO0FBR0UsZ0JBQVksRUFBQyx3QkFIZjtBQUlFLGVBQVcsTUFKYjtBQUtFLGlCQUFhLEVBQUUsS0FMakI7QUFNRSxvQkFBZ0IsRUFBRSxFQU5wQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUUsTUFBQyw2REFBRDtBQUNFLFVBQU0sRUFBRUEsQ0FBQyxDQUFDLGFBQUQsQ0FEWDtBQUVFLFVBQU0sRUFBRUEsQ0FBQyxDQUFDLHFCQUFELENBRlg7QUFHRSxjQUFVLEVBQUVBLENBQUMsQ0FBQyxvQ0FBRCxDQUhmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsQ0FSRixDQURGO0FBa0JELENBdEJEOztHQUFNSCxLO1VBQ1VDLG9ELEVBQ1FHLHFEOzs7S0FGbEJKLEs7QUF3QlNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzLzQwNC45ZGRhMmE4YzJkMjVhODI2YmY5My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBXcmFwcGVyIGZyb20gJy4uL2NvbXBvbmVudHMvd3JhcCc7XG5pbXBvcnQgU3RhZ2VCYWNrIGZyb20gJy4uL2NvbXBvbmVudHMvU3RhZ2VCYWNrJztcbmltcG9ydCB7IHVzZUkxOG4gfSBmcm9tICcuLi9nbG9iYWwvaTE4bic7XG5cbmltcG9ydCBkaWN0IGZyb20gJy4vNDA0LmQueW1sJztcblxuY29uc3QgSW5kZXg6IFJlYWN0LlNGQyA9ICgpID0+IHtcbiAgY29uc3QgeyB0IH0gPSB1c2VJMThuKGRpY3QpO1xuICBjb25zdCB7IGxpbmssIHNyYyB9ID0gdXNlUm91dGVyKCkucXVlcnk7XG5cbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlclxuICAgICAgdGl0bGU9e3QoJ+yWtC4uLiDrqqjrpbTqsqDslrTsmpQuJyl9XG4gICAgICBkZXNjcmlwdGlvbj17dCgn7LC+7Jy87Iuc64qUIO2OmOydtOyngOqwgCDsobTsnqztlZjsp4Ag7JWK7JWE7JqULicpfVxuICAgICAgdGh1bWJuYWlsVVJMPVwiL2ltYWdlcy9iYW5uZXItNDA0LnBuZ1wiXG4gICAgICB1c2VGYXZpY29mZlxuICAgICAgYWxsb3dDcmF3bGluZz17ZmFsc2V9XG4gICAgICByZXF1aXJlZEZlYXR1cmVzPXtbXX1cbiAgICA+XG4gICAgICA8U3RhZ2VCYWNrXG4gICAgICAgIGhlYWRlcj17dCgn7Ja0Li4uIOuqqOultOqyoOyWtOyalC4nKX1cbiAgICAgICAgZGV0YWlsPXt0KCfssL7snLzsi5zripQg7Y6Y7J207KeA6rCAIOyhtOyerO2VmOyngCDslYrslYTsmpQuJyl9XG4gICAgICAgIHN1Z2dlc3Rpb249e3QoJ+yghOyXkOuKlCDsnbTrn7Ag7KCB7J20IOyXhuyXiOuKlOuNsC4uLiDri6Tsi5wg7ZWcIOuyiCDsi5zrj4TtlbTrs7Tsi5zqsqDslrTsmpQ/Jyl9XG4gICAgICA+XG4gICAgICAgIDxzcGFuPlRlc3Q8L3NwYW4+XG4gICAgICA8L1N0YWdlQmFjaz5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=