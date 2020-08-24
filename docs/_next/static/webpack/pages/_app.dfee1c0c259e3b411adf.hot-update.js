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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZ2xvYmFsL2kxOG4udHN4Il0sIm5hbWVzIjpbImZvcm1hdCIsIm1lc3NhZ2UiLCJkaWN0IiwiZGVwdGgiLCJyZXBsYWNlcyIsIm1hdGNoIiwicmVwbGFjZWRDb3VudGVyIiwicmVwbGFjZWRNZXNzYWdlIiwiU3RyaW5nIiwiaSIsImxlbmd0aCIsInJlcGxhY2UiLCJyZXFBcmdMYWJlbCIsInN1YnN0cmluZyIsInJlcUFyZ05vIiwiTnVtYmVyIiwicmVxQXJnIiwiaXNOYU4iLCJpbml0aWFsTG9jYWxlQ29udGV4dCIsImxvY2FsZSIsIkxvY2FsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiaTE4blJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJMb2NhbGVEaXNwYXRjaENvbnRleHQiLCJ1bmRlZmluZWQiLCJJMThuRW5hYmxlZCIsImNoaWxkcmVuIiwidXNlUmVkdWNlciIsImRpc3BhdGNoIiwidXNlSTE4biIsInVzZUNvbnRleHQiLCJ0IiwiaXRlbSIsImFkYXB0aXZlRGljdCIsInRyYW5zbGF0ZWQiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJjb25zb2xlIiwid2FybiIsInNldExvY2FsZSIsImdldExvY2FsZSIsInRvZ2dsZUxvY2FsZSIsIndpdGhCbHVycmluZyIsIm5ld0xvY2FsZSIsImJlS29yZWFuIiwiaXNCcm93c2VyS28iLCJuYXZpZ2F0b3IiLCJsYW5ndWFnZSIsImluZGV4T2YiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsInNldFRoZW1lIiwibmV3VGhlbWUiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJibHVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUlBOzs7Ozs7QUFZQTtBQUNBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLE9BQUQsRUFBa0JDLElBQWxCLEVBQTBEO0FBQUEsTUFBdEJDLEtBQXNCLHVFQUFkLENBQWM7QUFDdkUsTUFBTUMsUUFBUSxHQUFHSCxPQUFPLENBQUNJLEtBQVIsQ0FBYywyQkFBZCxDQUFqQjtBQUNBLE1BQUlDLGVBQWUsR0FBRyxDQUF0QjtBQUNBLE1BQUlDLGVBQWUsR0FBR0MsTUFBTSxDQUFDUCxPQUFELENBQTVCOztBQUVBLE1BQUlHLFFBQUosRUFBYztBQUNaLFNBQUssSUFBSUssQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0wsUUFBUSxDQUFDTSxNQUE3QixFQUFxQ0QsQ0FBQyxJQUFJLENBQTFDLEVBQTZDO0FBQzNDLFVBQUlMLFFBQVEsQ0FBQ0ssQ0FBRCxDQUFSLEtBQWdCLE1BQXBCLEVBQTRCO0FBQzFCRix1QkFBZSxHQUFHQSxlQUFlLENBQUNJLE9BQWhCLENBQ2hCUCxRQUFRLENBQUNLLENBQUQsQ0FEUSxFQUVoQlAsSUFBSSxDQUFDSSxlQUFELENBRlksQ0FBbEI7QUFJQUEsdUJBQWUsSUFBSSxDQUFuQjtBQUNELE9BTkQsTUFNTztBQUNMLFlBQU1NLFdBQVcsR0FBR1IsUUFBUSxDQUFDSyxDQUFELENBQVIsQ0FBWUksU0FBWixDQUFzQixDQUF0QixFQUF5QlQsUUFBUSxDQUFDSyxDQUFELENBQVIsQ0FBWUMsTUFBWixHQUFxQixDQUE5QyxDQUFwQjtBQUNBLFlBQU1JLFFBQVEsR0FBR0MsTUFBTSxDQUFDSCxXQUFELENBQXZCO0FBQ0EsWUFBTUksTUFBTSxHQUFHRCxNQUFNLENBQUNFLEtBQVAsQ0FBYUgsUUFBYixJQUF5QkYsV0FBekIsR0FBdUNFLFFBQXREOztBQUVBLFlBQUksT0FBT1osSUFBSSxDQUFDYyxNQUFELENBQVgsS0FBd0IsV0FBNUIsRUFBeUM7QUFDdkNULHlCQUFlLEdBQUdBLGVBQWUsQ0FBQ0ksT0FBaEIsQ0FDaEJQLFFBQVEsQ0FBQ0ssQ0FBRCxDQURRLEVBRWhCUCxJQUFJLENBQUNjLE1BQUQsQ0FGWSxDQUFsQjtBQUlEO0FBQ0Y7QUFDRjs7QUFDRCxRQUFJYixLQUFLLEdBQUcsRUFBWixFQUFnQjtBQUNkLGFBQU9JLGVBQVA7QUFDRCxLQUZELE1BRU87QUFDTCxhQUFPUCxNQUFNLENBQUNPLGVBQUQsRUFBa0JMLElBQWxCLEVBQXdCQyxLQUFLLEdBQUcsQ0FBaEMsQ0FBYjtBQUNEO0FBQ0YsR0ExQkQsTUEwQk87QUFDTCxXQUFPSSxlQUFQO0FBQ0Q7QUFDRixDQWxDRDtBQW9DQTs7Ozs7OztBQVNDO0FBRUQsSUFBTVcsb0JBQWdDLEdBQUc7QUFBRUMsUUFBTSxFQUFFO0FBQVYsQ0FBekM7QUFDQSxJQUFNQyxhQUFhLEdBQUdDLDJEQUFhLENBQWFILG9CQUFiLENBQW5DOztBQUdBLElBQU1JLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBb0JDLE1BQXBCLEVBQXVEO0FBQ3pFLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUssWUFBTDtBQUNFLGFBQU87QUFDTE4sY0FBTSxFQUFFSyxNQUFNLENBQUNMO0FBRFYsT0FBUDs7QUFHRjtBQUNFLGFBQU9JLEtBQVA7QUFOSjtBQVFELENBVEQ7O0FBWUEsSUFBTUcscUJBQXFCLEdBQUdMLDJEQUFhLENBQTJCTSxTQUEzQixDQUEzQztBQUdPLElBQU1DLFdBQTZCLEdBQUcsU0FBaENBLFdBQWdDLE9BQXlCO0FBQUE7O0FBQUEsTUFBdEJDLFFBQXNCLFFBQXRCQSxRQUFzQjs7QUFBQSxvQkFDMUNDLHdEQUFVLENBQUNSLFdBQUQsRUFBY0osb0JBQWQsQ0FEZ0M7QUFBQSxNQUM3REssS0FENkQ7QUFBQSxNQUN0RFEsUUFEc0Q7O0FBRXBFLFNBQ0UsTUFBQyxxQkFBRCxDQUF1QixRQUF2QjtBQUFnQyxTQUFLLEVBQUVBLFFBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGFBQUQsQ0FBZSxRQUFmO0FBQXdCLFNBQUssRUFBRVIsS0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHTSxRQURILENBREYsQ0FERjtBQU9ELENBVE07O0dBQU1ELFc7O0tBQUFBLFc7QUFXTixJQUFNSSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDOUIsSUFBRCxFQUFrQjtBQUFBOztBQUN2QyxNQUFNcUIsS0FBSyxHQUFHVSx3REFBVSxDQUFDYixhQUFELENBQXhCO0FBQ0EsTUFBTVcsUUFBUSxHQUFHRSx3REFBVSxDQUFDUCxxQkFBRCxDQUEzQixDQUZ1QyxDQUl2Qzs7QUFDQSxNQUFNUSxDQUFDLEdBQUcsU0FBSkEsQ0FBSSxDQUFDQyxJQUFELEVBQWVDLFlBQWYsRUFBcUQ7QUFDN0QsUUFBSUMsVUFBVSxHQUFHRixJQUFqQjs7QUFDQSxRQUFJakMsSUFBSSxLQUFLLElBQVQsSUFBaUJvQyxNQUFNLENBQUNDLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ3ZDLElBQXJDLEVBQTJDcUIsS0FBSyxDQUFDSixNQUFqRCxDQUFyQixFQUErRTtBQUM3RSxVQUFJbUIsTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxjQUFqQixDQUFnQ0MsSUFBaEMsQ0FBcUN2QyxJQUFJLENBQUNxQixLQUFLLENBQUNKLE1BQVAsQ0FBekMsRUFBeURnQixJQUF6RCxDQUFKLEVBQW9FO0FBQ2xFRSxrQkFBVSxHQUFHbkMsSUFBSSxDQUFDcUIsS0FBSyxDQUFDSixNQUFQLENBQUosQ0FBbUJnQixJQUFuQixDQUFiOztBQUNBLFlBQUlDLFlBQUosRUFBa0I7QUFDaEJDLG9CQUFVLEdBQUdyQyxNQUFNLENBQUNxQyxVQUFELEVBQWFELFlBQWIsQ0FBbkI7QUFDRDtBQUNGLE9BTEQsTUFLTztBQUNMO0FBQ0FNLGVBQU8sQ0FBQ0MsSUFBUiw0Q0FBZ0RSLElBQWhEO0FBQ0Q7QUFDRixLQVZELE1BVU8sSUFBSUMsWUFBSixFQUFrQjtBQUN2QkMsZ0JBQVUsR0FBR3JDLE1BQU0sQ0FBQ3FDLFVBQUQsRUFBYUQsWUFBYixDQUFuQjtBQUNEOztBQUNELFdBQU9DLFVBQVA7QUFDRCxHQWhCRCxDQUx1QyxDQXVCdkM7OztBQUNBLE1BQU1PLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUN6QixNQUFELEVBQThCO0FBQzlDWSxZQUFRLENBQUM7QUFDUE4sVUFBSSxFQUFFLFlBREM7QUFFUE4sWUFBTSxFQUFOQTtBQUZPLEtBQUQsQ0FBUjtBQUlELEdBTEQsQ0F4QnVDLENBK0J2Qzs7O0FBQ0EsTUFBTTBCLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsV0FBa0J0QixLQUFLLENBQUNKLE1BQXhCO0FBQUEsR0FBbEIsQ0FoQ3VDLENBa0N2Qzs7O0FBQ0EsTUFBTTJCLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQStCO0FBQUEsUUFBOUJDLFlBQThCLHVFQUFmLElBQWU7QUFDbEQsUUFBTUMsU0FBUyxHQUFHSCxTQUFTLE9BQU8sSUFBaEIsR0FBdUIsSUFBdkIsR0FBOEIsSUFBaEQ7QUFDQSxRQUFNSSxRQUFRLEdBQUdELFNBQVMsS0FBSyxJQUEvQjtBQUNBLFFBQU1FLFdBQVcsR0FBR0MsU0FBUyxDQUFDQyxRQUFWLENBQW1CQyxPQUFuQixDQUEyQixJQUEzQixJQUFtQyxDQUFDLENBQXhEOztBQUVBLFFBQUlILFdBQVcsS0FBS0QsUUFBcEIsRUFBOEI7QUFDNUJLLFlBQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsVUFBcEIsQ0FBK0IsY0FBL0I7QUFDRCxLQUZELE1BRU87QUFDTEYsWUFBTSxDQUFDQyxZQUFQLENBQW9CRSxPQUFwQixDQUE0QixjQUE1QixFQUE0Q1QsU0FBNUM7QUFDRDs7QUFFRFUsWUFBUSxDQUFDQyxRQUFELENBQVI7O0FBRUEsUUFBSVosWUFBSixFQUFrQjtBQUNmYSxjQUFRLENBQUNDLGFBQVYsQ0FBd0NDLElBQXhDO0FBQ0Q7QUFDRixHQWhCRDs7QUFrQkEsU0FBTztBQUNMNUIsS0FBQyxFQUFEQSxDQURLO0FBQ0ZVLGFBQVMsRUFBVEEsU0FERTtBQUNTQyxhQUFTLEVBQVRBLFNBRFQ7QUFDb0JDLGdCQUFZLEVBQVpBO0FBRHBCLEdBQVA7QUFHRCxDQXhETTs7SUFBTWQsTzs7QUEwREVBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZGZlZTFjMGMyNTllM2I0MTFhZGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xuICBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyLCB1c2VDb250ZXh0LCBEaXNwYXRjaCxcbn0gZnJvbSAncmVhY3QnO1xuXG4vKipcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIFN0cmluZyBGb3JtYXR0ZXIgKFV0aWxpdHkpICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqL1xuXG50eXBlIEZvcm1hdERpY3RPYmplY3QgPSB7XG4gIFtrZXk6IHN0cmluZ106IHN0cmluZztcbn1cbnR5cGUgRm9ybWF0RGljdEFycmF5ID0gc3RyaW5nW107XG50eXBlIEZvcm1hdERpY3QgPSBGb3JtYXREaWN0T2JqZWN0IHwgRm9ybWF0RGljdEFycmF5O1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1lbHNlLXJldHVybiAqL1xuY29uc3QgZm9ybWF0ID0gKG1lc3NhZ2U6IHN0cmluZywgZGljdDogRm9ybWF0RGljdCwgZGVwdGggPSAwKTogc3RyaW5nID0+IHtcbiAgY29uc3QgcmVwbGFjZXMgPSBtZXNzYWdlLm1hdGNoKC9cXFtcXFtbMC05YS16QS1aXzouXSpcXF1cXF0vZ20pO1xuICBsZXQgcmVwbGFjZWRDb3VudGVyID0gMDtcbiAgbGV0IHJlcGxhY2VkTWVzc2FnZSA9IFN0cmluZyhtZXNzYWdlKTtcblxuICBpZiAocmVwbGFjZXMpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlcGxhY2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAocmVwbGFjZXNbaV0gPT09ICdbW11dJykge1xuICAgICAgICByZXBsYWNlZE1lc3NhZ2UgPSByZXBsYWNlZE1lc3NhZ2UucmVwbGFjZShcbiAgICAgICAgICByZXBsYWNlc1tpXSxcbiAgICAgICAgICBkaWN0W3JlcGxhY2VkQ291bnRlcl0sXG4gICAgICAgICk7XG4gICAgICAgIHJlcGxhY2VkQ291bnRlciArPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcmVxQXJnTGFiZWwgPSByZXBsYWNlc1tpXS5zdWJzdHJpbmcoMiwgcmVwbGFjZXNbaV0ubGVuZ3RoIC0gMik7XG4gICAgICAgIGNvbnN0IHJlcUFyZ05vID0gTnVtYmVyKHJlcUFyZ0xhYmVsKTtcbiAgICAgICAgY29uc3QgcmVxQXJnID0gTnVtYmVyLmlzTmFOKHJlcUFyZ05vKSA/IHJlcUFyZ0xhYmVsIDogcmVxQXJnTm87XG5cbiAgICAgICAgaWYgKHR5cGVvZiBkaWN0W3JlcUFyZ10gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgcmVwbGFjZWRNZXNzYWdlID0gcmVwbGFjZWRNZXNzYWdlLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlc1tpXSxcbiAgICAgICAgICAgIGRpY3RbcmVxQXJnXSxcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChkZXB0aCA+IDEwKSB7XG4gICAgICByZXR1cm4gcmVwbGFjZWRNZXNzYWdlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZm9ybWF0KHJlcGxhY2VkTWVzc2FnZSwgZGljdCwgZGVwdGggKyAxKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJlcGxhY2VkTWVzc2FnZTtcbiAgfVxufTtcblxuLyoqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBJMThuIFJlYWN0IEhvb2sgRGVmaW5pdGlvbiAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKi9cblxuZXhwb3J0IHR5cGUgSTE4bkxvY2FsZSA9ICdrbycgfCAnZW4nO1xuaW50ZXJmYWNlIEkxOG5TdHJ1Y3Qge1xuICBsb2NhbGU6IEkxOG5Mb2NhbGVcbn07XG5cbmNvbnN0IGluaXRpYWxMb2NhbGVDb250ZXh0OiBJMThuU3RydWN0ID0geyBsb2NhbGU6ICdrbycgfTtcbmNvbnN0IExvY2FsZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0PEkxOG5TdHJ1Y3Q+KGluaXRpYWxMb2NhbGVDb250ZXh0KTtcblxudHlwZSBJMThuQWN0aW9uID0geyB0eXBlOiAnU0VUX0xPQ0FMRSc7IGxvY2FsZTogSTE4bkxvY2FsZTsgfTtcbmNvbnN0IGkxOG5SZWR1Y2VyID0gKHN0YXRlOiBJMThuU3RydWN0LCBhY3Rpb246IEkxOG5BY3Rpb24pOiBJMThuU3RydWN0ID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1NFVF9MT0NBTEUnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbG9jYWxlOiBhY3Rpb24ubG9jYWxlLFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG50eXBlIEkxOG5EaXNwYXRjaCA9IERpc3BhdGNoPEkxOG5BY3Rpb24+O1xuY29uc3QgTG9jYWxlRGlzcGF0Y2hDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxJMThuRGlzcGF0Y2ggfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG5cbmludGVyZmFjZSBQcm9wcyB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdEVsZW1lbnQgfCBSZWFjdC5SZWFjdEVsZW1lbnRbXSB9XG5leHBvcnQgY29uc3QgSTE4bkVuYWJsZWQ6IFJlYWN0LlNGQzxQcm9wcz4gPSAoeyBjaGlsZHJlbiB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoaTE4blJlZHVjZXIsIGluaXRpYWxMb2NhbGVDb250ZXh0KTtcbiAgcmV0dXJuIChcbiAgICA8TG9jYWxlRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtkaXNwYXRjaH0+XG4gICAgICA8TG9jYWxlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0xvY2FsZUNvbnRleHQuUHJvdmlkZXI+XG4gICAgPC9Mb2NhbGVEaXNwYXRjaENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlSTE4biA9IChkaWN0OiBvYmplY3QpID0+IHtcbiAgY29uc3Qgc3RhdGUgPSB1c2VDb250ZXh0KExvY2FsZUNvbnRleHQpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZUNvbnRleHQoTG9jYWxlRGlzcGF0Y2hDb250ZXh0KTtcblxuICAvLyBUcmFuc2xhdG9yXG4gIGNvbnN0IHQgPSAoaXRlbTogc3RyaW5nLCBhZGFwdGl2ZURpY3Q/OiBGb3JtYXREaWN0KTogc3RyaW5nID0+IHtcbiAgICBsZXQgdHJhbnNsYXRlZCA9IGl0ZW07XG4gICAgaWYgKGRpY3QgIT09IG51bGwgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGRpY3QsIHN0YXRlLmxvY2FsZSkpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZGljdFtzdGF0ZS5sb2NhbGVdLCBpdGVtKSkge1xuICAgICAgICB0cmFuc2xhdGVkID0gZGljdFtzdGF0ZS5sb2NhbGVdW2l0ZW1dO1xuICAgICAgICBpZiAoYWRhcHRpdmVEaWN0KSB7XG4gICAgICAgICAgdHJhbnNsYXRlZCA9IGZvcm1hdCh0cmFuc2xhdGVkLCBhZGFwdGl2ZURpY3QpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gICAgICAgIGNvbnNvbGUud2FybihgTm8gYXBwcm9wcmlhdGUgdHJhbnNsYXRpb24gZm9yIFwiJHtpdGVtfVwiIWApO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYWRhcHRpdmVEaWN0KSB7XG4gICAgICB0cmFuc2xhdGVkID0gZm9ybWF0KHRyYW5zbGF0ZWQsIGFkYXB0aXZlRGljdCk7XG4gICAgfVxuICAgIHJldHVybiB0cmFuc2xhdGVkO1xuICB9O1xuXG4gIC8vIExvY2FsZSBTZXR0ZXJcbiAgY29uc3Qgc2V0TG9jYWxlID0gKGxvY2FsZTogSTE4bkxvY2FsZSk6IHZvaWQgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdTRVRfTE9DQUxFJyxcbiAgICAgIGxvY2FsZSxcbiAgICB9KTtcbiAgfTtcblxuICAvLyBMb2NhbGUgR2V0dGVyXG4gIGNvbnN0IGdldExvY2FsZSA9ICgpOiBJMThuTG9jYWxlID0+IHN0YXRlLmxvY2FsZTtcblxuICAvLyBMb2NhbGUgVG9nZ2xlclxuICBjb25zdCB0b2dnbGVMb2NhbGUgPSAod2l0aEJsdXJyaW5nID0gdHJ1ZSk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IG5ld0xvY2FsZSA9IGdldExvY2FsZSgpID09PSAnZW4nID8gJ2tvJyA6ICdlbic7XG4gICAgY29uc3QgYmVLb3JlYW4gPSBuZXdMb2NhbGUgPT09ICdrbyc7XG4gICAgY29uc3QgaXNCcm93c2VyS28gPSBuYXZpZ2F0b3IubGFuZ3VhZ2UuaW5kZXhPZigna28nKSA+IC0xO1xuXG4gICAgaWYgKGlzQnJvd3NlcktvID09PSBiZUtvcmVhbikge1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdzc3VhbGFzc3VhbGEnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzc3VhbGFzc3VhbGEnLCBuZXdMb2NhbGUpO1xuICAgIH1cblxuICAgIHNldFRoZW1lKG5ld1RoZW1lKTtcblxuICAgIGlmICh3aXRoQmx1cnJpbmcpIHtcbiAgICAgIChkb2N1bWVudC5hY3RpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5ibHVyKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgdCwgc2V0TG9jYWxlLCBnZXRMb2NhbGUsIHRvZ2dsZUxvY2FsZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUkxOG47XG4iXSwic291cmNlUm9vdCI6IiJ9