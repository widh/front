webpackHotUpdate_N_E("pages/index",{

/***/ "./global/theme.tsx":
/*!**************************!*\
  !*** ./global/theme.tsx ***!
  \**************************/
/*! exports provided: ThemeEnabled, useTheme, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeEnabled", function() { return ThemeEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTheme", function() { return useTheme; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\jio\\Desktop\\homepage\\src\\global\\theme.tsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


;
var initialThemeContext = {
  theme: 'light',
  locked: false
};
var ThemeContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(initialThemeContext);

var themeReducer = function themeReducer(state, action) {
  switch (action.type) {
    case 'SET_THEME':
      return _objectSpread(_objectSpread({}, state), {}, {
        theme: action.theme
      });

    case 'SET_LOCK_STATE':
      return _objectSpread(_objectSpread({}, state), {}, {
        locked: action.locked
      });

    default:
      return state;
  }
};

var ThemeDispatchContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(undefined);
var ThemeEnabled = function ThemeEnabled(_ref) {
  _s();

  var children = _ref.children;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(themeReducer, initialThemeContext),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  return __jsx(ThemeDispatchContext.Provider, {
    value: dispatch,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx(ThemeContext.Provider, {
    value: state,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, children));
};

_s(ThemeEnabled, "uly1MgX+4dna1sh1SYSAhXYxSto=");

_c = ThemeEnabled;
var useTheme = function useTheme() {
  _s2();

  var state = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext);
  var dispatch = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeDispatchContext); // Theme Setter

  var setTheme = function setTheme(theme) {
    if (!state.locked) {
      document.documentElement.dataset.theme = theme === 'dark' ? 'dark' : 'light';
      dispatch({
        type: 'SET_THEME',
        theme: theme
      });
    }
  }; // Theme Getter


  var getTheme = function getTheme() {
    return state.theme;
  }; // Lock Getter


  var isThemeLocked = function isThemeLocked() {
    return state.locked;
  }; // Locker


  var lockTheme = function lockTheme() {
    dispatch({
      type: 'SET_LOCK_STATE',
      locked: true
    });
  }; // Unlocker


  var unlockTheme = function unlockTheme() {
    dispatch({
      type: 'SET_LOCK_STATE',
      locked: false
    });
  }; // Toggler


  var toggleTheme = function toggleTheme() {
    var withBlurring = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    var newTheme = getTheme() === 'dark' ? 'light' : 'dark';
    var beDark = newTheme === 'dark';

    if (beDark && window.matchMedia('(prefers-color-scheme: dark)').matches || !beDark && window.matchMedia('(prefers-color-scheme: light)').matches) {
      window.localStorage.removeItem('modarkbul');
    } else {
      window.localStorage.setItem('modarkbul', newTheme);
    }

    setTheme(newTheme);

    if (withBlurring) {
      document.activeElement.blur();
    }
  };

  return {
    getTheme: getTheme,
    setTheme: setTheme,
    lockTheme: lockTheme,
    unlockTheme: unlockTheme,
    isThemeLocked: isThemeLocked,
    toggleTheme: toggleTheme
  };
};

_s2(useTheme, "kTsY29gplUle/V4rxdYnJPedYSo=");

/* harmony default export */ __webpack_exports__["default"] = (useTheme);

var _c;

$RefreshReg$(_c, "ThemeEnabled");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZ2xvYmFsL3RoZW1lLnRzeCJdLCJuYW1lcyI6WyJpbml0aWFsVGhlbWVDb250ZXh0IiwidGhlbWUiLCJsb2NrZWQiLCJUaGVtZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidGhlbWVSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiVGhlbWVEaXNwYXRjaENvbnRleHQiLCJ1bmRlZmluZWQiLCJUaGVtZUVuYWJsZWQiLCJjaGlsZHJlbiIsInVzZVJlZHVjZXIiLCJkaXNwYXRjaCIsInVzZVRoZW1lIiwidXNlQ29udGV4dCIsInNldFRoZW1lIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJkYXRhc2V0IiwiZ2V0VGhlbWUiLCJpc1RoZW1lTG9ja2VkIiwibG9ja1RoZW1lIiwidW5sb2NrVGhlbWUiLCJ0b2dnbGVUaGVtZSIsIndpdGhCbHVycmluZyIsIm5ld1RoZW1lIiwiYmVEYXJrIiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsImFjdGl2ZUVsZW1lbnQiLCJibHVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBSzJEO0FBRTNELElBQU1BLG1CQUFnQyxHQUFHO0FBQUVDLE9BQUssRUFBRSxPQUFUO0FBQWtCQyxRQUFNLEVBQUU7QUFBMUIsQ0FBekM7QUFDQSxJQUFNQyxZQUFZLEdBQUdDLDJEQUFhLENBQWNKLG1CQUFkLENBQWxDOztBQUtBLElBQU1LLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBcUJDLE1BQXJCLEVBQTBEO0FBQzdFLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUssV0FBTDtBQUNFLDZDQUNLRixLQURMO0FBRUVMLGFBQUssRUFBRU0sTUFBTSxDQUFDTjtBQUZoQjs7QUFJRixTQUFLLGdCQUFMO0FBQ0UsNkNBQ0tLLEtBREw7QUFF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QXlDUCxRQUF6QztBQUNEOztBQUVEVixZQUFRLENBQUNVLFFBQUQsQ0FBUjs7QUFFQSxRQUFJRCxZQUFKLEVBQWtCO0FBQ2ZSLGNBQVEsQ0FBQ2lCLGFBQVYsQ0FBd0NDLElBQXhDO0FBQ0Q7QUFDRixHQWxCRDs7QUFvQkEsU0FBTztBQUNMZixZQUFRLEVBQVJBLFFBREs7QUFDS0osWUFBUSxFQUFSQSxRQURMO0FBQ2VNLGFBQVMsRUFBVEEsU0FEZjtBQUMwQkMsZUFBVyxFQUFYQSxXQUQxQjtBQUN1Q0YsaUJBQWEsRUFBYkEsYUFEdkM7QUFDc0RHLGVBQVcsRUFBWEE7QUFEdEQsR0FBUDtBQUdELENBN0RNOztJQUFNVixROztBQStERUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDUzMDg0YzM4ODFkM2M3NmU1MWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xuICBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyLCB1c2VDb250ZXh0LCBEaXNwYXRjaCxcbn0gZnJvbSAncmVhY3QnO1xuXG50eXBlIFRoZW1lTmFtZSA9ICdkYXJrJyB8ICdsaWdodCc7XG5pbnRlcmZhY2UgVGhlbWVTdHJ1Y3QgeyB0aGVtZTogVGhlbWVOYW1lLCBsb2NrZWQ6IGJvb2xlYW4gfTtcblxuY29uc3QgaW5pdGlhbFRoZW1lQ29udGV4dDogVGhlbWVTdHJ1Y3QgPSB7IHRoZW1lOiAnbGlnaHQnLCBsb2NrZWQ6IGZhbHNlIH07XG5jb25zdCBUaGVtZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0PFRoZW1lU3RydWN0Pihpbml0aWFsVGhlbWVDb250ZXh0KTtcblxudHlwZSBUaGVtZUFjdGlvbiA9XG4gIHsgdHlwZTogJ1NFVF9USEVNRSc7IHRoZW1lOiBUaGVtZU5hbWU7IH1cbiAgfCB7IHR5cGU6ICdTRVRfTE9DS19TVEFURSc7IGxvY2tlZDogYm9vbGVhbjsgfTtcbmNvbnN0IHRoZW1lUmVkdWNlciA9IChzdGF0ZTogVGhlbWVTdHJ1Y3QsIGFjdGlvbjogVGhlbWVBY3Rpb24pOiBUaGVtZVN0cnVjdCA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdTRVRfVEhFTUUnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHRoZW1lOiBhY3Rpb24udGhlbWUsXG4gICAgICB9O1xuICAgIGNhc2UgJ1NFVF9MT0NLX1NUQVRFJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2NrZWQ6IGFjdGlvbi5sb2NrZWQsXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbnR5cGUgVGhlbWVEaXNwYXRjaCA9IERpc3BhdGNoPFRoZW1lQWN0aW9uPjtcbmNvbnN0IFRoZW1lRGlzcGF0Y2hDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxUaGVtZURpc3BhdGNoIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuXG5pbnRlcmZhY2UgUHJvcHMgeyBjaGlsZHJlbjogUmVhY3QuUmVhY3RFbGVtZW50IHwgUmVhY3QuUmVhY3RFbGVtZW50W10gfVxuZXhwb3J0IGNvbnN0IFRoZW1lRW5hYmxlZDogUmVhY3QuU0ZDPFByb3BzPiA9ICh7IGNoaWxkcmVuIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcih0aGVtZVJlZHVjZXIsIGluaXRpYWxUaGVtZUNvbnRleHQpO1xuICByZXR1cm4gKFxuICAgIDxUaGVtZURpc3BhdGNoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17ZGlzcGF0Y2h9PlxuICAgICAgPFRoZW1lQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L1RoZW1lQ29udGV4dC5Qcm92aWRlcj5cbiAgICA8L1RoZW1lRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZVRoZW1lID0gKCkgPT4ge1xuICBjb25zdCBzdGF0ZSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VDb250ZXh0KFRoZW1lRGlzcGF0Y2hDb250ZXh0KTtcblxuICAvLyBUaGVtZSBTZXR0ZXJcbiAgY29uc3Qgc2V0VGhlbWUgPSAodGhlbWU6IFRoZW1lTmFtZSk6IHZvaWQgPT4ge1xuICAgIGlmICghc3RhdGUubG9ja2VkKSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGF0YXNldC50aGVtZSA9IHRoZW1lID09PSAnZGFyaycgPyAnZGFyaycgOiAnbGlnaHQnO1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiAnU0VUX1RIRU1FJyxcbiAgICAgICAgdGhlbWUsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgLy8gVGhlbWUgR2V0dGVyXG4gIGNvbnN0IGdldFRoZW1lID0gKCk6IFRoZW1lTmFtZSA9PiBzdGF0ZS50aGVtZTtcblxuICAvLyBMb2NrIEdldHRlclxuICBjb25zdCBpc1RoZW1lTG9ja2VkID0gKCk6IGJvb2xlYW4gPT4gc3RhdGUubG9ja2VkO1xuXG4gIC8vIExvY2tlclxuICBjb25zdCBsb2NrVGhlbWUgPSAoKTogdm9pZCA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ1NFVF9MT0NLX1NUQVRFJyxcbiAgICAgIGxvY2tlZDogdHJ1ZSxcbiAgICB9KTtcbiAgfTtcblxuICAvLyBVbmxvY2tlclxuICBjb25zdCB1bmxvY2tUaGVtZSA9ICgpOiB2b2lkID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnU0VUX0xPQ0tfU1RBVEUnLFxuICAgICAgbG9ja2VkOiBmYWxzZSxcbiAgICB9KTtcbiAgfTtcblxuICAvLyBUb2dnbGVyXG4gIGNvbnN0IHRvZ2dsZVRoZW1lID0gKHdpdGhCbHVycmluZyA9IHRydWUpOiB2b2lkID0+IHtcbiAgICBjb25zdCBuZXdUaGVtZSA9IGdldFRoZW1lKCkgPT09ICdkYXJrJyA/ICdsaWdodCcgOiAnZGFyayc7XG4gICAgY29uc3QgYmVEYXJrID0gbmV3VGhlbWUgPT09ICdkYXJrJztcblxuICAgIGlmIChcbiAgICAgIChiZURhcmsgJiYgd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzKVxuICAgICAgfHwgKCFiZURhcmsgJiYgd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogbGlnaHQpJykubWF0Y2hlcylcbiAgICApIHtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbW9kYXJrYnVsJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbW9kYXJrYnVsJywgbmV3VGhlbWUpO1xuICAgIH1cblxuICAgIHNldFRoZW1lKG5ld1RoZW1lKTtcblxuICAgIGlmICh3aXRoQmx1cnJpbmcpIHtcbiAgICAgIChkb2N1bWVudC5hY3RpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5ibHVyKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0VGhlbWUsIHNldFRoZW1lLCBsb2NrVGhlbWUsIHVubG9ja1RoZW1lLCBpc1RoZW1lTG9ja2VkLCB0b2dnbGVUaGVtZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVRoZW1lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==