webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CommonFooter/index.tsx":
/*!*******************************************!*\
  !*** ./components/CommonFooter/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _global_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global/i18n */ "./global/i18n.tsx");
/* harmony import */ var _global_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../global/theme */ "./global/theme.tsx");
/* harmony import */ var _i18n_d_yml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./i18n.d.yml */ "./components/CommonFooter/i18n.d.yml");
/* harmony import */ var _i18n_d_yml__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_i18n_d_yml__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./components/CommonFooter/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\jio\\Desktop\\homepage\\src\\components\\CommonFooter\\index.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Footer = function Footer(props) {
  _s();

  var useBrightnessModeControl = props.useBrightnessModeControl,
      useLocaleControl = props.useLocaleControl,
      children = props.children,
      className = props.className;

  var _useI18n = Object(_global_i18n__WEBPACK_IMPORTED_MODULE_1__["useI18n"])(_i18n_d_yml__WEBPACK_IMPORTED_MODULE_3___default.a),
      t = _useI18n.t,
      getLocale = _useI18n.getLocale,
      toggleLocale = _useI18n.toggleLocale;

  var _useTheme = Object(_global_theme__WEBPACK_IMPORTED_MODULE_2__["useTheme"])(),
      getTheme = _useTheme.getTheme,
      toggleTheme = _useTheme.toggleTheme;

  var changeLocale = function changeLocale() {
    toggleLocale();
  };

  var changeBrightnessMode = function changeBrightnessMode() {
    toggleTheme();
  };

  var integratedClassName = [_style_scss__WEBPACK_IMPORTED_MODULE_4___default.a.footerContainer];

  if (className) {
    if (className instanceof Array) {
      integratedClassName = integratedClassName.concat(className);
    } else {
      integratedClassName.push(className);
    }
  }

  return __jsx("footer", {
    className: integratedClassName.join(' '),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx("section", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_4___default.a.copyrightSection,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_4___default.a.copyrightText,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, "\xA9 2020 ".concat(t('지오'), "."))), useBrightnessModeControl && __jsx("section", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_4___default.a.brightnessSection,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx("button", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_4___default.a.controlButton,
    type: "button",
    onClick: changeBrightnessMode,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, t(getTheme() === 'dark' ? '밝게 보기' : '어둡게 보기')))), useLocaleControl && __jsx("section", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_4___default.a.localeSection,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, __jsx("button", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_4___default.a.controlButton,
    type: "button",
    onClick: changeLocale,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }, t(getLocale() === 'en' ? '한국어' : 'English')))), children);
};

_s(Footer, "6vRu2zeSFkSiUblyN00DMsobYXE=", false, function () {
  return [_global_i18n__WEBPACK_IMPORTED_MODULE_1__["useI18n"], _global_theme__WEBPACK_IMPORTED_MODULE_2__["useTheme"]];
});

_c = Footer;
Footer.defaultProps = {
  useBrightnessModeControl: false,
  useLocaleControl: true,
  children: undefined,
  className: undefined
};
/* harmony default export */ __webpack_exports__["default"] = (Footer);

var _c;

$RefreshReg$(_c, "Footer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tb25Gb290ZXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkZvb3RlciIsInByb3BzIiwidXNlQnJpZ2h0bmVzc01vZGVDb250cm9sIiwidXNlTG9jYWxlQ29udHJvbCIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwidXNlSTE4biIsImRpY3QiLCJ0IiwiZ2V0TG9jYWxlIiwidG9nZ2xlTG9jYWxlIiwidXNlVGhlbWUiLCJnZXRUaGVtZSIsInRvZ2dsZVRoZW1lIiwiY2hhbmdlTG9jYWxlIiwiY2hhbmdlQnJpZ2h0bmVzc01vZGUiLCJpbnRlZ3JhdGVkQ2xhc3NOYW1lIiwiJCIsImZvb3RlckNvbnRhaW5lciIsIkFycmF5IiwiY29uY2F0IiwicHVzaCIsImpvaW4iLCJjb3B5cmlnaHRTZWN0aW9uIiwiY29weXJpZ2h0VGV4dCIsImJyaWdodG5lc3NTZWN0aW9uIiwiY29udHJvbEJ1dHRvbiIsImxvY2FsZVNlY3Rpb24iLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBU0EsSUFBTUEsTUFBd0IsR0FBRyxTQUEzQkEsTUFBMkIsQ0FBQ0MsS0FBRCxFQUFrQjtBQUFBOztBQUFBLE1BRS9DQyx3QkFGK0MsR0FHN0NELEtBSDZDLENBRS9DQyx3QkFGK0M7QUFBQSxNQUVyQkMsZ0JBRnFCLEdBRzdDRixLQUg2QyxDQUVyQkUsZ0JBRnFCO0FBQUEsTUFFSEMsUUFGRyxHQUc3Q0gsS0FINkMsQ0FFSEcsUUFGRztBQUFBLE1BRU9DLFNBRlAsR0FHN0NKLEtBSDZDLENBRU9JLFNBRlA7O0FBQUEsaUJBSVZDLDREQUFPLENBQUNDLGtEQUFELENBSkc7QUFBQSxNQUl6Q0MsQ0FKeUMsWUFJekNBLENBSnlDO0FBQUEsTUFJdENDLFNBSnNDLFlBSXRDQSxTQUpzQztBQUFBLE1BSTNCQyxZQUoyQixZQUkzQkEsWUFKMkI7O0FBQUEsa0JBS2ZDLDhEQUFRLEVBTE87QUFBQSxNQUt6Q0MsUUFMeUMsYUFLekNBLFFBTHlDO0FBQUEsTUFLL0JDLFdBTCtCLGFBSy9CQSxXQUwrQjs7QUFPakQsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QkosZ0JBQVk7QUFDYixHQUZEOztBQUlBLE1BQU1LLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsR0FBTTtBQUNqQ0YsZUFBVztBQUNaLEdBRkQ7O0FBSUEsTUFBSUcsbUJBQW1CLEdBQUcsQ0FBQ0Msa0RBQUMsQ0FBQ0MsZUFBSCxDQUExQjs7QUFDQSxNQUFJYixTQUFKLEVBQWU7QUFDYixRQUFJQSxTQUFTLFlBQVljLEtBQXpCLEVBQWdDO0FBQzlCSCx5QkFBbUIsR0FBR0EsbUJBQW1CLENBQUNJLE1BQXBCLENBQTJCZixTQUEzQixDQUF0QjtBQUNELEtBRkQsTUFFTztBQUNMVyx5QkFBbUIsQ0FBQ0ssSUFBcEIsQ0FBeUJoQixTQUF6QjtBQUNEO0FBQ0Y7O0FBRUQsU0FDRTtBQUFRLGFBQVMsRUFBRVcsbUJBQW1CLENBQUNNLElBQXBCLENBQXlCLEdBQXpCLENBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFTLGFBQVMsRUFBRUwsa0RBQUMsQ0FBQ00sZ0JBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBRU4sa0RBQUMsQ0FBQ08sYUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFDYWhCLENBQUMsQ0FBQyxJQUFELENBRGQsT0FERixDQURGLEVBT0lOLHdCQUF3QixJQUN0QjtBQUFTLGFBQVMsRUFBRWUsa0RBQUMsQ0FBQ1EsaUJBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLGFBQVMsRUFBRVIsa0RBQUMsQ0FBQ1MsYUFBckI7QUFBb0MsUUFBSSxFQUFDLFFBQXpDO0FBQWtELFdBQU8sRUFBRVgsb0JBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9QLENBQUMsQ0FBQ0ksUUFBUSxPQUFPLE1BQWYsR0FBd0IsT0FBeEIsR0FBa0MsUUFBbkMsQ0FBUixDQURGLENBREYsQ0FSTixFQWdCSVQsZ0JBQWdCLElBQ2Q7QUFBUyxhQUFTLEVBQUVjLGtEQUFDLENBQUNVLGFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLGFBQVMsRUFBRVYsa0RBQUMsQ0FBQ1MsYUFBckI7QUFBb0MsUUFBSSxFQUFDLFFBQXpDO0FBQWtELFdBQU8sRUFBRVosWUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT04sQ0FBQyxDQUFDQyxTQUFTLE9BQU8sSUFBaEIsR0FBdUIsS0FBdkIsR0FBK0IsU0FBaEMsQ0FBUixDQURGLENBREYsQ0FqQk4sRUF3QklMLFFBeEJKLENBREY7QUE0QkQsQ0FwREQ7O0dBQU1KLE07VUFJbUNNLG9ELEVBQ0xLLHNEOzs7S0FMOUJYLE07QUFzRE5BLE1BQU0sQ0FBQzRCLFlBQVAsR0FBc0I7QUFDcEIxQiwwQkFBd0IsRUFBRSxLQUROO0FBRXBCQyxrQkFBZ0IsRUFBRSxJQUZFO0FBR3BCQyxVQUFRLEVBQUV5QixTQUhVO0FBSXBCeEIsV0FBUyxFQUFFd0I7QUFKUyxDQUF0QjtBQU9lN0IscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzFiNTEyNGU4ZGQ1YmYyM2JlY2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VJMThuIH0gZnJvbSAnLi4vLi4vZ2xvYmFsL2kxOG4nO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICcuLi8uLi9nbG9iYWwvdGhlbWUnO1xuXG5pbXBvcnQgZGljdCBmcm9tICcuL2kxOG4uZC55bWwnO1xuaW1wb3J0ICQgZnJvbSAnLi9zdHlsZS5zY3NzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdXNlQnJpZ2h0bmVzc01vZGVDb250cm9sPzogYm9vbGVhbjtcbiAgdXNlTG9jYWxlQ29udHJvbD86IGJvb2xlYW47XG4gIGNsYXNzTmFtZT86IHN0cmluZyB8IHN0cmluZ1tdO1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0RWxlbWVudCB8IFJlYWN0LlJlYWN0RWxlbWVudFtdO1xufVxuXG5jb25zdCBGb290ZXI6IFJlYWN0LlNGQzxQcm9wcz4gPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICB1c2VCcmlnaHRuZXNzTW9kZUNvbnRyb2wsIHVzZUxvY2FsZUNvbnRyb2wsIGNoaWxkcmVuLCBjbGFzc05hbWUsXG4gIH0gPSBwcm9wcztcbiAgY29uc3QgeyB0LCBnZXRMb2NhbGUsIHRvZ2dsZUxvY2FsZSB9ID0gdXNlSTE4bihkaWN0KTtcbiAgY29uc3QgeyBnZXRUaGVtZSwgdG9nZ2xlVGhlbWUgfSA9IHVzZVRoZW1lKCk7XG5cbiAgY29uc3QgY2hhbmdlTG9jYWxlID0gKCkgPT4ge1xuICAgIHRvZ2dsZUxvY2FsZSgpO1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZUJyaWdodG5lc3NNb2RlID0gKCkgPT4ge1xuICAgIHRvZ2dsZVRoZW1lKCk7XG4gIH07XG5cbiAgbGV0IGludGVncmF0ZWRDbGFzc05hbWUgPSBbJC5mb290ZXJDb250YWluZXJdO1xuICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgaWYgKGNsYXNzTmFtZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICBpbnRlZ3JhdGVkQ2xhc3NOYW1lID0gaW50ZWdyYXRlZENsYXNzTmFtZS5jb25jYXQoY2xhc3NOYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW50ZWdyYXRlZENsYXNzTmFtZS5wdXNoKGNsYXNzTmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT17aW50ZWdyYXRlZENsYXNzTmFtZS5qb2luKCcgJyl9PlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXskLmNvcHlyaWdodFNlY3Rpb259PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9eyQuY29weXJpZ2h0VGV4dH0+XG4gICAgICAgICAge2DCqSAyMDIwICR7dCgn7KeA7JikJyl9LmB9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIHtcbiAgICAgICAgdXNlQnJpZ2h0bmVzc01vZGVDb250cm9sICYmIChcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9eyQuYnJpZ2h0bmVzc1NlY3Rpb259PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9eyQuY29udHJvbEJ1dHRvbn0gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2NoYW5nZUJyaWdodG5lc3NNb2RlfT5cbiAgICAgICAgICAgICAgPHNwYW4+e3QoZ2V0VGhlbWUoKSA9PT0gJ2RhcmsnID8gJ+uwneqyjCDrs7TquLAnIDogJ+yWtOuRoeqyjCDrs7TquLAnKX08L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgdXNlTG9jYWxlQ29udHJvbCAmJiAoXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXskLmxvY2FsZVNlY3Rpb259PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9eyQuY29udHJvbEJ1dHRvbn0gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2NoYW5nZUxvY2FsZX0+XG4gICAgICAgICAgICAgIDxzcGFuPnt0KGdldExvY2FsZSgpID09PSAnZW4nID8gJ+2VnOq1reyWtCcgOiAnRW5nbGlzaCcpfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgeyBjaGlsZHJlbiB9XG4gICAgPC9mb290ZXI+XG4gICk7XG59O1xuXG5Gb290ZXIuZGVmYXVsdFByb3BzID0ge1xuICB1c2VCcmlnaHRuZXNzTW9kZUNvbnRyb2w6IGZhbHNlLFxuICB1c2VMb2NhbGVDb250cm9sOiB0cnVlLFxuICBjaGlsZHJlbjogdW5kZWZpbmVkLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=