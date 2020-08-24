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
  }, showGuide && __jsx("div", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_5___default.a.linkGuide,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_5___default.a.linkGuideHeader,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  }, "".concat(t('가려던 페이지'), ":")), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }), "\xA0\xA0\xA0\xA0", guideLink), __jsx("a", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_5___default.a.goToHome,
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvNDA0L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJOb3RGb3VuZCIsInVzZUkxOG4iLCJkaWN0IiwidCIsInVzZVJvdXRlciIsInF1ZXJ5IiwibGluayIsInNyYyIsInVzZVN0YXRlIiwic2hvd0d1aWRlIiwic2V0R3VpZGVWaXNpYmlsaXR5IiwiZ3VpZGVMaW5rIiwic2V0R3VpZGVMaW5rIiwidXNlRWZmZWN0IiwicGFyc2VkTGluayIsInBhcnNlZFNyYyIsInJlcVRleHQiLCJyZXFVUkwiLCJzaG93TGluayIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVwbGFjZSIsImxlbmd0aCIsImhyZWYiLCJwYXRobmFtZSIsIiQiLCJsaW5rR3VpZGUiLCJsaW5rR3VpZGVIZWFkZXIiLCJnb1RvSG9tZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBa0IsR0FBRyxTQUFyQkEsUUFBcUIsR0FBTTtBQUFBOztBQUFBLGlCQUNqQkMsNERBQU8sQ0FBQ0Msa0RBQUQsQ0FEVTtBQUFBLE1BQ3ZCQyxDQUR1QixZQUN2QkEsQ0FEdUI7O0FBQUEseUJBRVRDLDZEQUFTLEdBQUdDLEtBRkg7QUFBQSxNQUV2QkMsSUFGdUIsb0JBRXZCQSxJQUZ1QjtBQUFBLE1BRWpCQyxHQUZpQixvQkFFakJBLEdBRmlCOztBQUFBLGtCQUdTQyxzREFBUSxDQUFDLEtBQUQsQ0FIakI7QUFBQSxNQUd4QkMsU0FId0I7QUFBQSxNQUdiQyxrQkFIYTs7QUFBQSxtQkFJR0Ysc0RBQVEsQ0FBQyxrRUFBRCxDQUpYO0FBQUEsTUFJeEJHLFNBSndCO0FBQUEsTUFJYkMsWUFKYTs7QUFNL0JDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFVBQVUsR0FBR1IsSUFBSSxJQUFJLEVBQTNCO0FBQ0EsUUFBTVMsU0FBUyxHQUFHUixHQUFHLElBQUksRUFBekI7QUFFQSxRQUFJUyxPQUFPLEdBQUcsRUFBZDtBQUNBLFFBQUlDLE1BQU0sR0FBRyxFQUFiO0FBQ0EsUUFBSUMsUUFBUSxHQUFHLEtBQWY7O0FBRUEsUUFBSUgsU0FBUyxLQUFLLElBQWxCLEVBQXdCO0FBQ3RCO0FBQ0FDLGFBQU8sYUFBTUQsU0FBTix1QkFBNEJELFVBQTVCLENBQVA7QUFDQUcsWUFBTSxxQkFBY0YsU0FBZCx1QkFBb0NELFVBQXBDLENBQU47QUFDQUksY0FBUSxHQUFHLElBQVg7QUFDRCxLQUxELE1BS08sSUFBSUgsU0FBUyxLQUFLLEtBQWxCLEVBQXlCO0FBQzlCO0FBQ0FJLFlBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsT0FBaEIsZ0NBQWdEUCxVQUFoRDtBQUNELEtBSE0sTUFHQSxJQUNMQSxVQUFVLENBQUNRLE1BQVgsS0FBc0IsQ0FBdEIsSUFDR0gsTUFBTSxDQUFDQyxRQUFQLENBQWdCRyxJQUFoQixLQUF5QiwwQkFENUIsSUFFR0osTUFBTSxDQUFDQyxRQUFQLENBQWdCRyxJQUFoQixLQUF5QiwrQkFIdkIsRUFJTDtBQUNBO0FBQ0FQLGFBQU8seUJBQWtCRyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JJLFFBQWxDLENBQVA7QUFDQVAsWUFBTSxpQ0FBMEJFLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkksUUFBMUMsQ0FBTjtBQUNBTixjQUFRLEdBQUcsSUFBWDtBQUNEOztBQUVELFFBQUlBLFFBQUosRUFBYztBQUNaUix3QkFBa0IsQ0FBQyxJQUFELENBQWxCO0FBQ0FFLGtCQUFZLENBQUM7QUFBRyxZQUFJLEVBQUVLLE1BQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFrQkQsT0FBbEIsQ0FBRCxDQUFaO0FBQ0Q7QUFDRixHQS9CUSxFQStCTixDQUFDVixJQUFELEVBQU9DLEdBQVAsQ0EvQk0sQ0FBVDtBQWlDQSxTQUNFLE1BQUMsd0RBQUQ7QUFDRSxTQUFLLEVBQUVKLENBQUMsQ0FBQyxhQUFELENBRFY7QUFFRSxlQUFXLEVBQUVBLENBQUMsQ0FBQyxxQkFBRCxDQUZoQjtBQUdFLGdCQUFZLEVBQUMsd0JBSGY7QUFJRSxlQUFXLE1BSmI7QUFLRSxpQkFBYSxFQUFFLEtBTGpCO0FBTUUsb0JBQWdCLEVBQUUsRUFOcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFFLE1BQUMsNkRBQUQ7QUFDRSxVQUFNLEVBQUVBLENBQUMsQ0FBQyxhQUFELENBRFg7QUFFRSxVQUFNLEVBQUVBLENBQUMsQ0FBQyxxQkFBRCxDQUZYO0FBR0UsY0FBVSxFQUFFQSxDQUFDLENBQUMsb0NBQUQsQ0FIZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUlNLFNBQVMsSUFDUDtBQUFLLGFBQVMsRUFBRWdCLGtEQUFDLENBQUNDLFNBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBRUQsa0RBQUMsQ0FBQ0UsZUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUF3Q3hCLENBQUMsQ0FBQyxTQUFELENBQXpDLE9BREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsc0JBS0dRLFNBTEgsQ0FQTixFQWdCRTtBQUFHLGFBQVMsRUFBRWMsa0RBQUMsQ0FBQ0csUUFBaEI7QUFBMEIsUUFBSSxFQUFDLEdBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR25CLFNBQVMsSUFBSU4sQ0FBQyxDQUFDLFFBQUQsQ0FEakIsRUFFR0EsQ0FBQyxDQUFDLHVCQUFELENBRkosQ0FoQkYsQ0FSRixDQURGO0FBZ0NELENBdkVEOztHQUFNSCxRO1VBQ1VDLG9ELEVBQ1FHLHFEOzs7S0FGbEJKLFE7QUF5RVNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzLzQwNC5lMDk1M2QyZWNlZjJmNjEwZDQzNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgV3JhcHBlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL3dyYXAnO1xuaW1wb3J0IFN0YWdlQmFjayBmcm9tICcuLi8uLi9jb21wb25lbnRzL1N0YWdlQmFjayc7XG5pbXBvcnQgeyB1c2VJMThuIH0gZnJvbSAnLi4vLi4vZ2xvYmFsL2kxOG4nO1xuXG5pbXBvcnQgJCBmcm9tICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0IGRpY3QgZnJvbSAnLi9pMThuLmQueW1sJztcblxuY29uc3QgTm90Rm91bmQ6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCB7IHQgfSA9IHVzZUkxOG4oZGljdCk7XG4gIGNvbnN0IHsgbGluaywgc3JjIH0gPSB1c2VSb3V0ZXIoKS5xdWVyeTtcbiAgY29uc3QgW3Nob3dHdWlkZSwgc2V0R3VpZGVWaXNpYmlsaXR5XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2d1aWRlTGluaywgc2V0R3VpZGVMaW5rXSA9IHVzZVN0YXRlKDw+PC8+KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHBhcnNlZExpbmsgPSBsaW5rIHx8ICcnO1xuICAgIGNvbnN0IHBhcnNlZFNyYyA9IHNyYyB8fCAnJztcblxuICAgIGxldCByZXFUZXh0ID0gJyc7XG4gICAgbGV0IHJlcVVSTCA9ICcnO1xuICAgIGxldCBzaG93TGluayA9IGZhbHNlO1xuXG4gICAgaWYgKHBhcnNlZFNyYyA9PT0gJ2dvJykge1xuICAgICAgLy8gTm90IGZvdW5kIGluIHNob3J0IFVSTChnbykgc2VydmljZVxuICAgICAgcmVxVGV4dCA9IGAke3BhcnNlZFNyY30ud2xkaC5vcmcvJHtwYXJzZWRMaW5rfWA7XG4gICAgICByZXFVUkwgPSBgaHR0cHM6Ly8ke3BhcnNlZFNyY30ud2xkaC5vcmcvJHtwYXJzZWRMaW5rfWA7XG4gICAgICBzaG93TGluayA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChwYXJzZWRTcmMgPT09ICd3d3cnKSB7XG4gICAgICAvLyBGYWxsIGJhY2sgZnJvbSB3bGRoLm9yZywgcG9zcyB0byB3d3cgc2VydmljZVxuICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoYGh0dHBzOi8vd3d3LndsZGgub3JnLyR7cGFyc2VkTGlua31gKTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgcGFyc2VkTGluay5sZW5ndGggPT09IDBcbiAgICAgICYmIHdpbmRvdy5sb2NhdGlvbi5ocmVmICE9PSAnaHR0cHM6Ly93d3cud2xkaC5vcmcvNDA0J1xuICAgICAgJiYgd2luZG93LmxvY2F0aW9uLmhyZWYgIT09ICdodHRwczovL3d3dy53bGRoLm9yZy80MDQuaHRtbCdcbiAgICApIHtcbiAgICAgIC8vIE5vdCBmb3VuZCBpbiB3d3cgc2VydmljZVxuICAgICAgcmVxVGV4dCA9IGB3d3cud2xkaC5vcmcke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX1gO1xuICAgICAgcmVxVVJMID0gYGh0dHBzOi8vd3d3LndsZGgub3JnJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9YDtcbiAgICAgIHNob3dMaW5rID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc2hvd0xpbmspIHtcbiAgICAgIHNldEd1aWRlVmlzaWJpbGl0eSh0cnVlKTtcbiAgICAgIHNldEd1aWRlTGluayg8YSBocmVmPXtyZXFVUkx9PntyZXFUZXh0fTwvYT4pO1xuICAgIH1cbiAgfSwgW2xpbmssIHNyY10pO1xuXG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXJcbiAgICAgIHRpdGxlPXt0KCfslrQuLi4g66qo66W06rKg7Ja07JqULicpfVxuICAgICAgZGVzY3JpcHRpb249e3QoJ+ywvuycvOyLnOuKlCDtjpjsnbTsp4DqsIAg7KG07J6s7ZWY7KeAIOyViuyVhOyalC4nKX1cbiAgICAgIHRodW1ibmFpbFVSTD1cIi9pbWFnZXMvYmFubmVyLTQwNC5wbmdcIlxuICAgICAgdXNlRmF2aWNvZmZcbiAgICAgIGFsbG93Q3Jhd2xpbmc9e2ZhbHNlfVxuICAgICAgcmVxdWlyZWRGZWF0dXJlcz17W119XG4gICAgPlxuICAgICAgPFN0YWdlQmFja1xuICAgICAgICBoZWFkZXI9e3QoJ+yWtC4uLiDrqqjrpbTqsqDslrTsmpQuJyl9XG4gICAgICAgIGRldGFpbD17dCgn7LC+7Jy87Iuc64qUIO2OmOydtOyngOqwgCDsobTsnqztlZjsp4Ag7JWK7JWE7JqULicpfVxuICAgICAgICBzdWdnZXN0aW9uPXt0KCfsoITsl5DripQg7J2065+wIOyggeydtCDsl4bsl4jripTrjbAuLi4g64uk7IucIO2VnCDrsogg7Iuc64+E7ZW067O07Iuc6rKg7Ja07JqUPycpfVxuICAgICAgPlxuICAgICAgICB7XG4gICAgICAgICAgc2hvd0d1aWRlICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXskLmxpbmtHdWlkZX0+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17JC5saW5rR3VpZGVIZWFkZXJ9PntgJHt0KCfqsIDroKTrjZgg7Y6Y7J207KeAJyl9OmB9PC9zcGFuPlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7XG5cbiAgICAgICAgICAgICAge2d1aWRlTGlua31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICA8YSBjbGFzc05hbWU9eyQuZ29Ub0hvbWV9IGhyZWY9XCIvXCI+XG4gICAgICAgICAge3Nob3dHdWlkZSAmJiB0KCfslYTri4jrqbQuLi4nKX1cbiAgICAgICAgICB7dCgn7Jes6riw66W8IOuIjOufrOyEnCDssqsg7Y6Y7J207KeA66GcIOqwgOyLnOqyoOyWtOyalD8nKX1cbiAgICAgICAgPC9hPlxuICAgICAgPC9TdGFnZUJhY2s+XG4gICAgPC9XcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTm90Rm91bmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9