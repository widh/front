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
      lineNumber: 50,
      columnNumber: 5
    }
  }, __jsx(_components_StageBack__WEBPACK_IMPORTED_MODULE_3__["default"], {
    header: t('어... 모르겠어요.'),
    detail: t('찾으시는 페이지가 존재하지 않아요.'),
    suggestion: t('전에는 이런 적이 없었는데... 다시 한 번 시도해보시겠어요?'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, showGuide && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_5___default.a.linkGuide,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_5___default.a.linkGuideHeader,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, "".concat(t('가려던 페이지'), ":")), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }), "\xA0\xA0\xA0\xA0", guideLink), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 15
    }
  })), __jsx("a", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_5___default.a.goToHome,
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvNDA0L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJOb3RGb3VuZCIsInVzZUkxOG4iLCJkaWN0IiwidCIsInVzZVJvdXRlciIsInF1ZXJ5IiwibGluayIsInNyYyIsInVzZVN0YXRlIiwic2hvd0d1aWRlIiwic2V0R3VpZGVWaXNpYmlsaXR5IiwiZ3VpZGVMaW5rIiwic2V0R3VpZGVMaW5rIiwidXNlRWZmZWN0IiwicGFyc2VkTGluayIsInBhcnNlZFNyYyIsInJlcVRleHQiLCJyZXFVUkwiLCJzaG93TGluayIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVwbGFjZSIsImxlbmd0aCIsImhyZWYiLCJwYXRobmFtZSIsIiQiLCJsaW5rR3VpZGUiLCJsaW5rR3VpZGVIZWFkZXIiLCJnb1RvSG9tZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBa0IsR0FBRyxTQUFyQkEsUUFBcUIsR0FBTTtBQUFBOztBQUFBLGlCQUNqQkMsNERBQU8sQ0FBQ0Msa0RBQUQsQ0FEVTtBQUFBLE1BQ3ZCQyxDQUR1QixZQUN2QkEsQ0FEdUI7O0FBQUEseUJBRVRDLDZEQUFTLEdBQUdDLEtBRkg7QUFBQSxNQUV2QkMsSUFGdUIsb0JBRXZCQSxJQUZ1QjtBQUFBLE1BRWpCQyxHQUZpQixvQkFFakJBLEdBRmlCOztBQUFBLGtCQUdTQyxzREFBUSxDQUFDLEtBQUQsQ0FIakI7QUFBQSxNQUd4QkMsU0FId0I7QUFBQSxNQUdiQyxrQkFIYTs7QUFBQSxtQkFJR0Ysc0RBQVEsQ0FBQyxrRUFBRCxDQUpYO0FBQUEsTUFJeEJHLFNBSndCO0FBQUEsTUFJYkMsWUFKYTs7QUFNL0JDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFVBQVUsR0FBR1IsSUFBSSxJQUFJLEVBQTNCO0FBQ0EsUUFBTVMsU0FBUyxHQUFHUixHQUFHLElBQUksRUFBekI7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dGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBXcmFwcGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvd3JhcCc7XG5pbXBvcnQgU3RhZ2VCYWNrIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU3RhZ2VCYWNrJztcbmltcG9ydCB7IHVzZUkxOG4gfSBmcm9tICcuLi8uLi9nbG9iYWwvaTE4bic7XG5cbmltcG9ydCAkIGZyb20gJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgZGljdCBmcm9tICcuL2kxOG4uZC55bWwnO1xuXG5jb25zdCBOb3RGb3VuZDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlSTE4bihkaWN0KTtcbiAgY29uc3QgeyBsaW5rLCBzcmMgfSA9IHVzZVJvdXRlcigpLnF1ZXJ5O1xuICBjb25zdCBbc2hvd0d1aWRlLCBzZXRHdWlkZVZpc2liaWxpdHldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZ3VpZGVMaW5rLCBzZXRHdWlkZUxpbmtdID0gdXNlU3RhdGUoPD48Lz4pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcGFyc2VkTGluayA9IGxpbmsgfHwgJyc7XG4gICAgY29uc3QgcGFyc2VkU3JjID0gc3JjIHx8ICcnO1xuXG4gICAgbGV0IHJlcVRleHQgPSAnJztcbiAgICBsZXQgcmVxVVJMID0gJyc7XG4gICAgbGV0IHNob3dMaW5rID0gZmFsc2U7XG5cbiAgICBpZiAocGFyc2VkU3JjID09PSAnZ28nKSB7XG4gICAgICAvLyBOb3QgZm91bmQgaW4gc2hvcnQgVVJMKGdvKSBzZXJ2aWNlXG4gICAgICByZXFUZXh0ID0gYCR7cGFyc2VkU3JjfS53bGRoLm9yZy8ke3BhcnNlZExpbmt9YDtcbiAgICAgIHJlcVVSTCA9IGBodHRwczovLyR7cGFyc2VkU3JjfS53bGRoLm9yZy8ke3BhcnNlZExpbmt9YDtcbiAgICAgIHNob3dMaW5rID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHBhcnNlZFNyYyA9PT0gJ3d3dycpIHtcbiAgICAgIC8vIEZhbGwgYmFjayBmcm9tIHdsZGgub3JnLCBwb3NzIHRvIHd3dyBzZXJ2aWNlXG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShgaHR0cHM6Ly93d3cud2xkaC5vcmcvJHtwYXJzZWRMaW5rfWApO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBwYXJzZWRMaW5rLmxlbmd0aCA9PT0gMFxuICAgICAgJiYgd2luZG93LmxvY2F0aW9uLmhyZWYgIT09ICdodHRwczovL3d3dy53bGRoLm9yZy80MDQnXG4gICAgICAmJiB3aW5kb3cubG9jYXRpb24uaHJlZiAhPT0gJ2h0dHBzOi8vd3d3LndsZGgub3JnLzQwNC5odG1sJ1xuICAgICkge1xuICAgICAgLy8gTm90IGZvdW5kIGluIHd3dyBzZXJ2aWNlXG4gICAgICByZXFUZXh0ID0gYHd3dy53bGRoLm9yZyR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfWA7XG4gICAgICByZXFVUkwgPSBgaHR0cHM6Ly93d3cud2xkaC5vcmcke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX1gO1xuICAgICAgc2hvd0xpbmsgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzaG93TGluaykge1xuICAgICAgc2V0R3VpZGVWaXNpYmlsaXR5KHRydWUpO1xuICAgICAgc2V0R3VpZGVMaW5rKDxhIGhyZWY9e3JlcVVSTH0+e3JlcVRleHR9PC9hPik7XG4gICAgfVxuICB9LCBbbGluaywgc3JjXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlclxuICAgICAgdGl0bGU9e3QoJ+yWtC4uLiDrqqjrpbTqsqDslrTsmpQuJyl9XG4gICAgICBkZXNjcmlwdGlvbj17dCgn7LC+7Jy87Iuc64qUIO2OmOydtOyngOqwgCDsobTsnqztlZjsp4Ag7JWK7JWE7JqULicpfVxuICAgICAgdGh1bWJuYWlsVVJMPVwiL2ltYWdlcy9iYW5uZXItNDA0LnBuZ1wiXG4gICAgICB1c2VGYXZpY29mZlxuICAgICAgYWxsb3dDcmF3bGluZz17ZmFsc2V9XG4gICAgICByZXF1aXJlZEZlYXR1cmVzPXtbXX1cbiAgICA+XG4gICAgICA8U3RhZ2VCYWNrXG4gICAgICAgIGhlYWRlcj17dCgn7Ja0Li4uIOuqqOultOqyoOyWtOyalC4nKX1cbiAgICAgICAgZGV0YWlsPXt0KCfssL7snLzsi5zripQg7Y6Y7J207KeA6rCAIOyhtOyerO2VmOyngCDslYrslYTsmpQuJyl9XG4gICAgICAgIHN1Z2dlc3Rpb249e3QoJ+yghOyXkOuKlCDsnbTrn7Ag7KCB7J20IOyXhuyXiOuKlOuNsC4uLiDri6Tsi5wg7ZWcIOuyiCDsi5zrj4TtlbTrs7Tsi5zqsqDslrTsmpQ/Jyl9XG4gICAgICA+XG4gICAgICAgIHtcbiAgICAgICAgICBzaG93R3VpZGUgJiYgKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyQubGlua0d1aWRlfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9eyQubGlua0d1aWRlSGVhZGVyfT57YCR7dCgn6rCA66Ck642YIO2OmOydtOyngCcpfTpgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtcbiAgICAgICAgICAgICAgICB7Z3VpZGVMaW5rfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgPGEgY2xhc3NOYW1lPXskLmdvVG9Ib21lfSBocmVmPVwiL1wiPlxuICAgICAgICAgIHtzaG93R3VpZGUgJiYgdCgn7JWE64uI66m0Li4uJyl9XG4gICAgICAgICAge3QoJ+yXrOq4sOulvCDriIzrn6zshJwg7LKrIO2OmOydtOyngOuhnCDqsIDsi5zqsqDslrTsmpQ/Jyl9XG4gICAgICAgIDwvYT5cbiAgICAgIDwvU3RhZ2VCYWNrPlxuICAgIDwvV3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5vdEZvdW5kO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==