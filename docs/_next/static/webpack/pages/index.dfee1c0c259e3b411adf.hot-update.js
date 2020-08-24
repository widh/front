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

    setTheme(newTheme);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZ2xvYmFsL2kxOG4udHN4Il0sIm5hbWVzIjpbImZvcm1hdCIsIm1lc3NhZ2UiLCJkaWN0IiwiZGVwdGgiLCJyZXBsYWNlcyIsIm1hdGNoIiwicmVwbGFjZWRDb3VudGVyIiwicmVwbGFjZWRNZXNzYWdlIiwiU3RyaW5nIiwiaSIsImxlbmd0aCIsInJlcGxhY2UiLCJyZXFBcmdMYWJlbCIsInN1YnN0cmluZyIsInJlcUFyZ05vIiwiTnVtYmVyIiwicmVxQXJnIiwiaXNOYU4iLCJpbml0aWFsTG9jYWxlQ29udGV4dCIsImxvY2FsZSIsIkxvY2FsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiaTE4blJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJMb2NhbGVEaXNwYXRjaENvbnRleHQiLCJ1bmRlZmluZWQiLCJJMThuRW5hYmxlZCIsImNoaWxkcmVuIiwidXNlUmVkdWNlciIsImRpc3BhdGNoIiwidXNlSTE4biIsInVzZUNvbnRleHQiLCJ0IiwiaXRlbSIsImFkYXB0aXZlRGljdCIsInRyYW5zbGF0ZWQiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJjb25zb2xlIiwid2FybiIsInNldExvY2FsZSIsImdldExvY2FsZSIsInRvZ2dsZUxvY2FsZSIsIndpdGhCbHVycmluZyIsIm5ld0xvY2FsZSIsImJlS29yZWFuIiwiaXNCcm93c2VyS28iLCJuYXZpZ2F0b3IiLCJsYW5ndWFnZSIsImluZGV4T2YiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsInNldFRoZW1lIiwibmV3VGhlbWUiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJibHVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUlBOzs7Ozs7QUFZQTtBQUNBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLE9BQUQsRUFBa0JDLElBQWxC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NDExYWRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtcbiAgY3JlYXRlQ29udGV4dCwgdXNlUmVkdWNlciwgdXNlQ29udGV4dCwgRGlzcGF0Y2gsXG59IGZyb20gJ3JlYWN0JztcblxuLyoqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBTdHJpbmcgRm9ybWF0dGVyIChVdGlsaXR5KSAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKi9cblxudHlwZSBGb3JtYXREaWN0T2JqZWN0ID0ge1xuICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XG59XG50eXBlIEZvcm1hdERpY3RBcnJheSA9IHN0cmluZ1tdO1xudHlwZSBGb3JtYXREaWN0ID0gRm9ybWF0RGljdE9iamVjdCB8IEZvcm1hdERpY3RBcnJheTtcblxuLyogZXNsaW50LWRpc2FibGUgbm8tZWxzZS1yZXR1cm4gKi9cbmNvbnN0IGZvcm1hdCA9IChtZXNzYWdlOiBzdHJpbmcsIGRpY3Q6IEZvcm1hdERpY3QsIGRlcHRoID0gMCk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHJlcGxhY2VzID0gbWVzc2FnZS5tYXRjaCgvXFxbXFxbWzAtOWEtekEtWl86Ll0qXFxdXFxdL2dtKTtcbiAgbGV0IHJlcGxhY2VkQ291bnRlciA9IDA7XG4gIGxldCByZXBsYWNlZE1lc3NhZ2UgPSBTdHJpbmcobWVzc2FnZSk7XG5cbiAgaWYgKHJlcGxhY2VzKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXBsYWNlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHJlcGxhY2VzW2ldID09PSAnW1tdXScpIHtcbiAgICAgICAgcmVwbGFjZWRNZXNzYWdlID0gcmVwbGFjZWRNZXNzYWdlLnJlcGxhY2UoXG4gICAgICAgICAgcmVwbGFjZXNbaV0sXG4gICAgICAgICAgZGljdFtyZXBsYWNlZENvdW50ZXJdLFxuICAgICAgICApO1xuICAgICAgICByZXBsYWNlZENvdW50ZXIgKz0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHJlcUFyZ0xhYmVsID0gcmVwbGFjZXNbaV0uc3Vic3RyaW5nKDIsIHJlcGxhY2VzW2ldLmxlbmd0aCAtIDIpO1xuICAgICAgICBjb25zdCByZXFBcmdObyA9IE51bWJlcihyZXFBcmdMYWJlbCk7XG4gICAgICAgIGNvbnN0IHJlcUFyZyA9IE51bWJlci5pc05hTihyZXFBcmdObykgPyByZXFBcmdMYWJlbCA6IHJlcUFyZ05vO1xuXG4gICAgICAgIGlmICh0eXBlb2YgZGljdFtyZXFBcmddICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHJlcGxhY2VkTWVzc2FnZSA9IHJlcGxhY2VkTWVzc2FnZS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZXNbaV0sXG4gICAgICAgICAgICBkaWN0W3JlcUFyZ10sXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZGVwdGggPiAxMCkge1xuICAgICAgcmV0dXJuIHJlcGxhY2VkTWVzc2FnZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZvcm1hdChyZXBsYWNlZE1lc3NhZ2UsIGRpY3QsIGRlcHRoICsgMSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiByZXBsYWNlZE1lc3NhZ2U7XG4gIH1cbn07XG5cbi8qKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogSTE4biBSZWFjdCBIb29rIERlZmluaXRpb24gKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICovXG5cbmV4cG9ydCB0eXBlIEkxOG5Mb2NhbGUgPSAna28nIHwgJ2VuJztcbmludGVyZmFjZSBJMThuU3RydWN0IHtcbiAgbG9jYWxlOiBJMThuTG9jYWxlXG59O1xuXG5jb25zdCBpbml0aWFsTG9jYWxlQ29udGV4dDogSTE4blN0cnVjdCA9IHsgbG9jYWxlOiAna28nIH07XG5jb25zdCBMb2NhbGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxJMThuU3RydWN0Pihpbml0aWFsTG9jYWxlQ29udGV4dCk7XG5cbnR5cGUgSTE4bkFjdGlvbiA9IHsgdHlwZTogJ1NFVF9MT0NBTEUnOyBsb2NhbGU6IEkxOG5Mb2NhbGU7IH07XG5jb25zdCBpMThuUmVkdWNlciA9IChzdGF0ZTogSTE4blN0cnVjdCwgYWN0aW9uOiBJMThuQWN0aW9uKTogSTE4blN0cnVjdCA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdTRVRfTE9DQUxFJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxvY2FsZTogYWN0aW9uLmxvY2FsZSxcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxudHlwZSBJMThuRGlzcGF0Y2ggPSBEaXNwYXRjaDxJMThuQWN0aW9uPjtcbmNvbnN0IExvY2FsZURpc3BhdGNoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8STE4bkRpc3BhdGNoIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuXG5pbnRlcmZhY2UgUHJvcHMgeyBjaGlsZHJlbjogUmVhY3QuUmVhY3RFbGVtZW50IHwgUmVhY3QuUmVhY3RFbGVtZW50W10gfVxuZXhwb3J0IGNvbnN0IEkxOG5FbmFibGVkOiBSZWFjdC5TRkM8UHJvcHM+ID0gKHsgY2hpbGRyZW4gfTogUHJvcHMpID0+IHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKGkxOG5SZWR1Y2VyLCBpbml0aWFsTG9jYWxlQ29udGV4dCk7XG4gIHJldHVybiAoXG4gICAgPExvY2FsZURpc3BhdGNoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17ZGlzcGF0Y2h9PlxuICAgICAgPExvY2FsZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Mb2NhbGVDb250ZXh0LlByb3ZpZGVyPlxuICAgIDwvTG9jYWxlRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUkxOG4gPSAoZGljdDogb2JqZWN0KSA9PiB7XG4gIGNvbnN0IHN0YXRlID0gdXNlQ29udGV4dChMb2NhbGVDb250ZXh0KTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VDb250ZXh0KExvY2FsZURpc3BhdGNoQ29udGV4dCk7XG5cbiAgLy8gVHJhbnNsYXRvclxuICBjb25zdCB0ID0gKGl0ZW06IHN0cmluZywgYWRhcHRpdmVEaWN0PzogRm9ybWF0RGljdCk6IHN0cmluZyA9PiB7XG4gICAgbGV0IHRyYW5zbGF0ZWQgPSBpdGVtO1xuICAgIGlmIChkaWN0ICE9PSBudWxsICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChkaWN0LCBzdGF0ZS5sb2NhbGUpKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGRpY3Rbc3RhdGUubG9jYWxlXSwgaXRlbSkpIHtcbiAgICAgICAgdHJhbnNsYXRlZCA9IGRpY3Rbc3RhdGUubG9jYWxlXVtpdGVtXTtcbiAgICAgICAgaWYgKGFkYXB0aXZlRGljdCkge1xuICAgICAgICAgIHRyYW5zbGF0ZWQgPSBmb3JtYXQodHJhbnNsYXRlZCwgYWRhcHRpdmVEaWN0KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICAgICAgICBjb25zb2xlLndhcm4oYE5vIGFwcHJvcHJpYXRlIHRyYW5zbGF0aW9uIGZvciBcIiR7aXRlbX1cIiFgKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFkYXB0aXZlRGljdCkge1xuICAgICAgdHJhbnNsYXRlZCA9IGZvcm1hdCh0cmFuc2xhdGVkLCBhZGFwdGl2ZURpY3QpO1xuICAgIH1cbiAgICByZXR1cm4gdHJhbnNsYXRlZDtcbiAgfTtcblxuICAvLyBMb2NhbGUgU2V0dGVyXG4gIGNvbnN0IHNldExvY2FsZSA9IChsb2NhbGU6IEkxOG5Mb2NhbGUpOiB2b2lkID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnU0VUX0xPQ0FMRScsXG4gICAgICBsb2NhbGUsXG4gICAgfSk7XG4gIH07XG5cbiAgLy8gTG9jYWxlIEdldHRlclxuICBjb25zdCBnZXRMb2NhbGUgPSAoKTogSTE4bkxvY2FsZSA9PiBzdGF0ZS5sb2NhbGU7XG5cbiAgLy8gTG9jYWxlIFRvZ2dsZXJcbiAgY29uc3QgdG9nZ2xlTG9jYWxlID0gKHdpdGhCbHVycmluZyA9IHRydWUpOiB2b2lkID0+IHtcbiAgICBjb25zdCBuZXdMb2NhbGUgPSBnZXRMb2NhbGUoKSA9PT0gJ2VuJyA/ICdrbycgOiAnZW4nO1xuICAgIGNvbnN0IGJlS29yZWFuID0gbmV3TG9jYWxlID09PSAna28nO1xuICAgIGNvbnN0IGlzQnJvd3NlcktvID0gbmF2aWdhdG9yLmxhbmd1YWdlLmluZGV4T2YoJ2tvJykgPiAtMTtcblxuICAgIGlmIChpc0Jyb3dzZXJLbyA9PT0gYmVLb3JlYW4pIHtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnc3N1YWxhc3N1YWxhJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3N1YWxhc3N1YWxhJywgbmV3TG9jYWxlKTtcbiAgICB9XG5cbiAgICBzZXRUaGVtZShuZXdUaGVtZSk7XG5cbiAgICBpZiAod2l0aEJsdXJyaW5nKSB7XG4gICAgICAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuYmx1cigpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHQsIHNldExvY2FsZSwgZ2V0TG9jYWxlLCB0b2dnbGVMb2NhbGUsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VJMThuO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==