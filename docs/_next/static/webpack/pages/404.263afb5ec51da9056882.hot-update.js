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
      lineNumber: 73,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvNDA0L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJOb3RGb3VuZCIsInVzZUkxOG4iLCJkaWN0IiwidCIsInVzZVJvdXRlciIsInF1ZXJ5IiwibGluayIsInNyYyIsInVzZVN0YXRlIiwic2hvd0d1aWRlIiwic2V0R3VpZGVWaXNpYmlsaXR5IiwiZ3VpZGVMaW5rIiwic2V0R3VpZGVMaW5rIiwidXNlRWZmZWN0IiwicGFyc2VkTGluayIsInBhcnNlZFNyYyIsInJlcVRleHQiLCJyZXFVUkwiLCJzaG93TGluayIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVwbGFjZSIsImxlbmd0aCIsImhyZWYiLCJwYXRobmFtZSIsIiQiLCJsaW5rR3VpZGUiLCJsaW5rR3VpZGVIZWFkZXIiLCJnb1RvSG9tZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBa0IsR0FBRyxTQUFyQkEsUUFBcUIsR0FBTTtBQUFBOztBQUFBLGlCQUNqQkMsNERBQU8sQ0FBQ0Msa0RBQUQsQ0FEVTtBQUFBLE1BQ3ZCQyxDQUR1QixZQUN2QkEsQ0FEdUI7O0FBQUEseUJBRVRDLDZEQUFTLEdBQUdDLEtBRkg7QUFBQSxNQUV2QkMsSUFGdUIsb0JBRXZCQSxJQUZ1QjtBQUFBLE1BRWpCQyxHQUZpQixvQkFFakJBLEdBRmlCOztBQUFBLGtCQUdTQyxzREFBUSxDQUFDLEtBQUQsQ0FIakI7QUFBQSxNQUd4QkMsU0FId0I7QUFBQSxNQUdiQyxrQkFIYTs7QUFBQSxtQkFJR0Ysc0RBQVEsQ0FBQyxrRUFBRCxDQUpYO0FBQUEsTUFJeEJHLFNBSndCO0FBQUEsTUFJYkMsWUFKYTs7QUFNL0JDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFVBQVUsR0FBR1IsSUFBSSxJQUFJLEVBQTNCO0FBQ0EsUUFBTVMsU0FBUyxHQUFHUixHQUFHLElBQUksRUFBekI7QUFFQSxRQUFJUyxPQUFPLEdBQUcsRUFBZDtBQUNBLFFBQUlDLE1BQU0sR0FBRyxFQUFiO0FBQ0EsUUFBSUMsUUFBUSxHQUFHLEtBQWY7O0FBRUEsUUFBSUgsU0FBUyxLQUFLLElBQWxCLEVBQXdCO0FBQ3RCO0FBQ0FDLGFBQU8sYUFBTUQsU0FBTix1QkFBNEJELFVBQTVCLENBQVA7QUFDQUcsWUFBTSxxQkFBY0YsU0FBZCx1QkFBb0NELFVBQXBDLENBQU47QUFDQUksY0FBUSxHQUFHLElBQVg7QUFDRCxLQUxELE1BS08sSUFBSUgsU0FBUyxLQUFLLEtBQWxCLEVBQXlCO0FBQzlCO0FBQ0FJLFlBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsT0FBaEIsZ0NBQWdEUCxVQUFoRDtBQUNELEtBSE0sTUFHQSxJQUNMQSxVQUFVLENBQUNRLE1BQVgsS0FBc0IsQ0FBdEIsSUFDR0gsTUFBTSxDQUFDQyxRQUFQLENBQWdCRyxJQUFoQixLQUF5QiwwQkFENUIsSUFFR0osTUFBTSxDQUFDQyxRQUFQLENBQWdCRyxJQUFoQixLQUF5QiwrQkFIdkIsRUFJTDtBQUNBO0FBQ0FQLGFBQU8seUJBQWtCRyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JJLFFBQWxDLENBQVA7QUFDQVAsWUFBTSxpQ0FBMEJFLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkksUUFBMUMsQ0FBTjtBQUNBTixjQUFRLEdBQUcsSUFBWDtBQUNEOztBQUVELFFBQUlBLFFBQUosRUFBYztBQUNaUix3QkFBa0IsQ0FBQyxJQUFELENBQWxCO0FBQ0FFLGtCQUFZLENBQUM7QUFBRyxZQUFJLEVBQUVLLE1BQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFrQkQsT0FBbEIsQ0FBRCxDQUFaO0FBQ0Q7QUFDRixHQS9CUSxFQStCTixDQUFDVixJQUFELEVBQU9DLEdBQVAsQ0EvQk0sQ0FBVDtBQWlDQSxTQUNFLE1BQUMsd0RBQUQ7QUFDRSxTQUFLLEVBQUVKLENBQUMsQ0FBQyxhQUFELENBRFY7QUFFRSxlQUFXLEVBQUVBLENBQUMsQ0FBQyxxQkFBRCxDQUZoQjtBQUdFLGdCQUFZLEVBQUMsd0JBSGY7QUFJRSxlQUFXLE1BSmI7QUFLRSxpQkFBYSxFQUFFLEtBTGpCO0FBTUUsb0JBQWdCLEVBQUUsRUFOcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFFLE1BQUMsNkRBQUQ7QUFDRSxVQUFNLEVBQUVBLENBQUMsQ0FBQyxhQUFELENBRFg7QUFFRSxVQUFNLEVBQUVBLENBQUMsQ0FBQyxxQkFBRCxDQUZYO0FBR0UsY0FBVSxFQUFFQSxDQUFDLENBQUMsb0NBQUQsQ0FIZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUlNLFNBQVMsSUFDUDtBQUFLLGFBQVMsRUFBRWdCLGtEQUFDLENBQUNDLFNBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBRUQsa0RBQUMsQ0FBQ0UsZUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUF3Q3hCLENBQUMsQ0FBQyxTQUFELENBQXpDLE9BREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsc0JBSUdRLFNBSkgsQ0FQTixFQWVFO0FBQUcsYUFBUyxFQUFFYyxrREFBQyxDQUFDRyxRQUFoQjtBQUEwQixRQUFJLEVBQUMsR0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHbkIsU0FBUyxJQUFJTixDQUFDLENBQUMsUUFBRCxDQURqQixFQUVHQSxDQUFDLENBQUMsdUJBQUQsQ0FGSixDQWZGLENBUkYsQ0FERjtBQStCRCxDQXRFRDs7R0FBTUgsUTtVQUNVQyxvRCxFQUNRRyxxRDs7O0tBRmxCSixRO0FBd0VTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy80MDQuMjYzYWZiNWVjNTFkYTkwNTY4ODIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFdyYXBwZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy93cmFwJztcbmltcG9ydCBTdGFnZUJhY2sgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TdGFnZUJhY2snO1xuaW1wb3J0IHsgdXNlSTE4biB9IGZyb20gJy4uLy4uL2dsb2JhbC9pMThuJztcblxuaW1wb3J0ICQgZnJvbSAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCBkaWN0IGZyb20gJy4vaTE4bi5kLnltbCc7XG5cbmNvbnN0IE5vdEZvdW5kOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgeyB0IH0gPSB1c2VJMThuKGRpY3QpO1xuICBjb25zdCB7IGxpbmssIHNyYyB9ID0gdXNlUm91dGVyKCkucXVlcnk7XG4gIGNvbnN0IFtzaG93R3VpZGUsIHNldEd1aWRlVmlzaWJpbGl0eV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtndWlkZUxpbmssIHNldEd1aWRlTGlua10gPSB1c2VTdGF0ZSg8PjwvPik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBwYXJzZWRMaW5rID0gbGluayB8fCAnJztcbiAgICBjb25zdCBwYXJzZWRTcmMgPSBzcmMgfHwgJyc7XG5cbiAgICBsZXQgcmVxVGV4dCA9ICcnO1xuICAgIGxldCByZXFVUkwgPSAnJztcbiAgICBsZXQgc2hvd0xpbmsgPSBmYWxzZTtcblxuICAgIGlmIChwYXJzZWRTcmMgPT09ICdnbycpIHtcbiAgICAgIC8vIE5vdCBmb3VuZCBpbiBzaG9ydCBVUkwoZ28pIHNlcnZpY2VcbiAgICAgIHJlcVRleHQgPSBgJHtwYXJzZWRTcmN9LndsZGgub3JnLyR7cGFyc2VkTGlua31gO1xuICAgICAgcmVxVVJMID0gYGh0dHBzOi8vJHtwYXJzZWRTcmN9LndsZGgub3JnLyR7cGFyc2VkTGlua31gO1xuICAgICAgc2hvd0xpbmsgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAocGFyc2VkU3JjID09PSAnd3d3Jykge1xuICAgICAgLy8gRmFsbCBiYWNrIGZyb20gd2xkaC5vcmcsIHBvc3MgdG8gd3d3IHNlcnZpY2VcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKGBodHRwczovL3d3dy53bGRoLm9yZy8ke3BhcnNlZExpbmt9YCk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHBhcnNlZExpbmsubGVuZ3RoID09PSAwXG4gICAgICAmJiB3aW5kb3cubG9jYXRpb24uaHJlZiAhPT0gJ2h0dHBzOi8vd3d3LndsZGgub3JnLzQwNCdcbiAgICAgICYmIHdpbmRvdy5sb2NhdGlvbi5ocmVmICE9PSAnaHR0cHM6Ly93d3cud2xkaC5vcmcvNDA0Lmh0bWwnXG4gICAgKSB7XG4gICAgICAvLyBOb3QgZm91bmQgaW4gd3d3IHNlcnZpY2VcbiAgICAgIHJlcVRleHQgPSBgd3d3LndsZGgub3JnJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9YDtcbiAgICAgIHJlcVVSTCA9IGBodHRwczovL3d3dy53bGRoLm9yZyR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfWA7XG4gICAgICBzaG93TGluayA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHNob3dMaW5rKSB7XG4gICAgICBzZXRHdWlkZVZpc2liaWxpdHkodHJ1ZSk7XG4gICAgICBzZXRHdWlkZUxpbmsoPGEgaHJlZj17cmVxVVJMfT57cmVxVGV4dH08L2E+KTtcbiAgICB9XG4gIH0sIFtsaW5rLCBzcmNdKTtcblxuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyXG4gICAgICB0aXRsZT17dCgn7Ja0Li4uIOuqqOultOqyoOyWtOyalC4nKX1cbiAgICAgIGRlc2NyaXB0aW9uPXt0KCfssL7snLzsi5zripQg7Y6Y7J207KeA6rCAIOyhtOyerO2VmOyngCDslYrslYTsmpQuJyl9XG4gICAgICB0aHVtYm5haWxVUkw9XCIvaW1hZ2VzL2Jhbm5lci00MDQucG5nXCJcbiAgICAgIHVzZUZhdmljb2ZmXG4gICAgICBhbGxvd0NyYXdsaW5nPXtmYWxzZX1cbiAgICAgIHJlcXVpcmVkRmVhdHVyZXM9e1tdfVxuICAgID5cbiAgICAgIDxTdGFnZUJhY2tcbiAgICAgICAgaGVhZGVyPXt0KCfslrQuLi4g66qo66W06rKg7Ja07JqULicpfVxuICAgICAgICBkZXRhaWw9e3QoJ+ywvuycvOyLnOuKlCDtjpjsnbTsp4DqsIAg7KG07J6s7ZWY7KeAIOyViuyVhOyalC4nKX1cbiAgICAgICAgc3VnZ2VzdGlvbj17dCgn7KCE7JeQ64qUIOydtOufsCDsoIHsnbQg7JeG7JeI64qU642wLi4uIOuLpOyLnCDtlZwg67KIIOyLnOuPhO2VtOuztOyLnOqyoOyWtOyalD8nKX1cbiAgICAgID5cbiAgICAgICAge1xuICAgICAgICAgIHNob3dHdWlkZSAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17JC5saW5rR3VpZGV9PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9eyQubGlua0d1aWRlSGVhZGVyfT57YCR7dCgn6rCA66Ck642YIO2OmOydtOyngCcpfTpgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgICB7Z3VpZGVMaW5rfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIDxhIGNsYXNzTmFtZT17JC5nb1RvSG9tZX0gaHJlZj1cIi9cIj5cbiAgICAgICAgICB7c2hvd0d1aWRlICYmIHQoJ+yVhOuLiOuptC4uLicpfVxuICAgICAgICAgIHt0KCfsl6zquLDrpbwg64iM65+s7IScIOyyqyDtjpjsnbTsp4DroZwg6rCA7Iuc6rKg7Ja07JqUPycpfVxuICAgICAgICA8L2E+XG4gICAgICA8L1N0YWdlQmFjaz5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOb3RGb3VuZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=