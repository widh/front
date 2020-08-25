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
      document.documentElement.style.setProperty('background-color', theme === 'dark' ? '#000000' : '#ffffff');
      document.documentElement.style.setProperty('color', theme === 'dark' ? '#ffffff' : '#000000');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZ2xvYmFsL3RoZW1lLnRzeCJdLCJuYW1lcyI6WyJpbml0aWFsVGhlbWVDb250ZXh0IiwidGhlbWUiLCJsb2NrZWQiLCJUaGVtZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidGhlbWVSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiVGhlbWVEaXNwYXRjaENvbnRleHQiLCJ1bmRlZmluZWQiLCJUaGVtZUVuYWJsZWQiLCJjaGlsZHJlbiIsInVzZVJlZHVjZXIiLCJkaXNwYXRjaCIsInVzZVRoZW1lIiwidXNlQ29udGV4dCIsInNldFRoZW1lIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJkYXRhc2V0Iiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsImdldFRoZW1lIiwiaXNUaGVtZUxvY2tlZCIsImxvY2tUaGVtZSIsInVubG9ja1RoZW1lIiwidG9nZ2xlVGhlbWUiLCJ3aXRoQmx1cnJpbmciLCJuZXdUaGVtZSIsImJlRGFyayIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInNldEl0ZW0iLCJhY3RpdmVFbGVtZW50IiwiYmx1ciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUsyRDtBQUUzRCxJQUFNQSxtQkFBZ0MsR0FBRztBQUFFQyxPQUFLLEVBQUUsT0FBVDtBQUFrQkMsUUFBTSxFQUFFO0FBQTFCLENBQXpDO0FBQ0EsSUFBTUMsWUFBWSxHQUFHQywyREFBYSxDQUFjSixtQkFBZCxDQUFsQzs7QUFLQSxJQUFNSyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQXFCQyxNQUFyQixFQUEwRDtBQUM3RSxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLLFdBQUw7QUFDRSw2Q0FDS0YsS0FETDtBQUVFTCxhQUFLLEVBQUVNLE1BQU0sQ0FBQ047QUFGaEI7O0FBSUYsU0FBSyxnQkFB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R0MsTUFBTSxJQUFJQyxNQUFNLENBQUNDLFVBQVAsQ0FBa0IsOEJBQWxCLEVBQWtEQyxPQUE3RCxJQUNJLENBQUNILE1BQUQsSUFBV0MsTUFBTSxDQUFDQyxVQUFQLENBQWtCLCtCQUFsQixFQUFtREMsT0FGcEUsRUFHRTtBQUNBRixZQUFNLENBQUNHLFlBQVAsQ0FBb0JDLFVBQXBCLENBQStCLFdBQS9CO0FBQ0QsS0FMRCxNQUtPO0FBQ0xKLFlBQU0sQ0FBQ0csWUFBUCxDQUFvQkUsT0FBcEIsQ0FBNEIsV0FBNUIsRUFBeUNQLFFBQXpDO0FBQ0Q7O0FBRURaLFlBQVEsQ0FBQ1ksUUFBRCxDQUFSOztBQUVBLFFBQUlELFlBQUosRUFBa0I7QUFDZlYsY0FBUSxDQUFDbUIsYUFBVixDQUF3Q0MsSUFBeEM7QUFDRDtBQUNGLEdBbEJEOztBQW9CQSxTQUFPO0FBQ0xmLFlBQVEsRUFBUkEsUUFESztBQUNLTixZQUFRLEVBQVJBLFFBREw7QUFDZVEsYUFBUyxFQUFUQSxTQURmO0FBQzBCQyxlQUFXLEVBQVhBLFdBRDFCO0FBQ3VDRixpQkFBYSxFQUFiQSxhQUR2QztBQUNzREcsZUFBVyxFQUFYQTtBQUR0RCxHQUFQO0FBR0QsQ0FuRU07O0lBQU1aLFE7O0FBcUVFQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjBmMjIyZmI1N2U5ODdiMGQwYjJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtcbiAgY3JlYXRlQ29udGV4dCwgdXNlUmVkdWNlciwgdXNlQ29udGV4dCwgRGlzcGF0Y2gsXG59IGZyb20gJ3JlYWN0JztcblxudHlwZSBUaGVtZU5hbWUgPSAnZGFyaycgfCAnbGlnaHQnO1xuaW50ZXJmYWNlIFRoZW1lU3RydWN0IHsgdGhlbWU6IFRoZW1lTmFtZSwgbG9ja2VkOiBib29sZWFuIH07XG5cbmNvbnN0IGluaXRpYWxUaGVtZUNvbnRleHQ6IFRoZW1lU3RydWN0ID0geyB0aGVtZTogJ2xpZ2h0JywgbG9ja2VkOiBmYWxzZSB9O1xuY29uc3QgVGhlbWVDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxUaGVtZVN0cnVjdD4oaW5pdGlhbFRoZW1lQ29udGV4dCk7XG5cbnR5cGUgVGhlbWVBY3Rpb24gPVxuICB7IHR5cGU6ICdTRVRfVEhFTUUnOyB0aGVtZTogVGhlbWVOYW1lOyB9XG4gIHwgeyB0eXBlOiAnU0VUX0xPQ0tfU1RBVEUnOyBsb2NrZWQ6IGJvb2xlYW47IH07XG5jb25zdCB0aGVtZVJlZHVjZXIgPSAoc3RhdGU6IFRoZW1lU3RydWN0LCBhY3Rpb246IFRoZW1lQWN0aW9uKTogVGhlbWVTdHJ1Y3QgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnU0VUX1RIRU1FJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB0aGVtZTogYWN0aW9uLnRoZW1lLFxuICAgICAgfTtcbiAgICBjYXNlICdTRVRfTE9DS19TVEFURSc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbG9ja2VkOiBhY3Rpb24ubG9ja2VkLFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG50eXBlIFRoZW1lRGlzcGF0Y2ggPSBEaXNwYXRjaDxUaGVtZUFjdGlvbj47XG5jb25zdCBUaGVtZURpc3BhdGNoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8VGhlbWVEaXNwYXRjaCB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcblxuaW50ZXJmYWNlIFByb3BzIHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0RWxlbWVudCB8IFJlYWN0LlJlYWN0RWxlbWVudFtdIH1cbmV4cG9ydCBjb25zdCBUaGVtZUVuYWJsZWQ6IFJlYWN0LlNGQzxQcm9wcz4gPSAoeyBjaGlsZHJlbiB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIodGhlbWVSZWR1Y2VyLCBpbml0aWFsVGhlbWVDb250ZXh0KTtcbiAgcmV0dXJuIChcbiAgICA8VGhlbWVEaXNwYXRjaENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2Rpc3BhdGNofT5cbiAgICAgIDxUaGVtZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9UaGVtZUNvbnRleHQuUHJvdmlkZXI+XG4gICAgPC9UaGVtZURpc3BhdGNoQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VUaGVtZSA9ICgpID0+IHtcbiAgY29uc3Qgc3RhdGUgPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlQ29udGV4dChUaGVtZURpc3BhdGNoQ29udGV4dCk7XG5cbiAgLy8gVGhlbWUgU2V0dGVyXG4gIGNvbnN0IHNldFRoZW1lID0gKHRoZW1lOiBUaGVtZU5hbWUpOiB2b2lkID0+IHtcbiAgICBpZiAoIXN0YXRlLmxvY2tlZCkge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRhdGFzZXQudGhlbWUgPSB0aGVtZSA9PT0gJ2RhcmsnID8gJ2RhcmsnIDogJ2xpZ2h0JztcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgJ2JhY2tncm91bmQtY29sb3InLCB0aGVtZSA9PT0gJ2RhcmsnID8gJyMwMDAwMDAnIDogJyNmZmZmZmYnLFxuICAgICAgKTtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgJ2NvbG9yJywgdGhlbWUgPT09ICdkYXJrJyA/ICcjZmZmZmZmJyA6ICcjMDAwMDAwJyxcbiAgICAgICk7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6ICdTRVRfVEhFTUUnLFxuICAgICAgICB0aGVtZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICAvLyBUaGVtZSBHZXR0ZXJcbiAgY29uc3QgZ2V0VGhlbWUgPSAoKTogVGhlbWVOYW1lID0+IHN0YXRlLnRoZW1lO1xuXG4gIC8vIExvY2sgR2V0dGVyXG4gIGNvbnN0IGlzVGhlbWVMb2NrZWQgPSAoKTogYm9vbGVhbiA9PiBzdGF0ZS5sb2NrZWQ7XG5cbiAgLy8gTG9ja2VyXG4gIGNvbnN0IGxvY2tUaGVtZSA9ICgpOiB2b2lkID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnU0VUX0xPQ0tfU1RBVEUnLFxuICAgICAgbG9ja2VkOiB0cnVlLFxuICAgIH0pO1xuICB9O1xuXG4gIC8vIFVubG9ja2VyXG4gIGNvbnN0IHVubG9ja1RoZW1lID0gKCk6IHZvaWQgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdTRVRfTE9DS19TVEFURScsXG4gICAgICBsb2NrZWQ6IGZhbHNlLFxuICAgIH0pO1xuICB9O1xuXG4gIC8vIFRvZ2dsZXJcbiAgY29uc3QgdG9nZ2xlVGhlbWUgPSAod2l0aEJsdXJyaW5nID0gdHJ1ZSk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IG5ld1RoZW1lID0gZ2V0VGhlbWUoKSA9PT0gJ2RhcmsnID8gJ2xpZ2h0JyA6ICdkYXJrJztcbiAgICBjb25zdCBiZURhcmsgPSBuZXdUaGVtZSA9PT0gJ2RhcmsnO1xuXG4gICAgaWYgKFxuICAgICAgKGJlRGFyayAmJiB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXMpXG4gICAgICB8fCAoIWJlRGFyayAmJiB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBsaWdodCknKS5tYXRjaGVzKVxuICAgICkge1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdtb2RhcmtidWwnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtb2RhcmtidWwnLCBuZXdUaGVtZSk7XG4gICAgfVxuXG4gICAgc2V0VGhlbWUobmV3VGhlbWUpO1xuXG4gICAgaWYgKHdpdGhCbHVycmluZykge1xuICAgICAgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmJsdXIoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRUaGVtZSwgc2V0VGhlbWUsIGxvY2tUaGVtZSwgdW5sb2NrVGhlbWUsIGlzVGhlbWVMb2NrZWQsIHRvZ2dsZVRoZW1lLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlVGhlbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9