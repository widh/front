webpackHotUpdate("static\\development\\pages\\wait.js",{

/***/ "./pages/wait.tsx":
/*!************************!*\
  !*** ./pages/wait.tsx ***!
  \************************/
/*! exports provided: default, config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var _babel_runtime_corejs2_core_js_number_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/number/parse-int */ "../node_modules/@babel/runtime-corejs2/core-js/number/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_number_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_number_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var atob__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! atob */ "../node_modules/atob/browser-atob.js");
/* harmony import */ var atob__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(atob__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _misc_imageDescriptors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../misc/imageDescriptors */ "./misc/imageDescriptors.tsx");
/* harmony import */ var _components_BackStage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/BackStage */ "./components/BackStage/index.tsx");
/* harmony import */ var _misc_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../misc/i18n */ "./misc/i18n.tsx");

var _jsxFileName = "C:\\Users\\wldhg\\Desktop\\homepage\\src\\pages\\wait.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var Wait = function Wait() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(new Date().getTime()),
      now = _useState[0],
      setNow = _useState[1];

  var msg = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])('');

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])(),
      query = _useRouter.query;

  var _useI18n = Object(_misc_i18n__WEBPACK_IMPORTED_MODULE_7__["useI18n"])('wait'),
      t = _useI18n.t,
      i18n = _useI18n.i18n;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    moment__WEBPACK_IMPORTED_MODULE_3___default.a.locale(document.documentElement.lang);
    setNow(new Date().getTime());
  }, []);
  /* Main Function */

  /* eslint-disable no-empty */

  var getReason = function getReason() {
    var ret = '';

    if (query.reason && query.reason.length > 0) {
      try {
        var reason = JSON.parse(decodeURIComponent(atob__WEBPACK_IMPORTED_MODULE_4___default()(query.reason.toString())));
        ret = "".concat(t('wait:reason'), "<br />&#9;").concat(reason[i18n.language.substring(0, 2)], "<br /><br />");
      } finally {}
    }

    return ret;
  };

  if (query.time && query.time.length > 0) {
    var timeUTC = _babel_runtime_corejs2_core_js_number_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(typeof query.time === 'string' ? query.time : query.time[0], 10);

    if (timeUTC > now) {
      var time = moment__WEBPACK_IMPORTED_MODULE_3___default()(timeUTC);
      msg.current = "".concat(getReason()).concat(t('wait:opentime'), "<br />&#9;<span id=\"open-time\">").concat(time.format('LLLL'), " (").concat(time.fromNow(), ")</span>");
      setTimeout(function () {
        setNow(new Date().getTime());
      }, 1000);
    } else if (query.link && query.link.length > 0) {
      var link = "go.wldh.org/".concat(query.link);
      msg.current = "".concat(t('wait:opened'), "&ensp;<a data-mono=\"slide\" href=\"https://").concat(link, "\">").concat(link, "</a>");
    }
  } else if (query.link && query.link.length > 0) {
    var _link = "go.wldh.org/".concat(query.link);

    msg.current = "".concat(getReason()).concat(t('wait:unknown'), "<br />").concat(t('wait:retry'), "<br />&#9;\u21D2&ensp;<a data-mono=\"slide\" href=\"https://").concat(_link, "\">").concat(_link, "</a>");
  } else {
    msg.current = getReason().trim();
  }
  /* Render */


  return __jsx(_components_BackStage__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: t('wait:title'),
    detailedTitle: t('wait:detail'),
    message: t('wait:message'),
    image: _misc_imageDescriptors__WEBPACK_IMPORTED_MODULE_5__["default"].gEnterprise,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("span", {
    dangerouslySetInnerHTML: {
      __html: msg.current
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Wait);
var config = {
  amp: 'true'
};

/***/ })

})
//# sourceMappingURL=wait.js.ced3f168af4b3c70f9a2.hot-update.js.map