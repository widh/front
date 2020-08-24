webpackHotUpdate_N_E("pages/index",{

/***/ "./global/i18n.tsx":
/*!*************************!*\
  !*** ./global/i18n.tsx ***!
  \*************************/
/*! exports provided: I18nEnabled, useI18n, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18nEnabled", function() { return I18nEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useI18n", function() { return useI18n; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\jio\\Desktop\\homepage\\src\\global\\i18n.tsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/**
 ******************************
 * String Formatter (Utility) *
 ******************************
 */

/* eslint-disable no-else-return */
var format = function format(message, dict) {
  var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var replaces = message.match(/\[\[[0-9a-zA-Z_:.]*\]\]/gm);
  var replacedCounter = 0;
  var replacedMessage = String(message);

  if (replaces) {
    for (var i = 0; i < replaces.length; i += 1) {
      if (replaces[i] === '[[]]') {
        replacedMessage = replacedMessage.replace(replaces[i], dict[replacedCounter]);
        replacedCounter += 1;
      } else {
        var reqArgLabel = replaces[i].substring(2, replaces[i].length - 2);
        var reqArgNo = Number(reqArgLabel);
        var reqArg = Number.isNaN(reqArgNo) ? reqArgLabel : reqArgNo;

        if (typeof dict[reqArg] !== 'undefined') {
          replacedMessage = replacedMessage.replace(replaces[i], dict[reqArg]);
        }
      }
    }

    if (depth > 10) {
      return replacedMessage;
    } else {
      return format(replacedMessage, dict, depth + 1);
    }
  } else {
    return replacedMessage;
  }
};
/**
 ******************************
 * I18n React Hook Definition *
 ******************************
 */


;
var initialLocaleContext = {
  locale: 'ko'
};
var LocaleContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(initialLocaleContext);

var i18nReducer = function i18nReducer(state, action) {
  switch (action.type) {
    case 'SET_LOCALE':
      return {
        locale: action.locale
      };

    default:
      return state;
  }
};

var LocaleDispatchContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(undefined);
var I18nEnabled = function I18nEnabled(_ref) {
  _s();

  var children = _ref.children;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(i18nReducer, initialLocaleContext),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  return __jsx(LocaleDispatchContext.Provider, {
    value: dispatch,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 5
    }
  }, __jsx(LocaleContext.Provider, {
    value: state,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, children));
};

_s(I18nEnabled, "uzIuKMEmjnI0SobSaoVs2GnAQjA=");

_c = I18nEnabled;
var useI18n = function useI18n(dict) {
  _s2();

  var state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(LocaleContext);
  var dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(LocaleDispatchContext); // Translator

  var t = function t(item, adaptiveDict) {
    var translated = item;

    if (dict !== null && Object.prototype.hasOwnProperty.call(dict, state.locale)) {
      if (Object.prototype.hasOwnProperty.call(dict[state.locale], item)) {
        translated = dict[state.locale][item];

        if (adaptiveDict) {
          translated = format(translated, adaptiveDict);
        }
      } else {
        /* eslint-disable no-console */
        console.warn("No appropriate translation for \"".concat(item, "\"!"));
      }
    } else if (adaptiveDict) {
      translated = format(translated, adaptiveDict);
    }

    return translated;
  }; // Locale Setter


  var setLocale = function setLocale(locale) {
    document.documentElement.lang = locale;
    dispatch({
      type: 'SET_LOCALE',
      locale: locale
    });
  }; // Locale Getter


  var getLocale = function getLocale() {
    return state.locale;
  }; // Locale Toggler


  var toggleLocale = function toggleLocale() {
    var withBlurring = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    var newLocale = getLocale() === 'en' ? 'ko' : 'en';
    var beKorean = newLocale === 'ko';
    var isBrowserKo = navigator.language.indexOf('ko') > -1;

    if (isBrowserKo === beKorean) {
      window.localStorage.removeItem('ssualassuala');
    } else {
      window.localStorage.setItem('ssualassuala', newLocale);
    }

    setLocale(newLocale);

    if (withBlurring) {
      document.activeElement.blur();
    }
  };

  return {
    t: t,
    setLocale: setLocale,
    getLocale: getLocale,
    toggleLocale: toggleLocale
  };
};

_s2(useI18n, "kTsY29gplUle/V4rxdYnJPedYSo=");

/* harmony default export */ __webpack_exports__["default"] = (useI18n);

var _c;

$RefreshReg$(_c, "I18nEnabled");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZ2xvYmFsL2kxOG4udHN4Il0sIm5hbWVzIjpbImZvcm1hdCIsIm1lc3NhZ2UiLCJkaWN0IiwiZGVwdGgiLCJyZXBsYWNlcyIsIm1hdGNoIiwicmVwbGFjZWRDb3VudGVyIiwicmVwbGFjZWRNZXNzYWdlIiwiU3RyaW5nIiwiaSIsImxlbmd0aCIsInJlcGxhY2UiLCJyZXFBcmdMYWJlbCIsInN1YnN0cmluZyIsInJlcUFyZ05vIiwiTnVtYmVyIiwicmVxQXJnIiwiaXNOYU4iLCJpbml0aWFsTG9jYWxlQ29udGV4dCIsImxvY2FsZSIsIkxvY2FsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiaTE4blJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJMb2NhbGVEaXNwYXRjaENvbnRleHQiLCJ1bmRlZmluZWQiLCJJMThuRW5hYmxlZCIsImNoaWxkcmVuIiwidXNlUmVkdWNlciIsImRpc3BhdGNoIiwidXNlSTE4biIsInVzZUNvbnRleHQiLCJ0IiwiaXRlbSIsImFkYXB0aXZlRGljdCIsInRyYW5zbGF0ZWQiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJjb25zb2xlIiwid2FybiIsInNldExvY2FsZSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwibGFuZyIsImdldExvY2FsZSIsInRvZ2dsZUxvY2FsZSIsIndpdGhCbHVycmluZyIsIm5ld0xvY2FsZSIsImJlS29yZWFuIiwiaXNCcm93c2VyS28iLCJuYXZpZ2F0b3IiLCJsYW5ndWFnZSIsImluZGV4T2YiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsImFjdGl2ZUVsZW1lbnQiLCJibHVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUlBOzs7Ozs7QUFZQTtBQUNBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLE9BQUQsRUFBa0JDLElB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RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wODkxMDk0NjIzYjZiNThhZWZlYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XG4gIGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIsIHVzZUNvbnRleHQsIERpc3BhdGNoLFxufSBmcm9tICdyZWFjdCc7XG5cbi8qKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogU3RyaW5nIEZvcm1hdHRlciAoVXRpbGl0eSkgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICovXG5cbnR5cGUgRm9ybWF0RGljdE9iamVjdCA9IHtcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xufVxudHlwZSBGb3JtYXREaWN0QXJyYXkgPSBzdHJpbmdbXTtcbnR5cGUgRm9ybWF0RGljdCA9IEZvcm1hdERpY3RPYmplY3QgfCBGb3JtYXREaWN0QXJyYXk7XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLWVsc2UtcmV0dXJuICovXG5jb25zdCBmb3JtYXQgPSAobWVzc2FnZTogc3RyaW5nLCBkaWN0OiBGb3JtYXREaWN0LCBkZXB0aCA9IDApOiBzdHJpbmcgPT4ge1xuICBjb25zdCByZXBsYWNlcyA9IG1lc3NhZ2UubWF0Y2goL1xcW1xcW1swLTlhLXpBLVpfOi5dKlxcXVxcXS9nbSk7XG4gIGxldCByZXBsYWNlZENvdW50ZXIgPSAwO1xuICBsZXQgcmVwbGFjZWRNZXNzYWdlID0gU3RyaW5nKG1lc3NhZ2UpO1xuXG4gIGlmIChyZXBsYWNlcykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVwbGFjZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChyZXBsYWNlc1tpXSA9PT0gJ1tbXV0nKSB7XG4gICAgICAgIHJlcGxhY2VkTWVzc2FnZSA9IHJlcGxhY2VkTWVzc2FnZS5yZXBsYWNlKFxuICAgICAgICAgIHJlcGxhY2VzW2ldLFxuICAgICAgICAgIGRpY3RbcmVwbGFjZWRDb3VudGVyXSxcbiAgICAgICAgKTtcbiAgICAgICAgcmVwbGFjZWRDb3VudGVyICs9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByZXFBcmdMYWJlbCA9IHJlcGxhY2VzW2ldLnN1YnN0cmluZygyLCByZXBsYWNlc1tpXS5sZW5ndGggLSAyKTtcbiAgICAgICAgY29uc3QgcmVxQXJnTm8gPSBOdW1iZXIocmVxQXJnTGFiZWwpO1xuICAgICAgICBjb25zdCByZXFBcmcgPSBOdW1iZXIuaXNOYU4ocmVxQXJnTm8pID8gcmVxQXJnTGFiZWwgOiByZXFBcmdObztcblxuICAgICAgICBpZiAodHlwZW9mIGRpY3RbcmVxQXJnXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICByZXBsYWNlZE1lc3NhZ2UgPSByZXBsYWNlZE1lc3NhZ2UucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VzW2ldLFxuICAgICAgICAgICAgZGljdFtyZXFBcmddLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGRlcHRoID4gMTApIHtcbiAgICAgIHJldHVybiByZXBsYWNlZE1lc3NhZ2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmb3JtYXQocmVwbGFjZWRNZXNzYWdlLCBkaWN0LCBkZXB0aCArIDEpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmVwbGFjZWRNZXNzYWdlO1xuICB9XG59O1xuXG4vKipcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIEkxOG4gUmVhY3QgSG9vayBEZWZpbml0aW9uICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqL1xuXG5leHBvcnQgdHlwZSBJMThuTG9jYWxlID0gJ2tvJyB8ICdlbic7XG5pbnRlcmZhY2UgSTE4blN0cnVjdCB7XG4gIGxvY2FsZTogSTE4bkxvY2FsZVxufTtcblxuY29uc3QgaW5pdGlhbExvY2FsZUNvbnRleHQ6IEkxOG5TdHJ1Y3QgPSB7IGxvY2FsZTogJ2tvJyB9O1xuY29uc3QgTG9jYWxlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8STE4blN0cnVjdD4oaW5pdGlhbExvY2FsZUNvbnRleHQpO1xuXG50eXBlIEkxOG5BY3Rpb24gPSB7IHR5cGU6ICdTRVRfTE9DQUxFJzsgbG9jYWxlOiBJMThuTG9jYWxlOyB9O1xuY29uc3QgaTE4blJlZHVjZXIgPSAoc3RhdGU6IEkxOG5TdHJ1Y3QsIGFjdGlvbjogSTE4bkFjdGlvbik6IEkxOG5TdHJ1Y3QgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnU0VUX0xPQ0FMRSc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsb2NhbGU6IGFjdGlvbi5sb2NhbGUsXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbnR5cGUgSTE4bkRpc3BhdGNoID0gRGlzcGF0Y2g8STE4bkFjdGlvbj47XG5jb25zdCBMb2NhbGVEaXNwYXRjaENvbnRleHQgPSBjcmVhdGVDb250ZXh0PEkxOG5EaXNwYXRjaCB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcblxuaW50ZXJmYWNlIFByb3BzIHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0RWxlbWVudCB8IFJlYWN0LlJlYWN0RWxlbWVudFtdIH1cbmV4cG9ydCBjb25zdCBJMThuRW5hYmxlZDogUmVhY3QuU0ZDPFByb3BzPiA9ICh7IGNoaWxkcmVuIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihpMThuUmVkdWNlciwgaW5pdGlhbExvY2FsZUNvbnRleHQpO1xuICByZXR1cm4gKFxuICAgIDxMb2NhbGVEaXNwYXRjaENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2Rpc3BhdGNofT5cbiAgICAgIDxMb2NhbGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvTG9jYWxlQ29udGV4dC5Qcm92aWRlcj5cbiAgICA8L0xvY2FsZURpc3BhdGNoQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VJMThuID0gKGRpY3Q6IG9iamVjdCkgPT4ge1xuICBjb25zdCBzdGF0ZSA9IHVzZUNvbnRleHQoTG9jYWxlQ29udGV4dCk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlQ29udGV4dChMb2NhbGVEaXNwYXRjaENvbnRleHQpO1xuXG4gIC8vIFRyYW5zbGF0b3JcbiAgY29uc3QgdCA9IChpdGVtOiBzdHJpbmcsIGFkYXB0aXZlRGljdD86IEZvcm1hdERpY3QpOiBzdHJpbmcgPT4ge1xuICAgIGxldCB0cmFuc2xhdGVkID0gaXRlbTtcbiAgICBpZiAoZGljdCAhPT0gbnVsbCAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZGljdCwgc3RhdGUubG9jYWxlKSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChkaWN0W3N0YXRlLmxvY2FsZV0sIGl0ZW0pKSB7XG4gICAgICAgIHRyYW5zbGF0ZWQgPSBkaWN0W3N0YXRlLmxvY2FsZV1baXRlbV07XG4gICAgICAgIGlmIChhZGFwdGl2ZURpY3QpIHtcbiAgICAgICAgICB0cmFuc2xhdGVkID0gZm9ybWF0KHRyYW5zbGF0ZWQsIGFkYXB0aXZlRGljdCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgICAgY29uc29sZS53YXJuKGBObyBhcHByb3ByaWF0ZSB0cmFuc2xhdGlvbiBmb3IgXCIke2l0ZW19XCIhYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhZGFwdGl2ZURpY3QpIHtcbiAgICAgIHRyYW5zbGF0ZWQgPSBmb3JtYXQodHJhbnNsYXRlZCwgYWRhcHRpdmVEaWN0KTtcbiAgICB9XG4gICAgcmV0dXJuIHRyYW5zbGF0ZWQ7XG4gIH07XG5cbiAgLy8gTG9jYWxlIFNldHRlclxuICBjb25zdCBzZXRMb2NhbGUgPSAobG9jYWxlOiBJMThuTG9jYWxlKTogdm9pZCA9PiB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSBsb2NhbGU7XG5cbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnU0VUX0xPQ0FMRScsXG4gICAgICBsb2NhbGUsXG4gICAgfSk7XG4gIH07XG5cbiAgLy8gTG9jYWxlIEdldHRlclxuICBjb25zdCBnZXRMb2NhbGUgPSAoKTogSTE4bkxvY2FsZSA9PiBzdGF0ZS5sb2NhbGU7XG5cbiAgLy8gTG9jYWxlIFRvZ2dsZXJcbiAgY29uc3QgdG9nZ2xlTG9jYWxlID0gKHdpdGhCbHVycmluZyA9IHRydWUpOiB2b2lkID0+IHtcbiAgICBjb25zdCBuZXdMb2NhbGUgPSBnZXRMb2NhbGUoKSA9PT0gJ2VuJyA/ICdrbycgOiAnZW4nO1xuICAgIGNvbnN0IGJlS29yZWFuID0gbmV3TG9jYWxlID09PSAna28nO1xuICAgIGNvbnN0IGlzQnJvd3NlcktvID0gbmF2aWdhdG9yLmxhbmd1YWdlLmluZGV4T2YoJ2tvJykgPiAtMTtcblxuICAgIGlmIChpc0Jyb3dzZXJLbyA9PT0gYmVLb3JlYW4pIHtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnc3N1YWxhc3N1YWxhJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3N1YWxhc3N1YWxhJywgbmV3TG9jYWxlKTtcbiAgICB9XG5cbiAgICBzZXRMb2NhbGUobmV3TG9jYWxlKTtcblxuICAgIGlmICh3aXRoQmx1cnJpbmcpIHtcbiAgICAgIChkb2N1bWVudC5hY3RpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5ibHVyKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgdCwgc2V0TG9jYWxlLCBnZXRMb2NhbGUsIHRvZ2dsZUxvY2FsZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUkxOG47XG4iXSwic291cmNlUm9vdCI6IiJ9