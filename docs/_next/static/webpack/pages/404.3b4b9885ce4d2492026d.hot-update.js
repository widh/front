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
        className: _style_scss__WEBPACK_IMPORTED_MODULE_5___default.a.linkBody,
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
  }), "\xA0\xA0\xA0\xA0\xA0\xA0", guideLink), __jsx("br", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvNDA0L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJOb3RGb3VuZCIsInVzZUkxOG4iLCJkaWN0IiwidCIsInVzZVJvdXRlciIsInF1ZXJ5IiwibGluayIsInNyYyIsInVzZVN0YXRlIiwic2hvd0d1aWRlIiwic2V0R3VpZGVWaXNpYmlsaXR5IiwiZ3VpZGVMaW5rIiwic2V0R3VpZGVMaW5rIiwidXNlRWZmZWN0IiwicGFyc2VkTGluayIsInBhcnNlZFNyYyIsInJlcVRleHQiLCJyZXFVUkwiLCJzaG93TGluayIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVwbGFjZSIsImxlbmd0aCIsImhyZWYiLCJwYXRobmFtZSIsIiQiLCJsaW5rQm9keSIsImxpbmtHdWlkZSIsImxpbmtHdWlkZUhlYWRlciIsImdvVG9Ib21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxRQUFrQixHQUFHLFNBQXJCQSxRQUFxQixHQUFNO0FBQUE7O0FBQUEsaUJBQ2pCQyw0REFBTyxDQUFDQyxrREFBRCxDQURVO0FBQUEsTUFDdkJDLENBRHVCLFlBQ3ZCQSxDQUR1Qjs7QUFBQSx5QkFFVEMsNkRBQVMsR0FBR0MsS0FGSDtBQUFBLE1BRXZCQyxJQUZ1QixvQkFFdkJBLElBRnVCO0FBQUEsTUFFakJDLEdBRmlCLG9CQUVqQkEsR0FGaUI7O0FBQUEsa0JBR1NDLHNEQUFRLENBQUMsS0FBRCxDQUhqQjtBQUFBLE1BR3hCQyxTQUh3QjtBQUFBLE1BR2JDLGtCQUhhOztBQUFBLG1CQUlHRixzREFBUSxDQUFDLGtFQUFELENBSlg7QUFBQSxNQUl4QkcsU0FKd0I7QUFBQSxNQUliQyxZQUphOztBQU0vQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsVUFBVSxHQUFHUixJQUFJLElBQUksRUFBM0I7QUFDQSxRQUFNUyxTQUFTLEdBQUdSLEdBQUcsSUFBSSxFQUF6QjtBQUVBLFFBQUlTLE9BQU8sR0FBRyxFQUFkO0FBQ0EsUUFBSUMsTUFBTSxHQUFHLEVBQWI7QUFDQSxRQUFJQyxRQUFRLEdBQUcsS0FBZjs7QUFFQSxRQUFJSCxTQUFTLEtBQUssSUFBbEIsRUFBd0I7QUFDdEI7QUFDQUMsYUFBTyxhQUFNRCxTQUFOLHVCQUE0QkQsVUFBNUIsQ0FBUDtBQUNBRyxZQUFNLHFCQUFjRixTQUFkLHVCQUFvQ0QsVUFBcEMsQ0FBTjtBQUNBSSxjQUFRLEdBQUcsSUFBWDtBQUNELEtBTEQsTUFLTyxJQUFJSCxTQUFTLEtBQUssS0FBbEIsRUFBeUI7QUFDOUI7QUFDQUksWUFBTSxDQUFDQyxRQUFQLENBQWdCQyxPQUFoQixnQ0FBZ0RQLFVBQWhEO0FBQ0QsS0FITSxNQUdBLElBQ0xBLFVBQVUsQ0FBQ1EsTUFBWCxLQUFzQixDQUF0QixJQUNHSCxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JHLElBQWhCLEtBQXlCLDBCQUQ1QixJQUVHSixNQUFNLENBQUNDLFFBQVAsQ0FBZ0JHLElBQWhCLEtBQXlCLCtCQUh2QixFQUlMO0FBQ0E7QUFDQVAsYUFBTyx5QkFBa0JHLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkksUUFBbEMsQ0FBUDtBQUNBUCxZQUFNLGlDQUEwQkUsTUFBTSxDQUFDQyxRQUFQLENBQWdCSSxRQUExQyxDQUFOO0FBQ0FOLGNBQVEsR0FBRyxJQUFYO0FBQ0Q7O0FBRUQsUUFBSUEsUUFBSixFQUFjO0FBQ1pSLHdCQUFrQixDQUFDLElBQUQsQ0FBbEI7QUFDQUUsa0JBQVksQ0FBQztBQUFHLGlCQUFTLEVBQUVhLGtEQUFDLENBQUNDLFFBQWhCO0FBQTBCLFlBQUksRUFBRVQsTUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUF5Q0QsT0FBekMsQ0FBRCxDQUFaO0FBQ0Q7QUFDRixHQS9CUSxFQStCTixDQUFDVixJQUFELEVBQU9DLEdBQVAsQ0EvQk0sQ0FBVDtBQWlDQSxTQUNFLE1BQUMsd0RBQUQ7QUFDRSxTQUFLLEVBQUVKLENBQUMsQ0FBQyxhQUFELENBRFY7QUFFRSxlQUFXLEVBQUVBLENBQUMsQ0FBQyxxQkFBRCxDQUZoQjtBQUdFLGdCQUFZLEVBQUMsd0JBSGY7QUFJRSxlQUFXLE1BSmI7QUFLRSxpQkFBYSxFQUFFLEtBTGpCO0FBTUUsb0JBQWdCLEVBQUUsRUFOcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFFLE1BQUMsNkRBQUQ7QUFDRSxVQUFNLEVBQUVBLENBQUMsQ0FBQyxhQUFELENBRFg7QUFFRSxVQUFNLEVBQUVBLENBQUMsQ0FBQyxxQkFBRCxDQUZYO0FBR0UsY0FBVSxFQUFFQSxDQUFDLENBQUMsb0NBQUQsQ0FIZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUlNLFNBQVMsSUFDUCxtRUFDRTtBQUFLLGFBQVMsRUFBRWdCLGtEQUFDLENBQUNFLFNBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBRUYsa0RBQUMsQ0FBQ0csZUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUF3Q3pCLENBQUMsQ0FBQyxTQUFELENBQXpDLE9BREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsOEJBSUdRLFNBSkgsQ0FERixFQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixDQVBOLEVBa0JFO0FBQUcsYUFBUyxFQUFFYyxrREFBQyxDQUFDSSxRQUFoQjtBQUEwQixRQUFJLEVBQUMsR0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHcEIsU0FBUyxJQUFJTixDQUFDLENBQUMsUUFBRCxDQURqQixFQUVHQSxDQUFDLENBQUMsdUJBQUQsQ0FGSixDQWxCRixDQVJGLENBREY7QUFrQ0QsQ0F6RUQ7O0dBQU1ILFE7VUFDVUMsb0QsRUFDUUcscUQ7OztLQUZsQkosUTtBQTJFU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvNDA0LjNiNGI5ODg1Y2U0ZDI0OTIwMjZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBXcmFwcGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvd3JhcCc7XG5pbXBvcnQgU3RhZ2VCYWNrIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU3RhZ2VCYWNrJztcbmltcG9ydCB7IHVzZUkxOG4gfSBmcm9tICcuLi8uLi9nbG9iYWwvaTE4bic7XG5cbmltcG9ydCAkIGZyb20gJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgZGljdCBmcm9tICcuL2kxOG4uZC55bWwnO1xuXG5jb25zdCBOb3RGb3VuZDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlSTE4bihkaWN0KTtcbiAgY29uc3QgeyBsaW5rLCBzcmMgfSA9IHVzZVJvdXRlcigpLnF1ZXJ5O1xuICBjb25zdCBbc2hvd0d1aWRlLCBzZXRHdWlkZVZpc2liaWxpdHldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZ3VpZGVMaW5rLCBzZXRHdWlkZUxpbmtdID0gdXNlU3RhdGUoPD48Lz4pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcGFyc2VkTGluayA9IGxpbmsgfHwgJyc7XG4gICAgY29uc3QgcGFyc2VkU3JjID0gc3JjIHx8ICcnO1xuXG4gICAgbGV0IHJlcVRleHQgPSAnJztcbiAgICBsZXQgcmVxVVJMID0gJyc7XG4gICAgbGV0IHNob3dMaW5rID0gZmFsc2U7XG5cbiAgICBpZiAocGFyc2VkU3JjID09PSAnZ28nKSB7XG4gICAgICAvLyBOb3QgZm91bmQgaW4gc2hvcnQgVVJMKGdvKSBzZXJ2aWNlXG4gICAgICByZXFUZXh0ID0gYCR7cGFyc2VkU3JjfS53bGRoLm9yZy8ke3BhcnNlZExpbmt9YDtcbiAgICAgIHJlcVVSTCA9IGBodHRwczovLyR7cGFyc2VkU3JjfS53bGRoLm9yZy8ke3BhcnNlZExpbmt9YDtcbiAgICAgIHNob3dMaW5rID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHBhcnNlZFNyYyA9PT0gJ3d3dycpIHtcbiAgICAgIC8vIEZhbGwgYmFjayBmcm9tIHdsZGgub3JnLCBwb3NzIHRvIHd3dyBzZXJ2aWNlXG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShgaHR0cHM6Ly93d3cud2xkaC5vcmcvJHtwYXJzZWRMaW5rfWApO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBwYXJzZWRMaW5rLmxlbmd0aCA9PT0gMFxuICAgICAgJiYgd2luZG93LmxvY2F0aW9uLmhyZWYgIT09ICdodHRwczovL3d3dy53bGRoLm9yZy80MDQnXG4gICAgICAmJiB3aW5kb3cubG9jYXRpb24uaHJlZiAhPT0gJ2h0dHBzOi8vd3d3LndsZGgub3JnLzQwNC5odG1sJ1xuICAgICkge1xuICAgICAgLy8gTm90IGZvdW5kIGluIHd3dyBzZXJ2aWNlXG4gICAgICByZXFUZXh0ID0gYHd3dy53bGRoLm9yZyR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfWA7XG4gICAgICByZXFVUkwgPSBgaHR0cHM6Ly93d3cud2xkaC5vcmcke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX1gO1xuICAgICAgc2hvd0xpbmsgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzaG93TGluaykge1xuICAgICAgc2V0R3VpZGVWaXNpYmlsaXR5KHRydWUpO1xuICAgICAgc2V0R3VpZGVMaW5rKDxhIGNsYXNzTmFtZT17JC5saW5rQm9keX0gaHJlZj17cmVxVVJMfT57cmVxVGV4dH08L2E+KTtcbiAgICB9XG4gIH0sIFtsaW5rLCBzcmNdKTtcblxuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyXG4gICAgICB0aXRsZT17dCgn7Ja0Li4uIOuqqOultOqyoOyWtOyalC4nKX1cbiAgICAgIGRlc2NyaXB0aW9uPXt0KCfssL7snLzsi5zripQg7Y6Y7J207KeA6rCAIOyhtOyerO2VmOyngCDslYrslYTsmpQuJyl9XG4gICAgICB0aHVtYm5haWxVUkw9XCIvaW1hZ2VzL2Jhbm5lci00MDQucG5nXCJcbiAgICAgIHVzZUZhdmljb2ZmXG4gICAgICBhbGxvd0NyYXdsaW5nPXtmYWxzZX1cbiAgICAgIHJlcXVpcmVkRmVhdHVyZXM9e1tdfVxuICAgID5cbiAgICAgIDxTdGFnZUJhY2tcbiAgICAgICAgaGVhZGVyPXt0KCfslrQuLi4g66qo66W06rKg7Ja07JqULicpfVxuICAgICAgICBkZXRhaWw9e3QoJ+ywvuycvOyLnOuKlCDtjpjsnbTsp4DqsIAg7KG07J6s7ZWY7KeAIOyViuyVhOyalC4nKX1cbiAgICAgICAgc3VnZ2VzdGlvbj17dCgn7KCE7JeQ64qUIOydtOufsCDsoIHsnbQg7JeG7JeI64qU642wLi4uIOuLpOyLnCDtlZwg67KIIOyLnOuPhO2VtOuztOyLnOqyoOyWtOyalD8nKX1cbiAgICAgID5cbiAgICAgICAge1xuICAgICAgICAgIHNob3dHdWlkZSAmJiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17JC5saW5rR3VpZGV9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17JC5saW5rR3VpZGVIZWFkZXJ9PntgJHt0KCfqsIDroKTrjZgg7Y6Y7J207KeAJyl9OmB9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgICAgIHtndWlkZUxpbmt9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICA8YSBjbGFzc05hbWU9eyQuZ29Ub0hvbWV9IGhyZWY9XCIvXCI+XG4gICAgICAgICAge3Nob3dHdWlkZSAmJiB0KCfslYTri4jrqbQuLi4nKX1cbiAgICAgICAgICB7dCgn7Jes6riw66W8IOuIjOufrOyEnCDssqsg7Y6Y7J207KeA66GcIOqwgOyLnOqyoOyWtOyalD8nKX1cbiAgICAgICAgPC9hPlxuICAgICAgPC9TdGFnZUJhY2s+XG4gICAgPC9XcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTm90Rm91bmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9