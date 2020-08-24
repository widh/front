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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZ2xvYmFsL2kxOG4udHN4Il0sIm5hbWVzIjpbImZvcm1hdCIsIm1lc3NhZ2UiLCJkaWN0IiwiZGVwdGgiLCJyZXBsYWNlcyIsIm1hdGNoIiwicmVwbGFjZWRDb3VudGVyIiwicmVwbGFjZWRNZXNzYWdlIiwiU3RyaW5nIiwiaSIsImxlbmd0aCIsInJlcGxhY2UiLCJyZXFBcmdMYWJlbCIsInN1YnN0cmluZyIsInJlcUFyZ05vIiwiTnVtYmVyIiwicmVxQXJnIiwiaXNOYU4iLCJpbml0aWFsTG9jYWxlQ29udGV4dCIsImxvY2FsZSIsIkxvY2FsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiaTE4blJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJMb2NhbGVEaXNwYXRjaENvbnRleHQiLCJ1bmRlZmluZWQiLCJJMThuRW5hYmxlZCIsImNoaWxkcmVuIiwidXNlUmVkdWNlciIsImRpc3BhdGNoIiwidXNlSTE4biIsInVzZUNvbnRleHQiLCJ0IiwiaXRlbSIsImFkYXB0aXZlRGljdCIsInRyYW5zbGF0ZWQiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJjb25zb2xlIiwid2FybiIsInNldExvY2FsZSIsImdldExvY2FsZSIsInRvZ2dsZUxvY2FsZSIsIndpdGhCbHVycmluZyIsIm5ld0xvY2FsZSIsImJlS29yZWFuIiwiaXNCcm93c2VyS28iLCJuYXZpZ2F0b3IiLCJsYW5ndWFnZSIsImluZGV4T2YiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsImJsdXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBSUE7Ozs7OztBQVlBO0FBQ0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsT0FBRCxFQUFrQkMsSUFBbEIsRUFBMEQ7QUFBQSxNQUF0QkMsS0FBc0IsdUVBQWQsQ0FBYztBQUN2RSxNQUFNQyxRQUFRLEdBQUdILE9BQU8sQ0FBQ0ksS0FBUixDQUFjLDJCQUFkLENBQWpCO0FBQ0EsTUFBSUMsZUFBZSxHQUFHLENBQXRCO0FBQ0EsTUFBSUMsZUFBZSxHQUFHQyxNQUFNLENBQUNQLE9BQUQsQ0FBNUI7O0FBRUEsTUFBSUcsUUFBSixFQUFjO0FBQ1osU0FBSyxJQUFJSyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTCxRQUFRLENBQUNNLE1BQTdCLEVBQXFDRCxDQUFDLElBQUksQ0FBMUMsRUFBNkM7QUFDM0MsVUFBSUwsUUFBUSxDQUFDSyxDQUFELENBQVIsS0FBZ0IsTUFBcEIsRUFBNEI7QUFDMUJGLHVCQUFlLEdBQUdBLGVBQWUsQ0FBQ0ksT0FBaEIsQ0FDaEJQLFFBQVEsQ0FBQ0ssQ0FBRCxDQURRLEVBRWhCUCxJQUFJLENBQUNJLGVBQUQsQ0FGWSxDQUFsQjtBQUlBQSx1QkFBZSxJQUFJLENBQW5CO0FBQ0QsT0FORCxNQU1PO0FBQ0wsWUFBTU0sV0FBVyxHQUFHUixRQUFRLENBQUNLLENBQUQsQ0FBUixDQUFZSSxTQUFaLENBQXNCLENBQXRCLEVBQXlCVCxRQUFRLENBQUNLLENBQUQsQ0FBUixDQUFZQyxNQUFaLEdBQXFCLENBQTlDLENBQXBCO0FBQ0EsWUFBTUksUUFBUSxHQUFHQyxNQUFNLENBQUNILFdBQUQsQ0FBdkI7QUFDQSxZQUFNSSxNQUFNLEdBQUdELE1BQU0sQ0FBQ0UsS0FBUCxDQUFhSCxRQUFiLElBQXlCRixXQUF6QixHQUF1Q0UsUUFBdEQ7O0FBRUEsWUFBSSxPQUFPWixJQUFJLENBQUNjLE1BQUQsQ0FBWCxLQUF3QixXQUE1QixFQUF5QztBQUN2Q1QseUJBQWUsR0FBR0EsZUFBZSxDQUFDSSxPQUFoQixDQUNoQlAsUUFBUSxDQUFDSyxDQUFELENBRFEsRUFFaEJQLElBQUksQ0FBQ2MsTUFBRCxDQUZZLENBQWxCO0FBSUQ7QUFDRjtBQUNGOztBQUNELFFBQUliLEtBQUssR0FBRyxFQUFaLEVBQWdCO0FBQ2QsYUFBT0ksZUFBUDtBQUNELEtBRkQsTUFFTztBQUNMLGFBQU9QLE1BQU0sQ0FBQ08sZUFBRCxFQUFrQkwsSUFBbEIsRUFBd0JDLEtBQUssR0FBRyxDQUFoQyxDQUFiO0FBQ0Q7QUFDRixHQTFCRCxNQTBCTztBQUNMLFdBQU9JLGVBQVA7QUFDRDtBQUNGLENBbENEO0FBb0NBOzs7Ozs7O0FBU0M7QUFFRCxJQUFNVyxvQkFBZ0MsR0FBRztBQUFFQyxRQUFNLEVBQUU7QUFBVixDQUF6QztBQUNBLElBQU1DLGFBQWEsR0FBR0MsMkRBQWEsQ0FBYUgsb0JBQWIsQ0FBbkM7O0FBR0EsSUFBTUksV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFvQkMsTUFBcEIsRUFBdUQ7QUFDekUsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBSyxZQUFMO0FBQ0UsYUFBTztBQUNMTixjQUFNLEVBQUVLLE1BQU0sQ0FBQ0w7QUFEVixPQUFQOztBQUdGO0FBQ0UsYUFBT0ksS0FBUDtBQU5KO0FBUUQsQ0FURDs7QUFZQSxJQUFNRyxxQkFBcUIsR0FBR0wsMkRBQWEsQ0FBMkJNLFNBQTNCLENBQTNDO0FBR08sSUFBTUMsV0FBNkIsR0FBRyxTQUFoQ0EsV0FBZ0MsT0FBeUI7QUFBQTs7QUFBQSxNQUF0QkMsUUFBc0IsUUFBdEJBLFFBQXNCOztBQUFBLG9CQUMxQ0Msd0RBQVUsQ0FBQ1IsV0FBRCxFQUFjSixvQkFBZCxDQURnQztBQUFBLE1BQzdESyxLQUQ2RDtBQUFBLE1BQ3REUSxRQURzRDs7QUFFcEUsU0FDRSxNQUFDLHFCQUFELENBQXVCLFFBQXZCO0FBQWdDLFNBQUssRUFBRUEsUUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsYUFBRCxDQUFlLFFBQWY7QUFBd0IsU0FBSyxFQUFFUixLQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dNLFFBREgsQ0FERixDQURGO0FBT0QsQ0FUTTs7R0FBTUQsVzs7S0FBQUEsVztBQVdOLElBQU1JLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUM5QixJQUFELEVBQWtCO0FBQUE7O0FBQ3ZDLE1BQU1xQixLQUFLLEdBQUdVLHdEQUFVLENBQUNiLGFBQUQsQ0FBeEI7QUFDQSxNQUFNVyxRQUFRLEdBQUdFLHdEQUFVLENBQUNQLHFCQUFELENBQTNCLENBRnVDLENBSXZDOztBQUNBLE1BQU1RLENBQUMsR0FBRyxTQUFKQSxDQUFJLENBQUNDLElBQUQsRUFBZUMsWUFBZixFQUFxRDtBQUM3RCxRQUFJQyxVQUFVLEdBQUdGLElBQWpCOztBQUNBLFFBQUlqQyxJQUFJLEtBQUssSUFBVCxJQUFpQm9DLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDdkMsSUFBckMsRUFBMkNxQixLQUFLLENBQUNKLE1BQWpELENBQXJCLEVBQStFO0FBQzdFLFVBQUltQixNQUFNLENBQUNDLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ3ZDLElBQUksQ0FBQ3FCLEtBQUssQ0FBQ0osTUFBUCxDQUF6QyxFQUF5RGdCLElBQXpELENBQUosRUFBb0U7QUFDbEVFLGtCQUFVLEdBQUduQyxJQUFJLENBQUNxQixLQUFLLENBQUNKLE1BQVAsQ0FBSixDQUFtQmdCLElBQW5CLENBQWI7O0FBQ0EsWUFBSUMsWUFBSixFQUFrQjtBQUNoQkMsb0JBQVUsR0FBR3JDLE1BQU0sQ0FBQ3FDLFVBQUQsRUFBYUQsWUFBYixDQUFuQjtBQUNEO0FBQ0YsT0FMRCxNQUtPO0FBQ0w7QUFDQU0sZUFBTyxDQUFDQyxJQUFSLDRDQUFnRFIsSUFBaEQ7QUFDRDtBQUNGLEtBVkQsTUFVTyxJQUFJQyxZQUFKLEVBQWtCO0FBQ3ZCQyxnQkFBVSxHQUFHckMsTUFBTSxDQUFDcUMsVUFBRCxFQUFhRCxZQUFiLENBQW5CO0FBQ0Q7O0FBQ0QsV0FBT0MsVUFBUDtBQUNELEdBaEJELENBTHVDLENBdUJ2Qzs7O0FBQ0EsTUFBTU8sU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ3pCLE1BQUQsRUFBOEI7QUFDOUNZLFlBQVEsQ0FBQztBQUNQTixVQUFJLEVBQUUsWUFEQztBQUVQTixZQUFNLEVBQU5BO0FBRk8sS0FBRCxDQUFSO0FBSUQsR0FMRCxDQXhCdUMsQ0ErQnZDOzs7QUFDQSxNQUFNMEIsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxXQUFrQnRCLEtBQUssQ0FBQ0osTUFBeEI7QUFBQSxHQUFsQixDQWhDdUMsQ0FrQ3ZDOzs7QUFDQSxNQUFNMkIsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBK0I7QUFBQSxRQUE5QkMsWUFBOEIsdUVBQWYsSUFBZTtBQUNsRCxRQUFNQyxTQUFTLEdBQUdILFNBQVMsT0FBTyxJQUFoQixHQUF1QixJQUF2QixHQUE4QixJQUFoRDtBQUNBLFFBQU1JLFFBQVEsR0FBR0QsU0FBUyxLQUFLLElBQS9CO0FBQ0EsUUFBTUUsV0FBVyxHQUFHQyxTQUFTLENBQUNDLFFBQVYsQ0FBbUJDLE9BQW5CLENBQTJCLElBQTNCLElBQW1DLENBQUMsQ0FBeEQ7O0FBRUEsUUFBSUgsV0FBVyxLQUFLRCxRQUFwQixFQUE4QjtBQUM1QkssWUFBTSxDQUFDQyxZQUFQLENBQW9CQyxVQUFwQixDQUErQixjQUEvQjtBQUNELEtBRkQsTUFFTztBQUNMRixZQUFNLENBQUNDLFlBQVAsQ0FBb0JFLE9BQXBCLENBQTRCLGNBQTVCLEVBQTRDVCxTQUE1QztBQUNEOztBQUVESixhQUFTLENBQUNJLFNBQUQsQ0FBVDs7QUFFQSxRQUFJRCxZQUFKLEVBQWtCO0FBQ2ZXLGNBQVEsQ0FBQ0MsYUFBVixDQUF3Q0MsSUFBeEM7QUFDRDtBQUNGLEdBaEJEOztBQWtCQSxTQUFPO0FBQ0wxQixLQUFDLEVBQURBLENBREs7QUFDRlUsYUFBUyxFQUFUQSxTQURFO0FBQ1NDLGFBQVMsRUFBVEEsU0FEVDtBQUNvQkMsZ0JBQVksRUFBWkE7QUFEcEIsR0FBUDtBQUdELENBeERNOztJQUFNZCxPOztBQTBERUEsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2E5NmMwOWNjYTg4ZjI2ZGE1YTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xuICBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyLCB1c2VDb250ZXh0LCBEaXNwYXRjaCxcbn0gZnJvbSAncmVhY3QnO1xuXG4vKipcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIFN0cmluZyBGb3JtYXR0ZXIgKFV0aWxpdHkpICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqL1xuXG50eXBlIEZvcm1hdERpY3RPYmplY3QgPSB7XG4gIFtrZXk6IHN0cmluZ106IHN0cmluZztcbn1cbnR5cGUgRm9ybWF0RGljdEFycmF5ID0gc3RyaW5nW107XG50eXBlIEZvcm1hdERpY3QgPSBGb3JtYXREaWN0T2JqZWN0IHwgRm9ybWF0RGljdEFycmF5O1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1lbHNlLXJldHVybiAqL1xuY29uc3QgZm9ybWF0ID0gKG1lc3NhZ2U6IHN0cmluZywgZGljdDogRm9ybWF0RGljdCwgZGVwdGggPSAwKTogc3RyaW5nID0+IHtcbiAgY29uc3QgcmVwbGFjZXMgPSBtZXNzYWdlLm1hdGNoKC9cXFtcXFtbMC05YS16QS1aXzouXSpcXF1cXF0vZ20pO1xuICBsZXQgcmVwbGFjZWRDb3VudGVyID0gMDtcbiAgbGV0IHJlcGxhY2VkTWVzc2FnZSA9IFN0cmluZyhtZXNzYWdlKTtcblxuICBpZiAocmVwbGFjZXMpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlcGxhY2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAocmVwbGFjZXNbaV0gPT09ICdbW11dJykge1xuICAgICAgICByZXBsYWNlZE1lc3NhZ2UgPSByZXBsYWNlZE1lc3NhZ2UucmVwbGFjZShcbiAgICAgICAgICByZXBsYWNlc1tpXSxcbiAgICAgICAgICBkaWN0W3JlcGxhY2VkQ291bnRlcl0sXG4gICAgICAgICk7XG4gICAgICAgIHJlcGxhY2VkQ291bnRlciArPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcmVxQXJnTGFiZWwgPSByZXBsYWNlc1tpXS5zdWJzdHJpbmcoMiwgcmVwbGFjZXNbaV0ubGVuZ3RoIC0gMik7XG4gICAgICAgIGNvbnN0IHJlcUFyZ05vID0gTnVtYmVyKHJlcUFyZ0xhYmVsKTtcbiAgICAgICAgY29uc3QgcmVxQXJnID0gTnVtYmVyLmlzTmFOKHJlcUFyZ05vKSA/IHJlcUFyZ0xhYmVsIDogcmVxQXJnTm87XG5cbiAgICAgICAgaWYgKHR5cGVvZiBkaWN0W3JlcUFyZ10gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgcmVwbGFjZWRNZXNzYWdlID0gcmVwbGFjZWRNZXNzYWdlLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlc1tpXSxcbiAgICAgICAgICAgIGRpY3RbcmVxQXJnXSxcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChkZXB0aCA+IDEwKSB7XG4gICAgICByZXR1cm4gcmVwbGFjZWRNZXNzYWdlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZm9ybWF0KHJlcGxhY2VkTWVzc2FnZSwgZGljdCwgZGVwdGggKyAxKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJlcGxhY2VkTWVzc2FnZTtcbiAgfVxufTtcblxuLyoqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBJMThuIFJlYWN0IEhvb2sgRGVmaW5pdGlvbiAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKi9cblxuZXhwb3J0IHR5cGUgSTE4bkxvY2FsZSA9ICdrbycgfCAnZW4nO1xuaW50ZXJmYWNlIEkxOG5TdHJ1Y3Qge1xuICBsb2NhbGU6IEkxOG5Mb2NhbGVcbn07XG5cbmNvbnN0IGluaXRpYWxMb2NhbGVDb250ZXh0OiBJMThuU3RydWN0ID0geyBsb2NhbGU6ICdrbycgfTtcbmNvbnN0IExvY2FsZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0PEkxOG5TdHJ1Y3Q+KGluaXRpYWxMb2NhbGVDb250ZXh0KTtcblxudHlwZSBJMThuQWN0aW9uID0geyB0eXBlOiAnU0VUX0xPQ0FMRSc7IGxvY2FsZTogSTE4bkxvY2FsZTsgfTtcbmNvbnN0IGkxOG5SZWR1Y2VyID0gKHN0YXRlOiBJMThuU3RydWN0LCBhY3Rpb246IEkxOG5BY3Rpb24pOiBJMThuU3RydWN0ID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1NFVF9MT0NBTEUnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbG9jYWxlOiBhY3Rpb24ubG9jYWxlLFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG50eXBlIEkxOG5EaXNwYXRjaCA9IERpc3BhdGNoPEkxOG5BY3Rpb24+O1xuY29uc3QgTG9jYWxlRGlzcGF0Y2hDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxJMThuRGlzcGF0Y2ggfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG5cbmludGVyZmFjZSBQcm9wcyB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdEVsZW1lbnQgfCBSZWFjdC5SZWFjdEVsZW1lbnRbXSB9XG5leHBvcnQgY29uc3QgSTE4bkVuYWJsZWQ6IFJlYWN0LlNGQzxQcm9wcz4gPSAoeyBjaGlsZHJlbiB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoaTE4blJlZHVjZXIsIGluaXRpYWxMb2NhbGVDb250ZXh0KTtcbiAgcmV0dXJuIChcbiAgICA8TG9jYWxlRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtkaXNwYXRjaH0+XG4gICAgICA8TG9jYWxlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0xvY2FsZUNvbnRleHQuUHJvdmlkZXI+XG4gICAgPC9Mb2NhbGVEaXNwYXRjaENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlSTE4biA9IChkaWN0OiBvYmplY3QpID0+IHtcbiAgY29uc3Qgc3RhdGUgPSB1c2VDb250ZXh0KExvY2FsZUNvbnRleHQpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZUNvbnRleHQoTG9jYWxlRGlzcGF0Y2hDb250ZXh0KTtcblxuICAvLyBUcmFuc2xhdG9yXG4gIGNvbnN0IHQgPSAoaXRlbTogc3RyaW5nLCBhZGFwdGl2ZURpY3Q/OiBGb3JtYXREaWN0KTogc3RyaW5nID0+IHtcbiAgICBsZXQgdHJhbnNsYXRlZCA9IGl0ZW07XG4gICAgaWYgKGRpY3QgIT09IG51bGwgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGRpY3QsIHN0YXRlLmxvY2FsZSkpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZGljdFtzdGF0ZS5sb2NhbGVdLCBpdGVtKSkge1xuICAgICAgICB0cmFuc2xhdGVkID0gZGljdFtzdGF0ZS5sb2NhbGVdW2l0ZW1dO1xuICAgICAgICBpZiAoYWRhcHRpdmVEaWN0KSB7XG4gICAgICAgICAgdHJhbnNsYXRlZCA9IGZvcm1hdCh0cmFuc2xhdGVkLCBhZGFwdGl2ZURpY3QpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gICAgICAgIGNvbnNvbGUud2FybihgTm8gYXBwcm9wcmlhdGUgdHJhbnNsYXRpb24gZm9yIFwiJHtpdGVtfVwiIWApO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYWRhcHRpdmVEaWN0KSB7XG4gICAgICB0cmFuc2xhdGVkID0gZm9ybWF0KHRyYW5zbGF0ZWQsIGFkYXB0aXZlRGljdCk7XG4gICAgfVxuICAgIHJldHVybiB0cmFuc2xhdGVkO1xuICB9O1xuXG4gIC8vIExvY2FsZSBTZXR0ZXJcbiAgY29uc3Qgc2V0TG9jYWxlID0gKGxvY2FsZTogSTE4bkxvY2FsZSk6IHZvaWQgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdTRVRfTE9DQUxFJyxcbiAgICAgIGxvY2FsZSxcbiAgICB9KTtcbiAgfTtcblxuICAvLyBMb2NhbGUgR2V0dGVyXG4gIGNvbnN0IGdldExvY2FsZSA9ICgpOiBJMThuTG9jYWxlID0+IHN0YXRlLmxvY2FsZTtcblxuICAvLyBMb2NhbGUgVG9nZ2xlclxuICBjb25zdCB0b2dnbGVMb2NhbGUgPSAod2l0aEJsdXJyaW5nID0gdHJ1ZSk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IG5ld0xvY2FsZSA9IGdldExvY2FsZSgpID09PSAnZW4nID8gJ2tvJyA6ICdlbic7XG4gICAgY29uc3QgYmVLb3JlYW4gPSBuZXdMb2NhbGUgPT09ICdrbyc7XG4gICAgY29uc3QgaXNCcm93c2VyS28gPSBuYXZpZ2F0b3IubGFuZ3VhZ2UuaW5kZXhPZigna28nKSA+IC0xO1xuXG4gICAgaWYgKGlzQnJvd3NlcktvID09PSBiZUtvcmVhbikge1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdzc3VhbGFzc3VhbGEnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzc3VhbGFzc3VhbGEnLCBuZXdMb2NhbGUpO1xuICAgIH1cblxuICAgIHNldExvY2FsZShuZXdMb2NhbGUpO1xuXG4gICAgaWYgKHdpdGhCbHVycmluZykge1xuICAgICAgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmJsdXIoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICB0LCBzZXRMb2NhbGUsIGdldExvY2FsZSwgdG9nZ2xlTG9jYWxlLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlSTE4bjtcbiJdLCJzb3VyY2VSb290IjoiIn0=