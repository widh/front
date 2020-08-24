webpackHotUpdate_N_E("pages/_app",{

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
    isThemeLocked: isThemeLocked
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZ2xvYmFsL3RoZW1lLnRzeCJdLCJuYW1lcyI6WyJpbml0aWFsVGhlbWVDb250ZXh0IiwidGhlbWUiLCJsb2NrZWQiLCJUaGVtZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidGhlbWVSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiVGhlbWVEaXNwYXRjaENvbnRleHQiLCJ1bmRlZmluZWQiLCJUaGVtZUVuYWJsZWQiLCJjaGlsZHJlbiIsInVzZVJlZHVjZXIiLCJkaXNwYXRjaCIsInVzZVRoZW1lIiwidXNlQ29udGV4dCIsInNldFRoZW1lIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJkYXRhc2V0IiwiZ2V0VGhlbWUiLCJpc1RoZW1lTG9ja2VkIiwibG9ja1RoZW1lIiwidW5sb2NrVGhlbWUiLCJ0b2dnbGVUaGVtZSIsIndpdGhCbHVycmluZyIsIm5ld1RoZW1lIiwiYmVEYXJrIiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsImFjdGl2ZUVsZW1lbnQiLCJibHVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBSzJEO0FBRTNELElBQU1BLG1CQUFnQyxHQUFHO0FBQUVDLE9BQUssRUFBRSxPQUFUO0FBQWtCQyxRQUFNLEVBQUU7QUFBMUIsQ0FBekM7QUFDQSxJQUFNQyxZQUFZLEdBQUdDLDJEQUFhLENBQWNKLG1CQUFkLENBQWxDOztBQUtBLElBQU1LLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBcUJDLE1BQXJCLEVBQTBEO0FBQzdFLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUssV0FBTDtBQUNFLDZDQUNLRixLQURMO0FBRUVMLGFBQUssRUFBRU0sTUFBTSxDQUFDTjtBQUZoQjs7QUFJRixTQUFLLGdCQUFMO0FBQ0UsNkNBQ0tLLEtBREw7QUFF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QXlDUCxRQUF6QztBQUNEOztBQUVEVixZQUFRLENBQUNVLFFBQUQsQ0FBUjs7QUFFQSxRQUFJRCxZQUFKLEVBQWtCO0FBQ2ZSLGNBQVEsQ0FBQ2lCLGFBQVYsQ0FBd0NDLElBQXhDO0FBQ0Q7QUFDRixHQWxCRDs7QUFvQkEsU0FBTztBQUNMZixZQUFRLEVBQVJBLFFBREs7QUFDS0osWUFBUSxFQUFSQSxRQURMO0FBQ2VNLGFBQVMsRUFBVEEsU0FEZjtBQUMwQkMsZUFBVyxFQUFYQSxXQUQxQjtBQUN1Q0YsaUJBQWEsRUFBYkE7QUFEdkMsR0FBUDtBQUdELENBN0RNOztJQUFNUCxROztBQStERUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jODU5ZWJhMTllZDJkNTk4ZTA1Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XG4gIGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIsIHVzZUNvbnRleHQsIERpc3BhdGNoLFxufSBmcm9tICdyZWFjdCc7XG5cbnR5cGUgVGhlbWVOYW1lID0gJ2RhcmsnIHwgJ2xpZ2h0JztcbmludGVyZmFjZSBUaGVtZVN0cnVjdCB7IHRoZW1lOiBUaGVtZU5hbWUsIGxvY2tlZDogYm9vbGVhbiB9O1xuXG5jb25zdCBpbml0aWFsVGhlbWVDb250ZXh0OiBUaGVtZVN0cnVjdCA9IHsgdGhlbWU6ICdsaWdodCcsIGxvY2tlZDogZmFsc2UgfTtcbmNvbnN0IFRoZW1lQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8VGhlbWVTdHJ1Y3Q+KGluaXRpYWxUaGVtZUNvbnRleHQpO1xuXG50eXBlIFRoZW1lQWN0aW9uID1cbiAgeyB0eXBlOiAnU0VUX1RIRU1FJzsgdGhlbWU6IFRoZW1lTmFtZTsgfVxuICB8IHsgdHlwZTogJ1NFVF9MT0NLX1NUQVRFJzsgbG9ja2VkOiBib29sZWFuOyB9O1xuY29uc3QgdGhlbWVSZWR1Y2VyID0gKHN0YXRlOiBUaGVtZVN0cnVjdCwgYWN0aW9uOiBUaGVtZUFjdGlvbik6IFRoZW1lU3RydWN0ID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1NFVF9USEVNRSc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdGhlbWU6IGFjdGlvbi50aGVtZSxcbiAgICAgIH07XG4gICAgY2FzZSAnU0VUX0xPQ0tfU1RBVEUnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxvY2tlZDogYWN0aW9uLmxvY2tlZCxcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxudHlwZSBUaGVtZURpc3BhdGNoID0gRGlzcGF0Y2g8VGhlbWVBY3Rpb24+O1xuY29uc3QgVGhlbWVEaXNwYXRjaENvbnRleHQgPSBjcmVhdGVDb250ZXh0PFRoZW1lRGlzcGF0Y2ggfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG5cbmludGVyZmFjZSBQcm9wcyB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdEVsZW1lbnQgfCBSZWFjdC5SZWFjdEVsZW1lbnRbXSB9XG5leHBvcnQgY29uc3QgVGhlbWVFbmFibGVkOiBSZWFjdC5TRkM8UHJvcHM+ID0gKHsgY2hpbGRyZW4gfTogUHJvcHMpID0+IHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHRoZW1lUmVkdWNlciwgaW5pdGlhbFRoZW1lQ29udGV4dCk7XG4gIHJldHVybiAoXG4gICAgPFRoZW1lRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtkaXNwYXRjaH0+XG4gICAgICA8VGhlbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvVGhlbWVDb250ZXh0LlByb3ZpZGVyPlxuICAgIDwvVGhlbWVEaXNwYXRjaENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlVGhlbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHN0YXRlID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZUNvbnRleHQoVGhlbWVEaXNwYXRjaENvbnRleHQpO1xuXG4gIC8vIFRoZW1lIFNldHRlclxuICBjb25zdCBzZXRUaGVtZSA9ICh0aGVtZTogVGhlbWVOYW1lKTogdm9pZCA9PiB7XG4gICAgaWYgKCFzdGF0ZS5sb2NrZWQpIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kYXRhc2V0LnRoZW1lID0gdGhlbWUgPT09ICdkYXJrJyA/ICdkYXJrJyA6ICdsaWdodCc7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6ICdTRVRfVEhFTUUnLFxuICAgICAgICB0aGVtZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICAvLyBUaGVtZSBHZXR0ZXJcbiAgY29uc3QgZ2V0VGhlbWUgPSAoKTogVGhlbWVOYW1lID0+IHN0YXRlLnRoZW1lO1xuXG4gIC8vIExvY2sgR2V0dGVyXG4gIGNvbnN0IGlzVGhlbWVMb2NrZWQgPSAoKTogYm9vbGVhbiA9PiBzdGF0ZS5sb2NrZWQ7XG5cbiAgLy8gTG9ja2VyXG4gIGNvbnN0IGxvY2tUaGVtZSA9ICgpOiB2b2lkID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnU0VUX0xPQ0tfU1RBVEUnLFxuICAgICAgbG9ja2VkOiB0cnVlLFxuICAgIH0pO1xuICB9O1xuXG4gIC8vIFVubG9ja2VyXG4gIGNvbnN0IHVubG9ja1RoZW1lID0gKCk6IHZvaWQgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdTRVRfTE9DS19TVEFURScsXG4gICAgICBsb2NrZWQ6IGZhbHNlLFxuICAgIH0pO1xuICB9O1xuXG4gIC8vIFRvZ2dsZXJcbiAgY29uc3QgdG9nZ2xlVGhlbWUgPSAod2l0aEJsdXJyaW5nID0gdHJ1ZSk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IG5ld1RoZW1lID0gZ2V0VGhlbWUoKSA9PT0gJ2RhcmsnID8gJ2xpZ2h0JyA6ICdkYXJrJztcbiAgICBjb25zdCBiZURhcmsgPSBuZXdUaGVtZSA9PT0gJ2RhcmsnO1xuXG4gICAgaWYgKFxuICAgICAgKGJlRGFyayAmJiB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXMpXG4gICAgICB8fCAoIWJlRGFyayAmJiB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBsaWdodCknKS5tYXRjaGVzKVxuICAgICkge1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdtb2RhcmtidWwnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtb2RhcmtidWwnLCBuZXdUaGVtZSk7XG4gICAgfVxuXG4gICAgc2V0VGhlbWUobmV3VGhlbWUpO1xuXG4gICAgaWYgKHdpdGhCbHVycmluZykge1xuICAgICAgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmJsdXIoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRUaGVtZSwgc2V0VGhlbWUsIGxvY2tUaGVtZSwgdW5sb2NrVGhlbWUsIGlzVGhlbWVMb2NrZWQsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VUaGVtZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=