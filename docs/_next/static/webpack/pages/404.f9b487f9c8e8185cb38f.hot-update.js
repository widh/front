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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('/'),
      guideLinkURL = _useState3[0],
      setGuideLinkURL = _useState3[1];

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
          lineNumber: 46,
          columnNumber: 20
        }
      }, reqText));
      setGuideLinkURL(reqURL);
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, showGuide && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_5___default.a.linkGuide,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_5___default.a.linkGuideHeader,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, "".concat(t('가려던 페이지'), ":")), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }), "\xA0\xA0\xA0\xA0\xA0\xA0", guideLink), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  }), __jsx("a", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_5___default.a.retry,
    href: guideLinkURL,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, t('전에는 이런 적이 없었는데... 다시 한 번 시도해보시겠어요?'))), __jsx("a", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_5___default.a.goToHome,
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, showGuide && t('아니면'), "\xA0", t('여기를 눌러서 첫 페이지로 가시겠어요?'))));
};

_s(NotFound, "dvy95Qqdw3ebCZrBmmSvaEyvpfA=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvNDA0L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJOb3RGb3VuZCIsInVzZUkxOG4iLCJkaWN0IiwidCIsInVzZVJvdXRlciIsInF1ZXJ5IiwibGluayIsInNyYyIsInVzZVN0YXRlIiwic2hvd0d1aWRlIiwic2V0R3VpZGVWaXNpYmlsaXR5IiwiZ3VpZGVMaW5rIiwic2V0R3VpZGVMaW5rIiwiZ3VpZGVMaW5rVVJMIiwic2V0R3VpZGVMaW5rVVJMIiwidXNlRWZmZWN0IiwicGFyc2VkTGluayIsInBhcnNlZFNyYyIsInJlcVRleHQiLCJyZXFVUkwiLCJzaG93TGluayIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVwbGFjZSIsImxlbmd0aCIsImhyZWYiLCJwYXRobmFtZSIsIiQiLCJsaW5rQm9keSIsImxpbmtHdWlkZSIsImxpbmtHdWlkZUhlYWRlciIsInJldHJ5IiwiZ29Ub0hvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLElBQU1BLFFBQWtCLEdBQUcsU0FBckJBLFFBQXFCLEdBQU07QUFBQTs7QUFBQSxpQkFDakJDLDREQUFPLENBQUNDLGtEQUFELENBRFU7QUFBQSxNQUN2QkMsQ0FEdUIsWUFDdkJBLENBRHVCOztBQUFBLHlCQUVUQyw2REFBUyxHQUFHQyxLQUZIO0FBQUEsTUFFdkJDLElBRnVCLG9CQUV2QkEsSUFGdUI7QUFBQSxNQUVqQkMsR0FGaUIsb0JBRWpCQSxHQUZpQjs7QUFBQSxrQkFHU0Msc0RBQVEsQ0FBQyxLQUFELENBSGpCO0FBQUEsTUFHeEJDLFNBSHdCO0FBQUEsTUFHYkMsa0JBSGE7O0FBQUEsbUJBSUdGLHNEQUFRLENBQUMsa0VBQUQsQ0FKWDtBQUFBLE1BSXhCRyxTQUp3QjtBQUFBLE1BSWJDLFlBSmE7O0FBQUEsbUJBS1NKLHNEQUFRLENBQUMsR0FBRCxDQUxqQjtBQUFBLE1BS3hCSyxZ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QUFDLENBQUNLLFFBQWhCO0FBQTBCLFFBQUksRUFBQyxHQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0d2QixTQUFTLElBQUlOLENBQUMsQ0FBQyxLQUFELENBRGpCLFVBR0dBLENBQUMsQ0FBQyx1QkFBRCxDQUhKLENBcEJGLENBUkYsQ0FERjtBQXFDRCxDQTlFRDs7R0FBTUgsUTtVQUNVQyxvRCxFQUNRRyxxRDs7O0tBRmxCSixRO0FBZ0ZTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy80MDQuZjliNDg3ZjljOGU4MTg1Y2IzOGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFdyYXBwZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy93cmFwJztcbmltcG9ydCBTdGFnZUJhY2sgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TdGFnZUJhY2snO1xuaW1wb3J0IHsgdXNlSTE4biB9IGZyb20gJy4uLy4uL2dsb2JhbC9pMThuJztcblxuaW1wb3J0ICQgZnJvbSAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCBkaWN0IGZyb20gJy4vaTE4bi5kLnltbCc7XG5cbmNvbnN0IE5vdEZvdW5kOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgeyB0IH0gPSB1c2VJMThuKGRpY3QpO1xuICBjb25zdCB7IGxpbmssIHNyYyB9ID0gdXNlUm91dGVyKCkucXVlcnk7XG4gIGNvbnN0IFtzaG93R3VpZGUsIHNldEd1aWRlVmlzaWJpbGl0eV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtndWlkZUxpbmssIHNldEd1aWRlTGlua10gPSB1c2VTdGF0ZSg8PjwvPik7XG4gIGNvbnN0IFtndWlkZUxpbmtVUkwsIHNldEd1aWRlTGlua1VSTF0gPSB1c2VTdGF0ZSgnLycpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcGFyc2VkTGluayA9IGxpbmsgfHwgJyc7XG4gICAgY29uc3QgcGFyc2VkU3JjID0gc3JjIHx8ICcnO1xuXG4gICAgbGV0IHJlcVRleHQgPSAnJztcbiAgICBsZXQgcmVxVVJMID0gJyc7XG4gICAgbGV0IHNob3dMaW5rID0gZmFsc2U7XG5cbiAgICBpZiAocGFyc2VkU3JjID09PSAnZ28nKSB7XG4gICAgICAvLyBOb3QgZm91bmQgaW4gc2hvcnQgVVJMKGdvKSBzZXJ2aWNlXG4gICAgICByZXFUZXh0ID0gYCR7cGFyc2VkU3JjfS53bGRoLm9yZy8ke3BhcnNlZExpbmt9YDtcbiAgICAgIHJlcVVSTCA9IGBodHRwczovLyR7cGFyc2VkU3JjfS53bGRoLm9yZy8ke3BhcnNlZExpbmt9YDtcbiAgICAgIHNob3dMaW5rID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHBhcnNlZFNyYyA9PT0gJ3d3dycpIHtcbiAgICAgIC8vIEZhbGwgYmFjayBmcm9tIHdsZGgub3JnLCBwb3NzIHRvIHd3dyBzZXJ2aWNlXG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShgaHR0cHM6Ly93d3cud2xkaC5vcmcvJHtwYXJzZWRMaW5rfWApO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBwYXJzZWRMaW5rLmxlbmd0aCA9PT0gMFxuICAgICAgJiYgd2luZG93LmxvY2F0aW9uLmhyZWYgIT09ICdodHRwczovL3d3dy53bGRoLm9yZy80MDQnXG4gICAgICAmJiB3aW5kb3cubG9jYXRpb24uaHJlZiAhPT0gJ2h0dHBzOi8vd3d3LndsZGgub3JnLzQwNC5odG1sJ1xuICAgICkge1xuICAgICAgLy8gTm90IGZvdW5kIGluIHd3dyBzZXJ2aWNlXG4gICAgICByZXFUZXh0ID0gYHd3dy53bGRoLm9yZyR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfWA7XG4gICAgICByZXFVUkwgPSBgaHR0cHM6Ly93d3cud2xkaC5vcmcke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX1gO1xuICAgICAgc2hvd0xpbmsgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzaG93TGluaykge1xuICAgICAgc2V0R3VpZGVWaXNpYmlsaXR5KHRydWUpO1xuICAgICAgc2V0R3VpZGVMaW5rKDxhIGNsYXNzTmFtZT17JC5saW5rQm9keX0gaHJlZj17cmVxVVJMfT57cmVxVGV4dH08L2E+KTtcbiAgICAgIHNldEd1aWRlTGlua1VSTChyZXFVUkwpO1xuICAgIH1cbiAgfSwgW2xpbmssIHNyY10pO1xuXG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXJcbiAgICAgIHRpdGxlPXt0KCfslrQuLi4g66qo66W06rKg7Ja07JqULicpfVxuICAgICAgZGVzY3JpcHRpb249e3QoJ+ywvuycvOyLnOuKlCDtjpjsnbTsp4DqsIAg7KG07J6s7ZWY7KeAIOyViuyVhOyalC4nKX1cbiAgICAgIHRodW1ibmFpbFVSTD1cIi9pbWFnZXMvYmFubmVyLTQwNC5wbmdcIlxuICAgICAgdXNlRmF2aWNvZmZcbiAgICAgIGFsbG93Q3Jhd2xpbmc9e2ZhbHNlfVxuICAgICAgcmVxdWlyZWRGZWF0dXJlcz17W119XG4gICAgPlxuICAgICAgPFN0YWdlQmFja1xuICAgICAgICBoZWFkZXI9e3QoJ+yWtC4uLiDrqqjrpbTqsqDslrTsmpQuJyl9XG4gICAgICAgIGRldGFpbD17dCgn7LC+7Jy87Iuc64qUIO2OmOydtOyngOqwgCDsobTsnqztlZjsp4Ag7JWK7JWE7JqULicpfVxuICAgICAgPlxuICAgICAgICB7XG4gICAgICAgICAgc2hvd0d1aWRlICYmIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXskLmxpbmtHdWlkZX0+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXskLmxpbmtHdWlkZUhlYWRlcn0+e2Ake3QoJ+qwgOugpOuNmCDtjpjsnbTsp4AnKX06YH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAge2d1aWRlTGlua31cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9eyQucmV0cnl9IGhyZWY9e2d1aWRlTGlua1VSTH0+XG4gICAgICAgICAgICAgICAge3QoJ+yghOyXkOuKlCDsnbTrn7Ag7KCB7J20IOyXhuyXiOuKlOuNsC4uLiDri6Tsi5wg7ZWcIOuyiCDsi5zrj4TtlbTrs7Tsi5zqsqDslrTsmpQ/Jyl9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICA8YSBjbGFzc05hbWU9eyQuZ29Ub0hvbWV9IGhyZWY9XCIvXCI+XG4gICAgICAgICAge3Nob3dHdWlkZSAmJiB0KCfslYTri4jrqbQnKX1cbiAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICB7dCgn7Jes6riw66W8IOuIjOufrOyEnCDssqsg7Y6Y7J207KeA66GcIOqwgOyLnOqyoOyWtOyalD8nKX1cbiAgICAgICAgPC9hPlxuICAgICAgPC9TdGFnZUJhY2s+XG4gICAgPC9XcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTm90Rm91bmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9