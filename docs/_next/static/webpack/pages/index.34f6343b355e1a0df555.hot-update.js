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
  }, getLocale() === 'en' ? '한국어' : 'English'))), children);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tb25Gb290ZXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkZvb3RlciIsInByb3BzIiwidXNlQnJpZ2h0bmVzc01vZGVDb250cm9sIiwidXNlTG9jYWxlQ29udHJvbCIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwidXNlSTE4biIsImRpY3QiLCJ0IiwiZ2V0TG9jYWxlIiwidG9nZ2xlTG9jYWxlIiwidXNlVGhlbWUiLCJnZXRUaGVtZSIsInRvZ2dsZVRoZW1lIiwiY2hhbmdlTG9jYWxlIiwiY2hhbmdlQnJpZ2h0bmVzc01vZGUiLCJpbnRlZ3JhdGVkQ2xhc3NOYW1lIiwiJCIsImZvb3RlckNvbnRhaW5lciIsIkFycmF5IiwiY29uY2F0IiwicHVzaCIsImpvaW4iLCJjb3B5cmlnaHRTZWN0aW9uIiwiY29weXJpZ2h0VGV4dCIsImJyaWdodG5lc3NTZWN0aW9uIiwiY29udHJvbEJ1dHRvbiIsImxvY2FsZVNlY3Rpb24iLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBU0EsSUFBTUEsTUFBd0IsR0FBRyxTQUEzQkEsTUFBMkIsQ0FBQ0MsS0FBRCxFQUFrQjtBQUFBOztBQUFBLE1BRS9DQyx3QkFGK0MsR0FHN0NELEtBSDZDLENBRS9DQyx3QkFGK0M7QUFBQSxNQUVyQkMsZ0JBRnFCLEdBRzdDRixLQUg2QyxDQUVyQkUsZ0JBRnFCO0FBQUEsTUFFSEMsUUFGRyxHQUc3Q0gsS0FINkMsQ0FFSEcsUUFGRztBQUFBLE1BRU9DLFNBRlAsR0FHN0NKLEtBSDZDLENBRU9JLFNBRlA7O0FBQUEsaUJBSVZDLDREQUFPLENBQUNDLGtEQUFELENBSkc7QUFBQSxNQUl6Q0MsQ0FKeUMsWUFJekNBLENBSnlDO0FBQUEsTUFJdENDLFNBSnNDLFlBSXRDQSxTQUpzQztBQUFBLE1BSTNCQyxZQUoyQixZQUkzQkEsWUFKMkI7O0FBQUEsa0JBS2ZDLDhEQUFRLEVBTE87QUFBQSxNQUt6Q0MsUUFMeUMsYUFLekNBLFFBTHlDO0FBQUEsTUFLL0JDLFdBTCtCLGFBSy9CQSxXQUwrQjs7QUFPakQsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QkosZ0JBQVk7QUFDYixHQUZEOztBQUlBLE1BQU1LLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsR0FBTTtBQUNqQ0YsZUFBVztBQUNaLEdBRkQ7O0FBSUEsTUFBSUcsbUJBQW1CLEdBQUcsQ0FBQ0Msa0RBQUMsQ0FBQ0MsZUFBSCxDQUExQjs7QUFDQSxNQUFJYixTQUFKLEVBQWU7QUFDYixRQUFJQSxTQUFTLFlBQVljLEtBQXpCLEVBQWdDO0FBQzlCSCx5QkFBbUIsR0FBR0EsbUJBQW1CLENBQUNJLE1BQXBCLENBQTJCZixTQUEzQixDQUF0QjtBQUNELEtBRkQsTUFFTztBQUNMVyx5QkFBbUIsQ0FBQ0ssSUFBcEIsQ0FBeUJoQixTQUF6QjtBQUNEO0FBQ0Y7O0FBRUQsU0FDRTtBQUFRLGFBQVMsRUFBRVcsbUJBQW1CLENBQUNNLElBQXBCLENBQXlCLEdBQXpCLENBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFTLGFBQVMsRUFBRUwsa0RBQUMsQ0FBQ00sZ0JBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBRU4sa0RBQUMsQ0FBQ08sYUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFDYWhCLENBQUMsQ0FBQyxJQUFELENBRGQsT0FERixDQURGLEVBT0lOLHdCQUF3QixJQUN0QjtBQUFTLGFBQVMsRUFBRWUsa0RBQUMsQ0FBQ1EsaUJBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLGFBQVMsRUFBRVIsa0RBQUMsQ0FBQ1MsYUFBckI7QUFBb0MsUUFBSSxFQUFDLFFBQXpDO0FBQWtELFdBQU8sRUFBRVgsb0JBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9QLENBQUMsQ0FBQ0ksUUFBUSxPQUFPLE1BQWYsR0FBd0IsT0FBeEIsR0FBa0MsUUFBbkMsQ0FBUixDQURGLENBREYsQ0FSTixFQWdCSVQsZ0JBQWdCLElBQ2Q7QUFBUyxhQUFTLEVBQUVjLGtEQUFDLENBQUNVLGFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLGFBQVMsRUFBRVYsa0RBQUMsQ0FBQ1MsYUFBckI7QUFBb0MsUUFBSSxFQUFDLFFBQXpDO0FBQWtELFdBQU8sRUFBRVosWUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT0wsU0FBUyxPQUFPLElBQWhCLEdBQXVCLEtBQXZCLEdBQStCLFNBQXRDLENBREYsQ0FERixDQWpCTixFQXdCSUwsUUF4QkosQ0FERjtBQTRCRCxDQXBERDs7R0FBTUosTTtVQUltQ00sb0QsRUFDTEssc0Q7OztLQUw5QlgsTTtBQXNETkEsTUFBTSxDQUFDNEIsWUFBUCxHQUFzQjtBQUNwQjFCLDBCQUF3QixFQUFFLEtBRE47QUFFcEJDLGtCQUFnQixFQUFFLElBRkU7QUFHcEJDLFVBQVEsRUFBRXlCLFNBSFU7QUFJcEJ4QixXQUFTLEVBQUV3QjtBQUpTLENBQXRCO0FBT2U3QixxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zNGY2MzQzYjM1NWUxYTBkZjU1NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUkxOG4gfSBmcm9tICcuLi8uLi9nbG9iYWwvaTE4bic7XG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJy4uLy4uL2dsb2JhbC90aGVtZSc7XG5cbmltcG9ydCBkaWN0IGZyb20gJy4vaTE4bi5kLnltbCc7XG5pbXBvcnQgJCBmcm9tICcuL3N0eWxlLnNjc3MnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB1c2VCcmlnaHRuZXNzTW9kZUNvbnRyb2w/OiBib29sZWFuO1xuICB1c2VMb2NhbGVDb250cm9sPzogYm9vbGVhbjtcbiAgY2xhc3NOYW1lPzogc3RyaW5nIHwgc3RyaW5nW107XG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3RFbGVtZW50IHwgUmVhY3QuUmVhY3RFbGVtZW50W107XG59XG5cbmNvbnN0IEZvb3RlcjogUmVhY3QuU0ZDPFByb3BzPiA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHVzZUJyaWdodG5lc3NNb2RlQ29udHJvbCwgdXNlTG9jYWxlQ29udHJvbCwgY2hpbGRyZW4sIGNsYXNzTmFtZSxcbiAgfSA9IHByb3BzO1xuICBjb25zdCB7IHQsIGdldExvY2FsZSwgdG9nZ2xlTG9jYWxlIH0gPSB1c2VJMThuKGRpY3QpO1xuICBjb25zdCB7IGdldFRoZW1lLCB0b2dnbGVUaGVtZSB9ID0gdXNlVGhlbWUoKTtcblxuICBjb25zdCBjaGFuZ2VMb2NhbGUgPSAoKSA9PiB7XG4gICAgdG9nZ2xlTG9jYWxlKCk7XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlQnJpZ2h0bmVzc01vZGUgPSAoKSA9PiB7XG4gICAgdG9nZ2xlVGhlbWUoKTtcbiAgfTtcblxuICBsZXQgaW50ZWdyYXRlZENsYXNzTmFtZSA9IFskLmZvb3RlckNvbnRhaW5lcl07XG4gIGlmIChjbGFzc05hbWUpIHtcbiAgICBpZiAoY2xhc3NOYW1lIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIGludGVncmF0ZWRDbGFzc05hbWUgPSBpbnRlZ3JhdGVkQ2xhc3NOYW1lLmNvbmNhdChjbGFzc05hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnRlZ3JhdGVkQ2xhc3NOYW1lLnB1c2goY2xhc3NOYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxmb290ZXIgY2xhc3NOYW1lPXtpbnRlZ3JhdGVkQ2xhc3NOYW1lLmpvaW4oJyAnKX0+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9eyQuY29weXJpZ2h0U2VjdGlvbn0+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17JC5jb3B5cmlnaHRUZXh0fT5cbiAgICAgICAgICB7YMKpIDIwMjAgJHt0KCfsp4DsmKQnKX0uYH1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAge1xuICAgICAgICB1c2VCcmlnaHRuZXNzTW9kZUNvbnRyb2wgJiYgKFxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17JC5icmlnaHRuZXNzU2VjdGlvbn0+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17JC5jb250cm9sQnV0dG9ufSB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17Y2hhbmdlQnJpZ2h0bmVzc01vZGV9PlxuICAgICAgICAgICAgICA8c3Bhbj57dChnZXRUaGVtZSgpID09PSAnZGFyaycgPyAn67Cd6rKMIOuztOq4sCcgOiAn7Ja065Gh6rKMIOuztOq4sCcpfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgKVxuICAgICAgfVxuICAgICAge1xuICAgICAgICB1c2VMb2NhbGVDb250cm9sICYmIChcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9eyQubG9jYWxlU2VjdGlvbn0+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17JC5jb250cm9sQnV0dG9ufSB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17Y2hhbmdlTG9jYWxlfT5cbiAgICAgICAgICAgICAgPHNwYW4+e2dldExvY2FsZSgpID09PSAnZW4nID8gJ+2VnOq1reyWtCcgOiAnRW5nbGlzaCd9PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICApXG4gICAgICB9XG4gICAgICB7IGNoaWxkcmVuIH1cbiAgICA8L2Zvb3Rlcj5cbiAgKTtcbn07XG5cbkZvb3Rlci5kZWZhdWx0UHJvcHMgPSB7XG4gIHVzZUJyaWdodG5lc3NNb2RlQ29udHJvbDogZmFsc2UsXG4gIHVzZUxvY2FsZUNvbnRyb2w6IHRydWUsXG4gIGNoaWxkcmVuOiB1bmRlZmluZWQsXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==