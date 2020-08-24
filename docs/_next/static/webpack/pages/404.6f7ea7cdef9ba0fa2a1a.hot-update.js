webpackHotUpdate_N_E("pages/404",{

/***/ "./pages/404/index.tsx":
/*!*****************************!*\
  !*** ./pages/404/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_wrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/wrap */ "./components/wrap.tsx");
/* harmony import */ var _components_StageBack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/StageBack */ "./components/StageBack/index.tsx");
/* harmony import */ var _global_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../global/i18n */ "./global/i18n.tsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./pages/404/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _i18n_d_yml__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./i18n.d.yml */ "./pages/404/i18n.d.yml");
/* harmony import */ var _i18n_d_yml__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_i18n_d_yml__WEBPACK_IMPORTED_MODULE_6__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\jio\\Desktop\\homepage\\src\\pages\\404\\index.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var NotFound = function NotFound() {
  _s();

  var _useI18n = Object(_global_i18n__WEBPACK_IMPORTED_MODULE_4__["useI18n"])(_i18n_d_yml__WEBPACK_IMPORTED_MODULE_6___default.a),
      t = _useI18n.t;

  var _useRouter$query = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])().query,
      link = _useRouter$query.link,
      src = _useRouter$query.src;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showGuide = _useState[0],
      setGuideVisibility = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(__jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null)),
      guideLink = _useState2[0],
      setGuideLink = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var parsedLink = link || '';
    var parsedSrc = src || '';
    var reqText = '';
    var reqURL = '';
    var showLink = false;

    if (parsedSrc === 'go') {
      // Not found in short URL(go) service
      reqText = "".concat(parsedSrc, ".wldh.org/").concat(parsedLink);
      reqURL = "https://".concat(parsedSrc, ".wldh.org/").concat(parsedLink);
      showLink = true;
    } else if (parsedSrc === 'www') {
      // Fall back from wldh.org, poss to www service
      window.location.replace("https://www.wldh.org/".concat(parsedLink));
    } else if (parsedLink.length === 0 && window.location.href !== 'https://www.wldh.org/404' && window.location.href !== 'https://www.wldh.org/404.html') {
      // Not found in www service
      reqText = "www.wldh.org".concat(window.location.pathname);
      reqURL = "https://www.wldh.org".concat(window.location.pathname);
      showLink = true;
    }

    if (showLink) {
      setGuideVisibility(true);
      setGuideLink(__jsx("a", {
        href: reqURL,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 20
        }
      }, reqText));
      var tpSpan = document.querySelector('[data-visible="transparent"]');
      if (tpSpan) tpSpan.dataset.visible = 'opaque';
    }
  }, [link, src]);
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
      lineNumber: 52,
      columnNumber: 5
    }
  }, __jsx(_components_StageBack__WEBPACK_IMPORTED_MODULE_3__["default"], {
    header: t('어... 모르겠어요.'),
    detail: t('찾으시는 페이지가 존재하지 않아요.'),
    suggestion: t('전에는 이런 적이 없었는데... 다시 한 번 시도해보시겠어요?'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, showGuide && __jsx("div", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_5___default.a.linkGuide,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_5___default.a.linkGuideHeader,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }, t('가려던 페이지'), ":"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  }), guideLink), __jsx("span", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_5___default.a.goToHome,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, showGuide && t('아니면...'), t('여기를 눌러서 첫 페이지로 가시겠어요?'))));
};

_s(NotFound, "HUL4oG7Zziier5QdOvz6xuVOi00=", false, function () {
  return [_global_i18n__WEBPACK_IMPORTED_MODULE_4__["useI18n"], next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = NotFound;
/* harmony default export */ __webpack_exports__["default"] = (NotFound);

var _c;

$RefreshReg$(_c, "NotFound");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvNDA0L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJOb3RGb3VuZCIsInVzZUkxOG4iLCJkaWN0IiwidCIsInVzZVJvdXRlciIsInF1ZXJ5IiwibGluayIsInNyYyIsInVzZVN0YXRlIiwic2hvd0d1aWRlIiwic2V0R3VpZGVWaXNpYmlsaXR5IiwiZ3VpZGVMaW5rIiwic2V0R3VpZGVMaW5rIiwidXNlRWZmZWN0IiwicGFyc2VkTGluayIsInBhcnNlZFNyYyIsInJlcVRleHQiLCJyZXFVUkwiLCJzaG93TGluayIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVwbGFjZSIsImxlbmd0aCIsImhyZWYiLCJwYXRobmFtZSIsInRwU3BhbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImRhdGFzZXQiLCJ2aXNpYmxlIiwiJCIsImxpbmtHdWlkZSIsImxpbmtHdWlkZUhlYWRlciIsImdvVG9Ib21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxRQUFrQixHQUFHLFNBQXJCQSxRQUFxQixHQUFNO0FBQUE7O0FBQUEsaUJBQ2pCQyw0REFBTyxDQUFDQyxrREFBRCxDQURVO0FBQUEsTUFDdkJDLENBRHVCLFlBQ3ZCQSxDQUR1Qjs7QUFBQSx5QkFFVEMsNkRBQVMsR0FBR0MsS0FGSDtBQUFBLE1BRXZCQyxJQUZ1QixvQkFFdkJBLElBRnVCO0FBQUEsTUFFakJDLEdBRmlCLG9CQUVqQkEsR0FGaUI7O0FBQUEsa0JBR1NDLHNEQUFRLENBQUMsS0FBRCxDQUhqQjtBQUFBLE1BR3hCQyxTQUh3QjtBQUFBLE1BR2JDLGtCQUhhOztBQUFBLG1CQUlHRixzREFBUSxDQUFDLGtFQUFELENBSlg7QUFBQSxNQUl4QkcsU0FKd0I7QUFBQSxNQUliQyxZQUphOztBQU0vQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsVUFBVSxHQUFH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Q0FmRixDQVJGLENBREY7QUErQkQsQ0F4RUQ7O0dBQU1ILFE7VUFDVUMsb0QsRUFDUUcscUQ7OztLQUZsQkosUTtBQTBFU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvNDA0LjZmN2VhN2NkZWY5YmEwZmEyYTFhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBXcmFwcGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvd3JhcCc7XG5pbXBvcnQgU3RhZ2VCYWNrIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU3RhZ2VCYWNrJztcbmltcG9ydCB7IHVzZUkxOG4gfSBmcm9tICcuLi8uLi9nbG9iYWwvaTE4bic7XG5cbmltcG9ydCAkIGZyb20gJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgZGljdCBmcm9tICcuL2kxOG4uZC55bWwnO1xuXG5jb25zdCBOb3RGb3VuZDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlSTE4bihkaWN0KTtcbiAgY29uc3QgeyBsaW5rLCBzcmMgfSA9IHVzZVJvdXRlcigpLnF1ZXJ5O1xuICBjb25zdCBbc2hvd0d1aWRlLCBzZXRHdWlkZVZpc2liaWxpdHldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZ3VpZGVMaW5rLCBzZXRHdWlkZUxpbmtdID0gdXNlU3RhdGUoPD48Lz4pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcGFyc2VkTGluayA9IGxpbmsgfHwgJyc7XG4gICAgY29uc3QgcGFyc2VkU3JjID0gc3JjIHx8ICcnO1xuXG4gICAgbGV0IHJlcVRleHQgPSAnJztcbiAgICBsZXQgcmVxVVJMID0gJyc7XG4gICAgbGV0IHNob3dMaW5rID0gZmFsc2U7XG5cbiAgICBpZiAocGFyc2VkU3JjID09PSAnZ28nKSB7XG4gICAgICAvLyBOb3QgZm91bmQgaW4gc2hvcnQgVVJMKGdvKSBzZXJ2aWNlXG4gICAgICByZXFUZXh0ID0gYCR7cGFyc2VkU3JjfS53bGRoLm9yZy8ke3BhcnNlZExpbmt9YDtcbiAgICAgIHJlcVVSTCA9IGBodHRwczovLyR7cGFyc2VkU3JjfS53bGRoLm9yZy8ke3BhcnNlZExpbmt9YDtcbiAgICAgIHNob3dMaW5rID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHBhcnNlZFNyYyA9PT0gJ3d3dycpIHtcbiAgICAgIC8vIEZhbGwgYmFjayBmcm9tIHdsZGgub3JnLCBwb3NzIHRvIHd3dyBzZXJ2aWNlXG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShgaHR0cHM6Ly93d3cud2xkaC5vcmcvJHtwYXJzZWRMaW5rfWApO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBwYXJzZWRMaW5rLmxlbmd0aCA9PT0gMFxuICAgICAgJiYgd2luZG93LmxvY2F0aW9uLmhyZWYgIT09ICdodHRwczovL3d3dy53bGRoLm9yZy80MDQnXG4gICAgICAmJiB3aW5kb3cubG9jYXRpb24uaHJlZiAhPT0gJ2h0dHBzOi8vd3d3LndsZGgub3JnLzQwNC5odG1sJ1xuICAgICkge1xuICAgICAgLy8gTm90IGZvdW5kIGluIHd3dyBzZXJ2aWNlXG4gICAgICByZXFUZXh0ID0gYHd3dy53bGRoLm9yZyR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfWA7XG4gICAgICByZXFVUkwgPSBgaHR0cHM6Ly93d3cud2xkaC5vcmcke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX1gO1xuICAgICAgc2hvd0xpbmsgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzaG93TGluaykge1xuICAgICAgc2V0R3VpZGVWaXNpYmlsaXR5KHRydWUpO1xuICAgICAgc2V0R3VpZGVMaW5rKDxhIGhyZWY9e3JlcVVSTH0+e3JlcVRleHR9PC9hPik7XG4gICAgICBjb25zdCB0cFNwYW46IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdmlzaWJsZT1cInRyYW5zcGFyZW50XCJdJyk7XG4gICAgICBpZiAodHBTcGFuKSB0cFNwYW4uZGF0YXNldC52aXNpYmxlID0gJ29wYXF1ZSc7XG4gICAgfVxuICB9LCBbbGluaywgc3JjXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlclxuICAgICAgdGl0bGU9e3QoJ+yWtC4uLiDrqqjrpbTqsqDslrTsmpQuJyl9XG4gICAgICBkZXNjcmlwdGlvbj17dCgn7LC+7Jy87Iuc64qUIO2OmOydtOyngOqwgCDsobTsnqztlZjsp4Ag7JWK7JWE7JqULicpfVxuICAgICAgdGh1bWJuYWlsVVJMPVwiL2ltYWdlcy9iYW5uZXItNDA0LnBuZ1wiXG4gICAgICB1c2VGYXZpY29mZlxuICAgICAgYWxsb3dDcmF3bGluZz17ZmFsc2V9XG4gICAgICByZXF1aXJlZEZlYXR1cmVzPXtbXX1cbiAgICA+XG4gICAgICA8U3RhZ2VCYWNrXG4gICAgICAgIGhlYWRlcj17dCgn7Ja0Li4uIOuqqOultOqyoOyWtOyalC4nKX1cbiAgICAgICAgZGV0YWlsPXt0KCfssL7snLzsi5zripQg7Y6Y7J207KeA6rCAIOyhtOyerO2VmOyngCDslYrslYTsmpQuJyl9XG4gICAgICAgIHN1Z2dlc3Rpb249e3QoJ+yghOyXkOuKlCDsnbTrn7Ag7KCB7J20IOyXhuyXiOuKlOuNsC4uLiDri6Tsi5wg7ZWcIOuyiCDsi5zrj4TtlbTrs7Tsi5zqsqDslrTsmpQ/Jyl9XG4gICAgICA+XG4gICAgICAgIHtcbiAgICAgICAgICBzaG93R3VpZGUgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyQubGlua0d1aWRlfT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXskLmxpbmtHdWlkZUhlYWRlcn0+e3QoJ+qwgOugpOuNmCDtjpjsnbTsp4AnKX06PC9zcGFuPlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIHtndWlkZUxpbmt9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXskLmdvVG9Ib21lfT5cbiAgICAgICAgICB7c2hvd0d1aWRlICYmIHQoJ+yVhOuLiOuptC4uLicpfVxuICAgICAgICAgIHt0KCfsl6zquLDrpbwg64iM65+s7IScIOyyqyDtjpjsnbTsp4DroZwg6rCA7Iuc6rKg7Ja07JqUPycpfVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L1N0YWdlQmFjaz5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOb3RGb3VuZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=