webpackHotUpdate_N_E("pages/_app",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZ2xvYmFsL2kxOG4udHN4Il0sIm5hbWVzIjpbImZvcm1hdCIsIm1lc3NhZ2UiLCJkaWN0IiwiZGVwdGgiLCJyZXBsYWNlcyIsIm1hdGNoIiwicmVwbGFjZWRDb3VudGVyIiwicmVwbGFjZWRNZXNzYWdlIiwiU3RyaW5nIiwiaSIsImxlbmd0aCIsInJlcGxhY2UiLCJyZXFBcmdMYWJlbCIsInN1YnN0cmluZyIsInJlcUFyZ05vIiwiTnVtYmVyIiwicmVxQXJnIiwiaXNOYU4iLCJpbml0aWFsTG9jYWxlQ29udGV4dCIsImxvY2FsZSIsIkxvY2FsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiaTE4blJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJMb2NhbGVEaXNwYXRjaENvbnRleHQiLCJ1bmRlZmluZWQiLCJJMThuRW5hYmxlZCIsImNoaWxkcmVuIiwidXNlUmVkdWNlciIsImRpc3BhdGNoIiwidXNlSTE4biIsInVzZUNvbnRleHQiLCJ0IiwiaXRlbSIsImFkYXB0aXZlRGljdCIsInRyYW5zbGF0ZWQiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJjb25zb2xlIiwid2FybiIsInNldExvY2FsZSIsImdldExvY2FsZSIsInRvZ2dsZUxvY2FsZSIsIndpdGhCbHVycmluZyIsIm5ld0xvY2FsZSIsImJlS29yZWFuIiwiaXNCcm93c2VyS28iLCJuYXZpZ2F0b3IiLCJsYW5ndWFnZSIsImluZGV4T2YiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsImJsdXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBSUE7Ozs7OztBQVlBO0FBQ0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsT0FBRCxFQUFrQkMsSUFBbEIsRUFBMEQ7QUFBQSxNQUF0QkMsS0FBc0IsdUVBQWQsQ0FBYztBQUN2RSxNQUFNQyxRQUFRLEdBQUdILE9BQU8sQ0FBQ0ksS0FBUixDQUFjLDJCQUFkLENBQWpCO0FBQ0EsTUFBSUMsZUFBZSxHQUFHLENBQXRCO0FBQ0EsTUFBSUMsZUFBZSxHQUFHQyxNQUFNLENBQUNQLE9BQUQsQ0FBNUI7O0FBRUEsTUFBSUcsUUFBSixFQUFjO0FBQ1osU0FBSyxJQUFJSyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTCxRQUFRLENBQUNNLE1BQTdCLEVBQXFDRCxDQUFDLElBQUksQ0FBMUMsRUFBNkM7QUFDM0MsVUFBSUwsUUFBUSxDQUFDSyxDQUFELENBQVIsS0FBZ0IsTUFBcEIsRUFBNEI7QUFDMUJGLHVCQUFlLEdBQUdBLGVBQWUsQ0FBQ0ksT0FBaEIsQ0FDaEJQLFFBQVEsQ0FBQ0ssQ0FBRCxDQURRLEVBRWhCUCxJQUFJLENBQUNJLGVBQUQsQ0FGWSxDQUFsQjtBQUlBQSx1QkFBZSxJQUFJLENBQW5CO0FBQ0QsT0FORCxNQU1PO0FBQ0wsWUFBTU0sV0FBVyxHQUFHUixRQUFRLENBQUNLLENBQUQsQ0FBUixDQUFZSSxTQUFaLENBQXNCLENBQXRCLEVBQXlCVCxRQUFRLENBQUNLLENBQUQsQ0FBUixDQUFZQyxNQUFaLEdBQXFCLENBQTlDLENBQXBCO0FBQ0EsWUFBTUksUUFBUSxHQUFHQyxNQUFNLENBQUNILFdBQUQsQ0FBdkI7QUFDQSxZQUFNSSxNQUFNLEdBQUdELE1BQU0sQ0FBQ0UsS0FBUCxDQUFhSCxRQUFiLElBQXlCRixXQUF6QixHQUF1Q0UsUUFBdEQ7O0FBRUEsWUFBSSxPQUFPWixJQUFJLENBQUNjLE1BQUQsQ0FBWCxLQUF3QixXQUE1QixFQUF5QztBQUN2Q1QseUJBQWUsR0FBR0EsZUFBZSxDQUFDSSxPQUFoQixDQUNoQlAsUUFBUSxDQUFDSyxDQUFELENBRFEsRUFFaEJQLElBQUksQ0FBQ2MsTUFBRCxDQUZZLENBQWxCO0FBSUQ7QUFDRjtBQUNGOztBQUNELFFBQUliLEtBQUssR0FBRyxFQUFaLEVBQWdCO0FBQ2QsYUFBT0ksZUFBUDtBQUNELEtBRkQsTUFFTztBQUNMLGFBQU9QLE1BQU0sQ0FBQ08sZUFBRCxFQUFrQkwsSUFBbEIsRUFBd0JDLEtBQUssR0FBRyxDQUFoQyxDQUFiO0FBQ0Q7QUFDRixHQTFCRCxNQTBCTztBQUNMLFdBQU9JLGVBQVA7QUFDRDtBQUNGLENBbENEO0FBb0NBOzs7Ozs7O0FBU0M7QUFFRCxJQUFNVyxvQkFBZ0MsR0FBRztBQUFFQyxRQUFNLEVBQUU7QUFBVixDQUF6QztBQUNBLElBQU1DLGFBQWEsR0FBR0MsMkRBQWEsQ0FBYUgsb0JBQWIsQ0FBbkM7O0FBR0EsSUFBTUksV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFvQkMsTUFBcEIsRUFBdUQ7QUFDekUsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBSyxZQUFMO0FBQ0UsYUFBTztBQUNMTixjQUFNLEVBQUVLLE1BQU0sQ0FBQ0w7QUFEVixPQUFQOztBQUdGO0FBQ0UsYUFBT0ksS0FBUDtBQU5KO0FBUUQsQ0FURDs7QUFZQSxJQUFNRyxxQkFBcUIsR0FBR0wsMkRBQWEsQ0FBMkJNLFNBQTNCLENBQTNDO0FBR08sSUFBTUMsV0FBNkIsR0FBRyxTQUFoQ0EsV0FBZ0MsT0FBeUI7QUFBQTs7QUFBQSxNQUF0QkMsUUFBc0IsUUFBdEJBLFFBQXNCOztBQUFBLG9CQUMxQ0Msd0RBQVUsQ0FBQ1IsV0FBRCxFQUFjSixvQkFBZCxDQURnQztBQUFBLE1BQzdESyxLQUQ2RDtBQUFBLE1BQ3REUSxRQURzRDs7QUFFcEUsU0FDRSxNQUFDLHFCQUFELENBQXVCLFFBQXZCO0FBQWdDLFNBQUssRUFBRUEsUUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsYUFBRCxDQUFlLFFBQWY7QUFBd0IsU0FBSyxFQUFFUixLQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dNLFFBREgsQ0FERixDQURGO0FBT0QsQ0FUTTs7R0FBTUQsVzs7S0FBQUEsVztBQVdOLElBQU1JLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUM5QixJQUFELEVBQWtCO0FBQUE7O0FBQ3ZDLE1BQU1xQixLQUFLLEdBQUdVLHdEQUFVLENBQUNiLGFBQUQsQ0FBeEI7QUFDQSxNQUFNVyxRQUFRLEdBQUdFLHdEQUFVLENBQUNQLHFCQUFELENBQTNCLENBRnVDLENBSXZDOztBQUNBLE1BQU1RLENBQUMsR0FBRyxTQUFKQSxDQUFJLENBQUNDLElBQUQsRUFBZUMsWUFBZixFQUFxRDtBQUM3RCxRQUFJQyxVQUFVLEdBQUdGLElBQWpCOztBQUNBLFFBQUlqQyxJQUFJLEtBQUssSUFBVCxJQUFpQm9DLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDdkMsSUFBckMsRUFBMkNxQixLQUFLLENBQUNKLE1BQWpELENBQXJCLEVBQStFO0FBQzdFLFVBQUltQixNQUFNLENBQUNDLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ3ZDLElBQUksQ0FBQ3FCLEtBQUssQ0FBQ0osTUFBUCxDQUF6QyxFQUF5RGdCLElBQXpELENBQUosRUFBb0U7QUFDbEVFLGtCQUFVLEdBQUduQyxJQUFJLENBQUNxQixLQUFLLENBQUNKLE1BQVAsQ0FBSixDQUFtQmdCLElBQW5CLENBQWI7O0FBQ0EsWUFBSUMsWUFBSixFQUFrQjtBQUNoQkMsb0JBQVUsR0FBR3JDLE1BQU0sQ0FBQ3FDLFVBQUQsRUFBYUQsWUFBYixDQUFuQjtBQUNEO0FBQ0YsT0FMRCxNQUtPO0FBQ0w7QUFDQU0sZUFBTyxDQUFDQyxJQUFSLDRDQUFnRFIsSUFBaEQ7QUFDRDtBQUNGLEtBVkQsTUFVTyxJQUFJQyxZQUFKLEVBQWtCO0FBQ3ZCQyxnQkFBVSxHQUFHckMsTUFBTSxDQUFDcUMsVUFBRCxFQUFhRCxZQUFiLENBQW5CO0FBQ0Q7O0FBQ0QsV0FBT0MsVUFBUDtBQUNELEdBaEJELENBTHVDLENBdUJ2Qzs7O0FBQ0EsTUFBTU8sU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ3pCLE1BQUQsRUFBOEI7QUFDOUNZLFlBQVEsQ0FBQztBQUNQTixVQUFJLEVBQUUsWUFEQztBQUVQTixZQUFNLEVBQU5BO0FBRk8sS0FBRCxDQUFSO0FBSUQsR0FMRCxDQXhCdUMsQ0ErQnZDOzs7QUFDQSxNQUFNMEIsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxXQUFrQnRCLEtBQUssQ0FBQ0osTUFBeEI7QUFBQSxHQUFsQixDQWhDdUMsQ0FrQ3ZDOzs7QUFDQSxNQUFNMkIsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBK0I7QUFBQSxRQUE5QkMsWUFBOEIsdUVBQWYsSUFBZTtBQUNsRCxRQUFNQyxTQUFTLEdBQUdILFNBQVMsT0FBTyxJQUFoQixHQUF1QixJQUF2QixHQUE4QixJQUFoRDtBQUNBLFFBQU1JLFFBQVEsR0FBR0QsU0FBUyxLQUFLLElBQS9CO0FBQ0EsUUFBTUUsV0FBVyxHQUFHQyxTQUFTLENBQUNDLFFBQVYsQ0FBbUJDLE9BQW5CLENBQTJCLElBQTNCLElBQW1DLENBQUMsQ0FBeEQ7O0FBRUEsUUFBSUgsV0FBVyxLQUFLRCxRQUFwQixFQUE4QjtBQUM1QkssWUFBTSxDQUFDQyxZQUFQLENBQW9CQyxVQUFwQixDQUErQixjQUEvQjtBQUNELEtBRkQsTUFFTztBQUNMRixZQUFNLENBQUNDLFlBQVAsQ0FBb0JFLE9BQXBCLENBQTRCLGNBQTVCLEVBQTRDVCxTQUE1QztBQUNEOztBQUVESixhQUFTLENBQUNJLFNBQUQsQ0FBVDs7QUFFQSxRQUFJRCxZQUFKLEVBQWtCO0FBQ2ZXLGNBQVEsQ0FBQ0MsYUFBVixDQUF3Q0MsSUFBeEM7QUFDRDtBQUNGLEdBaEJEOztBQWtCQSxTQUFPO0FBQ0wxQixLQUFDLEVBQURBLENBREs7QUFDRlUsYUFBUyxFQUFUQSxTQURFO0FBQ1NDLGFBQVMsRUFBVEEsU0FEVDtBQUNvQkMsZ0JBQVksRUFBWkE7QUFEcEIsR0FBUDtBQUdELENBeERNOztJQUFNZCxPOztBQTBERUEsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4zYTk2YzA5Y2NhODhmMjZkYTVhNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XG4gIGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIsIHVzZUNvbnRleHQsIERpc3BhdGNoLFxufSBmcm9tICdyZWFjdCc7XG5cbi8qKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogU3RyaW5nIEZvcm1hdHRlciAoVXRpbGl0eSkgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICovXG5cbnR5cGUgRm9ybWF0RGljdE9iamVjdCA9IHtcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xufVxudHlwZSBGb3JtYXREaWN0QXJyYXkgPSBzdHJpbmdbXTtcbnR5cGUgRm9ybWF0RGljdCA9IEZvcm1hdERpY3RPYmplY3QgfCBGb3JtYXREaWN0QXJyYXk7XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLWVsc2UtcmV0dXJuICovXG5jb25zdCBmb3JtYXQgPSAobWVzc2FnZTogc3RyaW5nLCBkaWN0OiBGb3JtYXREaWN0LCBkZXB0aCA9IDApOiBzdHJpbmcgPT4ge1xuICBjb25zdCByZXBsYWNlcyA9IG1lc3NhZ2UubWF0Y2goL1xcW1xcW1swLTlhLXpBLVpfOi5dKlxcXVxcXS9nbSk7XG4gIGxldCByZXBsYWNlZENvdW50ZXIgPSAwO1xuICBsZXQgcmVwbGFjZWRNZXNzYWdlID0gU3RyaW5nKG1lc3NhZ2UpO1xuXG4gIGlmIChyZXBsYWNlcykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVwbGFjZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChyZXBsYWNlc1tpXSA9PT0gJ1tbXV0nKSB7XG4gICAgICAgIHJlcGxhY2VkTWVzc2FnZSA9IHJlcGxhY2VkTWVzc2FnZS5yZXBsYWNlKFxuICAgICAgICAgIHJlcGxhY2VzW2ldLFxuICAgICAgICAgIGRpY3RbcmVwbGFjZWRDb3VudGVyXSxcbiAgICAgICAgKTtcbiAgICAgICAgcmVwbGFjZWRDb3VudGVyICs9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByZXFBcmdMYWJlbCA9IHJlcGxhY2VzW2ldLnN1YnN0cmluZygyLCByZXBsYWNlc1tpXS5sZW5ndGggLSAyKTtcbiAgICAgICAgY29uc3QgcmVxQXJnTm8gPSBOdW1iZXIocmVxQXJnTGFiZWwpO1xuICAgICAgICBjb25zdCByZXFBcmcgPSBOdW1iZXIuaXNOYU4ocmVxQXJnTm8pID8gcmVxQXJnTGFiZWwgOiByZXFBcmdObztcblxuICAgICAgICBpZiAodHlwZW9mIGRpY3RbcmVxQXJnXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICByZXBsYWNlZE1lc3NhZ2UgPSByZXBsYWNlZE1lc3NhZ2UucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VzW2ldLFxuICAgICAgICAgICAgZGljdFtyZXFBcmddLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGRlcHRoID4gMTApIHtcbiAgICAgIHJldHVybiByZXBsYWNlZE1lc3NhZ2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmb3JtYXQocmVwbGFjZWRNZXNzYWdlLCBkaWN0LCBkZXB0aCArIDEpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmVwbGFjZWRNZXNzYWdlO1xuICB9XG59O1xuXG4vKipcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIEkxOG4gUmVhY3QgSG9vayBEZWZpbml0aW9uICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqL1xuXG5leHBvcnQgdHlwZSBJMThuTG9jYWxlID0gJ2tvJyB8ICdlbic7XG5pbnRlcmZhY2UgSTE4blN0cnVjdCB7XG4gIGxvY2FsZTogSTE4bkxvY2FsZVxufTtcblxuY29uc3QgaW5pdGlhbExvY2FsZUNvbnRleHQ6IEkxOG5TdHJ1Y3QgPSB7IGxvY2FsZTogJ2tvJyB9O1xuY29uc3QgTG9jYWxlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8STE4blN0cnVjdD4oaW5pdGlhbExvY2FsZUNvbnRleHQpO1xuXG50eXBlIEkxOG5BY3Rpb24gPSB7IHR5cGU6ICdTRVRfTE9DQUxFJzsgbG9jYWxlOiBJMThuTG9jYWxlOyB9O1xuY29uc3QgaTE4blJlZHVjZXIgPSAoc3RhdGU6IEkxOG5TdHJ1Y3QsIGFjdGlvbjogSTE4bkFjdGlvbik6IEkxOG5TdHJ1Y3QgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnU0VUX0xPQ0FMRSc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsb2NhbGU6IGFjdGlvbi5sb2NhbGUsXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbnR5cGUgSTE4bkRpc3BhdGNoID0gRGlzcGF0Y2g8STE4bkFjdGlvbj47XG5jb25zdCBMb2NhbGVEaXNwYXRjaENvbnRleHQgPSBjcmVhdGVDb250ZXh0PEkxOG5EaXNwYXRjaCB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcblxuaW50ZXJmYWNlIFByb3BzIHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0RWxlbWVudCB8IFJlYWN0LlJlYWN0RWxlbWVudFtdIH1cbmV4cG9ydCBjb25zdCBJMThuRW5hYmxlZDogUmVhY3QuU0ZDPFByb3BzPiA9ICh7IGNoaWxkcmVuIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihpMThuUmVkdWNlciwgaW5pdGlhbExvY2FsZUNvbnRleHQpO1xuICByZXR1cm4gKFxuICAgIDxMb2NhbGVEaXNwYXRjaENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2Rpc3BhdGNofT5cbiAgICAgIDxMb2NhbGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvTG9jYWxlQ29udGV4dC5Qcm92aWRlcj5cbiAgICA8L0xvY2FsZURpc3BhdGNoQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VJMThuID0gKGRpY3Q6IG9iamVjdCkgPT4ge1xuICBjb25zdCBzdGF0ZSA9IHVzZUNvbnRleHQoTG9jYWxlQ29udGV4dCk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlQ29udGV4dChMb2NhbGVEaXNwYXRjaENvbnRleHQpO1xuXG4gIC8vIFRyYW5zbGF0b3JcbiAgY29uc3QgdCA9IChpdGVtOiBzdHJpbmcsIGFkYXB0aXZlRGljdD86IEZvcm1hdERpY3QpOiBzdHJpbmcgPT4ge1xuICAgIGxldCB0cmFuc2xhdGVkID0gaXRlbTtcbiAgICBpZiAoZGljdCAhPT0gbnVsbCAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZGljdCwgc3RhdGUubG9jYWxlKSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChkaWN0W3N0YXRlLmxvY2FsZV0sIGl0ZW0pKSB7XG4gICAgICAgIHRyYW5zbGF0ZWQgPSBkaWN0W3N0YXRlLmxvY2FsZV1baXRlbV07XG4gICAgICAgIGlmIChhZGFwdGl2ZURpY3QpIHtcbiAgICAgICAgICB0cmFuc2xhdGVkID0gZm9ybWF0KHRyYW5zbGF0ZWQsIGFkYXB0aXZlRGljdCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgICAgY29uc29sZS53YXJuKGBObyBhcHByb3ByaWF0ZSB0cmFuc2xhdGlvbiBmb3IgXCIke2l0ZW19XCIhYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhZGFwdGl2ZURpY3QpIHtcbiAgICAgIHRyYW5zbGF0ZWQgPSBmb3JtYXQodHJhbnNsYXRlZCwgYWRhcHRpdmVEaWN0KTtcbiAgICB9XG4gICAgcmV0dXJuIHRyYW5zbGF0ZWQ7XG4gIH07XG5cbiAgLy8gTG9jYWxlIFNldHRlclxuICBjb25zdCBzZXRMb2NhbGUgPSAobG9jYWxlOiBJMThuTG9jYWxlKTogdm9pZCA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ1NFVF9MT0NBTEUnLFxuICAgICAgbG9jYWxlLFxuICAgIH0pO1xuICB9O1xuXG4gIC8vIExvY2FsZSBHZXR0ZXJcbiAgY29uc3QgZ2V0TG9jYWxlID0gKCk6IEkxOG5Mb2NhbGUgPT4gc3RhdGUubG9jYWxlO1xuXG4gIC8vIExvY2FsZSBUb2dnbGVyXG4gIGNvbnN0IHRvZ2dsZUxvY2FsZSA9ICh3aXRoQmx1cnJpbmcgPSB0cnVlKTogdm9pZCA9PiB7XG4gICAgY29uc3QgbmV3TG9jYWxlID0gZ2V0TG9jYWxlKCkgPT09ICdlbicgPyAna28nIDogJ2VuJztcbiAgICBjb25zdCBiZUtvcmVhbiA9IG5ld0xvY2FsZSA9PT0gJ2tvJztcbiAgICBjb25zdCBpc0Jyb3dzZXJLbyA9IG5hdmlnYXRvci5sYW5ndWFnZS5pbmRleE9mKCdrbycpID4gLTE7XG5cbiAgICBpZiAoaXNCcm93c2VyS28gPT09IGJlS29yZWFuKSB7XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3NzdWFsYXNzdWFsYScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NzdWFsYXNzdWFsYScsIG5ld0xvY2FsZSk7XG4gICAgfVxuXG4gICAgc2V0TG9jYWxlKG5ld0xvY2FsZSk7XG5cbiAgICBpZiAod2l0aEJsdXJyaW5nKSB7XG4gICAgICAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuYmx1cigpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHQsIHNldExvY2FsZSwgZ2V0TG9jYWxlLCB0b2dnbGVMb2NhbGUsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VJMThuO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==