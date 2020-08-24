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
      setLocale = _useI18n.setLocale;

  var _useTheme = Object(_global_theme__WEBPACK_IMPORTED_MODULE_2__["useTheme"])(),
      getTheme = _useTheme.getTheme,
      setTheme = _useTheme.setTheme;

  var toggleLocale = function toggleLocale() {
    setLocale(getLocale() === 'en' ? 'ko' : 'en');
    document.activeElement.blur();
  };

  var toggleBrightnessMode = function toggleBrightnessMode() {
    var newTheme = getTheme() === 'dark' ? 'light' : 'dark';
    var beDark = newTheme === 'dark';

    if (beDark && window.matchMedia('(prefers-color-scheme: dark)').matches || !beDark && window.matchMedia('(prefers-color-scheme: light)').matches) {
      window.localStorage.removeItem('modarkbul');
    } else {
      window.localStorage.setItem('modarkbul', newTheme);
    }

    setTheme(newTheme);
    document.activeElement.blur();
  };

  return __jsx("footer", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_4___default.a.footerContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, __jsx("section", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_4___default.a.copyrightSection,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_4___default.a.copyrightText,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, "\xA9 2020 ".concat(t('지오'), "."))), useBrightnessModeControl && __jsx("section", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_4___default.a.brightnessSection,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, __jsx("button", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_4___default.a.controlButton,
    type: "button",
    onClick: toggleBrightnessMode,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }, t(getTheme() === 'dark' ? '밝게 보기' : '어둡게 보기')))), useLocaleControl && __jsx("section", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_4___default.a.localeSection,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, __jsx("button", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_4___default.a.controlButton,
    type: "button",
    onClick: toggleLocale,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }, t(getLocale() === 'en' ? '한국어' : 'English')))));
};

_s(Footer, "Iop3gwW9nv2wYJvHhWPKlkzzAWg=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tb25Gb290ZXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkZvb3RlciIsInByb3BzIiwidXNlQnJpZ2h0bmVzc01vZGVDb250cm9sIiwidXNlTG9jYWxlQ29udHJvbCIsInVzZUkxOG4iLCJkaWN0IiwidCIsImdldExvY2FsZSIsInNldExvY2FsZSIsInVzZVRoZW1lIiwiZ2V0VGhlbWUiLCJzZXRUaGVtZSIsInRvZ2dsZUxvY2FsZSIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsImJsdXIiLCJ0b2dnbGVCcmlnaHRuZXNzTW9kZSIsIm5ld1RoZW1lIiwiYmVEYXJrIiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsIiQiLCJmb290ZXJDb250YWluZXIiLCJjb3B5cmlnaHRTZWN0aW9uIiwiY29weXJpZ2h0VGV4dCIsImJyaWdodG5lc3NTZWN0aW9uIiwiY29udHJvbEJ1dHRvbiIsImxvY2FsZVNlY3Rpb24iLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBT0EsSUFBTUEsTUFBd0IsR0FBRyxTQUEzQkEsTUFBMkIsQ0FBQ0MsS0FBRCxFQUFrQjtBQUFBOztBQUFBLE1BRS9DQyx3QkFGK0MsR0FHN0NELEtBSDZDLENBRS9DQyx3QkFGK0M7QUFBQSxNQUVyQkMsZ0JBRnFCLEdBRzdDRixLQUg2QyxDQUVyQkUsZ0JBRnFCOztBQUFBLGlCQUliQyw0REFBTyxDQUFDQyxrREFBRCxDQUpNO0FBQUEsTUFJekNDLENBSnlDLFlBSXpDQSxDQUp5QztBQUFBLE1BSXRDQyxTQUpzQyxZQUl0Q0EsU0FKc0M7QUFBQSxNQUkzQkMsU0FKMkIsWUFJM0JBLFNBSjJCOztBQUFBLGtCQUtsQkMsOERBQVEsRUFMVTtBQUFBLE1BS3pDQyxRQUx5Qyxh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b3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUkxOG4gfSBmcm9tICcuLi8uLi9nbG9iYWwvaTE4bic7XG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJy4uLy4uL2dsb2JhbC90aGVtZSc7XG5cbmltcG9ydCBkaWN0IGZyb20gJy4vaTE4bi5kLnltbCc7XG5pbXBvcnQgJCBmcm9tICcuL3N0eWxlLnNjc3MnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB1c2VCcmlnaHRuZXNzTW9kZUNvbnRyb2w/OiBib29sZWFuO1xuICB1c2VMb2NhbGVDb250cm9sPzogYm9vbGVhbjtcbn1cblxuY29uc3QgRm9vdGVyOiBSZWFjdC5TRkM8UHJvcHM+ID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgdXNlQnJpZ2h0bmVzc01vZGVDb250cm9sLCB1c2VMb2NhbGVDb250cm9sLFxuICB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgdCwgZ2V0TG9jYWxlLCBzZXRMb2NhbGUgfSA9IHVzZUkxOG4oZGljdCk7XG4gIGNvbnN0IHsgZ2V0VGhlbWUsIHNldFRoZW1lIH0gPSB1c2VUaGVtZSgpO1xuXG4gIGNvbnN0IHRvZ2dsZUxvY2FsZSA9ICgpID0+IHtcbiAgICBzZXRMb2NhbGUoZ2V0TG9jYWxlKCkgPT09ICdlbicgPyAna28nIDogJ2VuJyk7XG4gICAgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmJsdXIoKTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVCcmlnaHRuZXNzTW9kZSA9ICgpID0+IHtcbiAgICBjb25zdCBuZXdUaGVtZSA9IGdldFRoZW1lKCkgPT09ICdkYXJrJyA/ICdsaWdodCcgOiAnZGFyayc7XG4gICAgY29uc3QgYmVEYXJrID0gbmV3VGhlbWUgPT09ICdkYXJrJztcblxuICAgIGlmIChcbiAgICAgIChiZURhcmsgJiYgd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzKVxuICAgICAgfHwgKCFiZURhcmsgJiYgd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogbGlnaHQpJykubWF0Y2hlcylcbiAgICApIHtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbW9kYXJrYnVsJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbW9kYXJrYnVsJywgbmV3VGhlbWUpO1xuICAgIH1cblxuICAgIHNldFRoZW1lKG5ld1RoZW1lKTtcblxuICAgIChkb2N1bWVudC5hY3RpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5ibHVyKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT17JC5mb290ZXJDb250YWluZXJ9PlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXskLmNvcHlyaWdodFNlY3Rpb259PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9eyQuY29weXJpZ2h0VGV4dH0+XG4gICAgICAgICAge2DCqSAyMDIwICR7dCgn7KeA7JikJyl9LmB9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIHtcbiAgICAgICAgdXNlQnJpZ2h0bmVzc01vZGVDb250cm9sICYmIChcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9eyQuYnJpZ2h0bmVzc1NlY3Rpb259PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9eyQuY29udHJvbEJ1dHRvbn0gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RvZ2dsZUJyaWdodG5lc3NNb2RlfT5cbiAgICAgICAgICAgICAgPHNwYW4+e3QoZ2V0VGhlbWUoKSA9PT0gJ2RhcmsnID8gJ+uwneqyjCDrs7TquLAnIDogJ+yWtOuRoeqyjCDrs7TquLAnKX08L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgdXNlTG9jYWxlQ29udHJvbCAmJiAoXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXskLmxvY2FsZVNlY3Rpb259PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9eyQuY29udHJvbEJ1dHRvbn0gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RvZ2dsZUxvY2FsZX0+XG4gICAgICAgICAgICAgIDxzcGFuPnt0KGdldExvY2FsZSgpID09PSAnZW4nID8gJ+2VnOq1reyWtCcgOiAnRW5nbGlzaCcpfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgKVxuICAgICAgfVxuICAgIDwvZm9vdGVyPlxuICApO1xufTtcblxuRm9vdGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgdXNlQnJpZ2h0bmVzc01vZGVDb250cm9sOiBmYWxzZSxcbiAgdXNlTG9jYWxlQ29udHJvbDogdHJ1ZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=