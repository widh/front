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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZ2xvYmFsL3RoZW1lLnRzeCJdLCJuYW1lcyI6WyJpbml0aWFsVGhlbWVDb250ZXh0IiwidGhlbWUiLCJsb2NrZWQiLCJUaGVtZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidGhlbWVSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiVGhlbWVEaXNwYXRjaENvbnRleHQiLCJ1bmRlZmluZWQiLCJUaGVtZUVuYWJsZWQiLCJjaGlsZHJlbiIsInVzZVJlZHVjZXIiLCJkaXNwYXRjaCIsInVzZVRoZW1lIiwidXNlQ29udGV4dCIsInNldFRoZW1lIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJkYXRhc2V0Iiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsImdldFRoZW1lIiwiaXNUaGVtZUxvY2tlZCIsImxvY2tUaGVtZSIsInVubG9ja1RoZW1lIiwidG9nZ2xlVGhlbWUiLCJ3aXRoQmx1cnJpbmciLCJuZXdUaGVtZSIsImJlRGFyayIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInNldEl0ZW0iLCJhY3RpdmVFbGVtZW50IiwiYmx1ciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUsyRDtBQUUzRCxJQUFNQSxtQkFBZ0MsR0FBRztBQUFFQyxPQUFLLEVBQUUsT0FBVDtBQUFrQkMsUUFBTSxFQUFFO0FBQTFCLENBQXpDO0FBQ0EsSUFBTUMsWUFBWSxHQUFHQywyREFBYSxDQUFjSixtQkFBZCxDQUFsQzs7QUFLQSxJQUFNSyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQXFCQyxNQUFyQixFQUEwRDtBQUM3RSxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLLFdBQUw7QUFDRSw2Q0FDS0YsS0FETDtBQUVFTCxhQUFLLEVBQUVNLE1BQU0sQ0FBQ047QUFGaEI7O0FBSUYsU0FBSyxnQkFB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R0MsTUFBTSxJQUFJQyxNQUFNLENBQUNDLFVBQVAsQ0FBa0IsOEJBQWxCLEVBQWtEQyxPQUE3RCxJQUNJLENBQUNILE1BQUQsSUFBV0MsTUFBTSxDQUFDQyxVQUFQLENBQWtCLCtCQUFsQixFQUFtREMsT0FGcEUsRUFHRTtBQUNBRixZQUFNLENBQUNHLFlBQVAsQ0FBb0JDLFVBQXBCLENBQStCLFdBQS9CO0FBQ0QsS0FMRCxNQUtPO0FBQ0xKLFlBQU0sQ0FBQ0csWUFBUCxDQUFvQkUsT0FBcEIsQ0FBNEIsV0FBNUIsRUFBeUNQLFFBQXpDO0FBQ0Q7O0FBRURaLFlBQVEsQ0FBQ1ksUUFBRCxDQUFSOztBQUVBLFFBQUlELFlBQUosRUFBa0I7QUFDZlYsY0FBUSxDQUFDbUIsYUFBVixDQUF3Q0MsSUFBeEM7QUFDRDtBQUNGLEdBbEJEOztBQW9CQSxTQUFPO0FBQ0xmLFlBQVEsRUFBUkEsUUFESztBQUNLTixZQUFRLEVBQVJBLFFBREw7QUFDZVEsYUFBUyxFQUFUQSxTQURmO0FBQzBCQyxlQUFXLEVBQVhBLFdBRDFCO0FBQ3VDRixpQkFBYSxFQUFiQSxhQUR2QztBQUNzREcsZUFBVyxFQUFYQTtBQUR0RCxHQUFQO0FBR0QsQ0FuRU07O0lBQU1aLFE7O0FBcUVFQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wZjIyMmZiNTdlOTg3YjBkMGIyYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XG4gIGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIsIHVzZUNvbnRleHQsIERpc3BhdGNoLFxufSBmcm9tICdyZWFjdCc7XG5cbnR5cGUgVGhlbWVOYW1lID0gJ2RhcmsnIHwgJ2xpZ2h0JztcbmludGVyZmFjZSBUaGVtZVN0cnVjdCB7IHRoZW1lOiBUaGVtZU5hbWUsIGxvY2tlZDogYm9vbGVhbiB9O1xuXG5jb25zdCBpbml0aWFsVGhlbWVDb250ZXh0OiBUaGVtZVN0cnVjdCA9IHsgdGhlbWU6ICdsaWdodCcsIGxvY2tlZDogZmFsc2UgfTtcbmNvbnN0IFRoZW1lQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8VGhlbWVTdHJ1Y3Q+KGluaXRpYWxUaGVtZUNvbnRleHQpO1xuXG50eXBlIFRoZW1lQWN0aW9uID1cbiAgeyB0eXBlOiAnU0VUX1RIRU1FJzsgdGhlbWU6IFRoZW1lTmFtZTsgfVxuICB8IHsgdHlwZTogJ1NFVF9MT0NLX1NUQVRFJzsgbG9ja2VkOiBib29sZWFuOyB9O1xuY29uc3QgdGhlbWVSZWR1Y2VyID0gKHN0YXRlOiBUaGVtZVN0cnVjdCwgYWN0aW9uOiBUaGVtZUFjdGlvbik6IFRoZW1lU3RydWN0ID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1NFVF9USEVNRSc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdGhlbWU6IGFjdGlvbi50aGVtZSxcbiAgICAgIH07XG4gICAgY2FzZSAnU0VUX0xPQ0tfU1RBVEUnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxvY2tlZDogYWN0aW9uLmxvY2tlZCxcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxudHlwZSBUaGVtZURpc3BhdGNoID0gRGlzcGF0Y2g8VGhlbWVBY3Rpb24+O1xuY29uc3QgVGhlbWVEaXNwYXRjaENvbnRleHQgPSBjcmVhdGVDb250ZXh0PFRoZW1lRGlzcGF0Y2ggfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG5cbmludGVyZmFjZSBQcm9wcyB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdEVsZW1lbnQgfCBSZWFjdC5SZWFjdEVsZW1lbnRbXSB9XG5leHBvcnQgY29uc3QgVGhlbWVFbmFibGVkOiBSZWFjdC5TRkM8UHJvcHM+ID0gKHsgY2hpbGRyZW4gfTogUHJvcHMpID0+IHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHRoZW1lUmVkdWNlciwgaW5pdGlhbFRoZW1lQ29udGV4dCk7XG4gIHJldHVybiAoXG4gICAgPFRoZW1lRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtkaXNwYXRjaH0+XG4gICAgICA8VGhlbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvVGhlbWVDb250ZXh0LlByb3ZpZGVyPlxuICAgIDwvVGhlbWVEaXNwYXRjaENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlVGhlbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHN0YXRlID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZUNvbnRleHQoVGhlbWVEaXNwYXRjaENvbnRleHQpO1xuXG4gIC8vIFRoZW1lIFNldHRlclxuICBjb25zdCBzZXRUaGVtZSA9ICh0aGVtZTogVGhlbWVOYW1lKTogdm9pZCA9PiB7XG4gICAgaWYgKCFzdGF0ZS5sb2NrZWQpIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kYXRhc2V0LnRoZW1lID0gdGhlbWUgPT09ICdkYXJrJyA/ICdkYXJrJyA6ICdsaWdodCc7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJywgdGhlbWUgPT09ICdkYXJrJyA/ICcjMDAwMDAwJyA6ICcjZmZmZmZmJyxcbiAgICAgICk7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAgICdjb2xvcicsIHRoZW1lID09PSAnZGFyaycgPyAnI2ZmZmZmZicgOiAnIzAwMDAwMCcsXG4gICAgICApO1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiAnU0VUX1RIRU1FJyxcbiAgICAgICAgdGhlbWUsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgLy8gVGhlbWUgR2V0dGVyXG4gIGNvbnN0IGdldFRoZW1lID0gKCk6IFRoZW1lTmFtZSA9PiBzdGF0ZS50aGVtZTtcblxuICAvLyBMb2NrIEdldHRlclxuICBjb25zdCBpc1RoZW1lTG9ja2VkID0gKCk6IGJvb2xlYW4gPT4gc3RhdGUubG9ja2VkO1xuXG4gIC8vIExvY2tlclxuICBjb25zdCBsb2NrVGhlbWUgPSAoKTogdm9pZCA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ1NFVF9MT0NLX1NUQVRFJyxcbiAgICAgIGxvY2tlZDogdHJ1ZSxcbiAgICB9KTtcbiAgfTtcblxuICAvLyBVbmxvY2tlclxuICBjb25zdCB1bmxvY2tUaGVtZSA9ICgpOiB2b2lkID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnU0VUX0xPQ0tfU1RBVEUnLFxuICAgICAgbG9ja2VkOiBmYWxzZSxcbiAgICB9KTtcbiAgfTtcblxuICAvLyBUb2dnbGVyXG4gIGNvbnN0IHRvZ2dsZVRoZW1lID0gKHdpdGhCbHVycmluZyA9IHRydWUpOiB2b2lkID0+IHtcbiAgICBjb25zdCBuZXdUaGVtZSA9IGdldFRoZW1lKCkgPT09ICdkYXJrJyA/ICdsaWdodCcgOiAnZGFyayc7XG4gICAgY29uc3QgYmVEYXJrID0gbmV3VGhlbWUgPT09ICdkYXJrJztcblxuICAgIGlmIChcbiAgICAgIChiZURhcmsgJiYgd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzKVxuICAgICAgfHwgKCFiZURhcmsgJiYgd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogbGlnaHQpJykubWF0Y2hlcylcbiAgICApIHtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbW9kYXJrYnVsJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbW9kYXJrYnVsJywgbmV3VGhlbWUpO1xuICAgIH1cblxuICAgIHNldFRoZW1lKG5ld1RoZW1lKTtcblxuICAgIGlmICh3aXRoQmx1cnJpbmcpIHtcbiAgICAgIChkb2N1bWVudC5hY3RpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5ibHVyKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0VGhlbWUsIHNldFRoZW1lLCBsb2NrVGhlbWUsIHVubG9ja1RoZW1lLCBpc1RoZW1lTG9ja2VkLCB0b2dnbGVUaGVtZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVRoZW1lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==