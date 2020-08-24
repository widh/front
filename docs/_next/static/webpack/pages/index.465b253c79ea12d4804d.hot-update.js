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
      useLocaleControl = props.useLocaleControl;

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

  return __jsx("footer", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_4___default.a.footerContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx("section", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_4___default.a.copyrightSection,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_4___default.a.copyrightText,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, "\xA9 2020 ".concat(t('지오'), "."))), useBrightnessModeControl && __jsx("section", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_4___default.a.brightnessSection,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, __jsx("button", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_4___default.a.controlButton,
    type: "button",
    onClick: changeBrightnessMode,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, t(getTheme() === 'dark' ? '밝게 보기' : '어둡게 보기')))), useLocaleControl && __jsx("section", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_4___default.a.localeSection,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, __jsx("button", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_4___default.a.controlButton,
    type: "button",
    onClick: changeLocale,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }, t(getLocale() === 'en' ? '한국어' : 'English')))));
};

_s(Footer, "6vRu2zeSFkSiUblyN00DMsobYXE=", false, function () {
  return [_global_i18n__WEBPACK_IMPORTED_MODULE_1__["useI18n"], _global_theme__WEBPACK_IMPORTED_MODULE_2__["useTheme"]];
});

_c = Footer;
Footer.defaultProps = {
  useBrightnessModeControl: false,
  useLocaleControl: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tb25Gb290ZXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkZvb3RlciIsInByb3BzIiwidXNlQnJpZ2h0bmVzc01vZGVDb250cm9sIiwidXNlTG9jYWxlQ29udHJvbCIsInVzZUkxOG4iLCJkaWN0IiwidCIsImdldExvY2FsZSIsInRvZ2dsZUxvY2FsZSIsInVzZVRoZW1lIiwiZ2V0VGhlbWUiLCJ0b2dnbGVUaGVtZSIsImNoYW5nZUxvY2FsZSIsImNoYW5nZUJyaWdodG5lc3NNb2RlIiwiJCIsImZvb3RlckNvbnRhaW5lciIsImNvcHlyaWdodFNlY3Rpb24iLCJjb3B5cmlnaHRUZXh0IiwiYnJpZ2h0bmVzc1NlY3Rpb24iLCJjb250cm9sQnV0dG9uIiwibG9jYWxlU2VjdGlvbiIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFPQSxJQUFNQSxNQUF3QixHQUFHLFNBQTNCQSxNQUEyQixDQUFDQyxLQUFELEVBQWtCO0FBQUE7O0FBQUEsTUFFL0NDLHdCQUYrQyxHQUc3Q0QsS0FINkMsQ0FFL0NDLHdCQUYrQztBQUFBLE1BRXJCQyxnQkFGcUIsR0FHN0NGLEtBSDZDLENBRXJCRSxnQkFGcUI7O0FBQUEsaUJBSVZDLDREQUFPLENBQUNDLGtEQUFELENBSkc7QUFBQSxNQUl6Q0MsQ0FKeUMsWUFJekNBLENBSnlDO0FBQUEsTUFJdENDLFNBSnNDLFlBSXRDQSxTQUpzQztBQUFBLE1BSTNCQyxZQUoyQixZQUkzQkEsWUFKMkI7O0FBQUEsa0JBS2ZDLDhEQUFRLEVBTE87QUFBQSxNQUt6Q0MsUUFMeUMsYUFLekNBLFFBTHlDO0FBQUEsTUFLL0JDLFdBTCtCLGFBSy9CQSxXQUwrQjs7QUFPakQsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QkosZ0JBQVk7QUFDYixHQUZEOztBQUlBLE1BQU1LLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsR0FBTTtBQUNqQ0YsZUFBVztBQUNaLEdBRkQ7O0FBSUEsU0FDRTtBQUFRLGFBQVMsRUFBRUcsa0RBQUMsQ0FBQ0MsZUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVMsYUFBUyxFQUFFRCxrREFBQyxDQUFDRSxnQkFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sYUFBUyxFQUFFRixrREFBQyxDQUFDRyxhQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUNhWCxDQUFDLENBQUMsSUFBRCxDQURkLE9BREYsQ0FERixFQU9JSix3QkFBd0IsSUFDdEI7QUFBUyxhQUFTLEVBQUVZLGtEQUFDLENBQUNJLGlCQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxhQUFTLEVBQUVKLGtEQUFDLENBQUNLLGFBQXJCO0FBQW9DLFFBQUksRUFBQyxRQUF6QztBQUFrRCxXQUFPLEVBQUVOLG9CQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPUCxDQUFDLENBQUNJLFFBQVEsT0FBTyxNQUFmLEdBQXdCLE9BQXhCLEdBQWtDLFFBQW5DLENBQVIsQ0FERixDQURGLENBUk4sRUFnQklQLGdCQUFnQixJQUNkO0FBQVMsYUFBUyxFQUFFVyxrREFBQyxDQUFDTSxhQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxhQUFTLEVBQUVOLGtEQUFDLENBQUNLLGFBQXJCO0FBQW9DLFFBQUksRUFBQyxRQUF6QztBQUFrRCxXQUFPLEVBQUVQLFlBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9OLENBQUMsQ0FBQ0MsU0FBUyxPQUFPLElBQWhCLEdBQXVCLEtBQXZCLEdBQStCLFNBQWhDLENBQVIsQ0FERixDQURGLENBakJOLENBREY7QUEyQkQsQ0ExQ0Q7O0dBQU1QLE07VUFJbUNJLG9ELEVBQ0xLLHNEOzs7S0FMOUJULE07QUE0Q05BLE1BQU0sQ0FBQ3FCLFlBQVAsR0FBc0I7QUFDcEJuQiwwQkFBd0IsRUFBRSxLQUROO0FBRXBCQyxrQkFBZ0IsRUFBRTtBQUZFLENBQXRCO0FBS2VILHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQ2NWIyNTNjNzllYTEyZDQ4MDRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlSTE4biB9IGZyb20gJy4uLy4uL2dsb2JhbC9pMThuJztcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnLi4vLi4vZ2xvYmFsL3RoZW1lJztcblxuaW1wb3J0IGRpY3QgZnJvbSAnLi9pMThuLmQueW1sJztcbmltcG9ydCAkIGZyb20gJy4vc3R5bGUuc2Nzcyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHVzZUJyaWdodG5lc3NNb2RlQ29udHJvbD86IGJvb2xlYW47XG4gIHVzZUxvY2FsZUNvbnRyb2w/OiBib29sZWFuO1xufVxuXG5jb25zdCBGb290ZXI6IFJlYWN0LlNGQzxQcm9wcz4gPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICB1c2VCcmlnaHRuZXNzTW9kZUNvbnRyb2wsIHVzZUxvY2FsZUNvbnRyb2wsXG4gIH0gPSBwcm9wcztcbiAgY29uc3QgeyB0LCBnZXRMb2NhbGUsIHRvZ2dsZUxvY2FsZSB9ID0gdXNlSTE4bihkaWN0KTtcbiAgY29uc3QgeyBnZXRUaGVtZSwgdG9nZ2xlVGhlbWUgfSA9IHVzZVRoZW1lKCk7XG5cbiAgY29uc3QgY2hhbmdlTG9jYWxlID0gKCkgPT4ge1xuICAgIHRvZ2dsZUxvY2FsZSgpO1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZUJyaWdodG5lc3NNb2RlID0gKCkgPT4ge1xuICAgIHRvZ2dsZVRoZW1lKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT17JC5mb290ZXJDb250YWluZXJ9PlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXskLmNvcHlyaWdodFNlY3Rpb259PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9eyQuY29weXJpZ2h0VGV4dH0+XG4gICAgICAgICAge2DCqSAyMDIwICR7dCgn7KeA7JikJyl9LmB9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIHtcbiAgICAgICAgdXNlQnJpZ2h0bmVzc01vZGVDb250cm9sICYmIChcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9eyQuYnJpZ2h0bmVzc1NlY3Rpb259PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9eyQuY29udHJvbEJ1dHRvbn0gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2NoYW5nZUJyaWdodG5lc3NNb2RlfT5cbiAgICAgICAgICAgICAgPHNwYW4+e3QoZ2V0VGhlbWUoKSA9PT0gJ2RhcmsnID8gJ+uwneqyjCDrs7TquLAnIDogJ+yWtOuRoeqyjCDrs7TquLAnKX08L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgdXNlTG9jYWxlQ29udHJvbCAmJiAoXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXskLmxvY2FsZVNlY3Rpb259PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9eyQuY29udHJvbEJ1dHRvbn0gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2NoYW5nZUxvY2FsZX0+XG4gICAgICAgICAgICAgIDxzcGFuPnt0KGdldExvY2FsZSgpID09PSAnZW4nID8gJ+2VnOq1reyWtCcgOiAnRW5nbGlzaCcpfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgKVxuICAgICAgfVxuICAgIDwvZm9vdGVyPlxuICApO1xufTtcblxuRm9vdGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgdXNlQnJpZ2h0bmVzc01vZGVDb250cm9sOiBmYWxzZSxcbiAgdXNlTG9jYWxlQ29udHJvbDogdHJ1ZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=