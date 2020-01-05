webpackHotUpdate("static\\development\\pages\\wait.js",{

/***/ "./components/_Wrapper/index.tsx":
/*!***************************************!*\
  !*** ./components/_Wrapper/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "../node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "../node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! i18next */ "../node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var _assets_features__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/features */ "./assets/features.tsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.scss */ "./components/_Wrapper/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\wldhg\\Desktop\\homepage\\src\\components\\_Wrapper\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







/* Constants */

var browserDisclaimerHTML = Object(_assets_features__WEBPACK_IMPORTED_MODULE_6__["WFeatureDisclaimer"])('This web browser does not support web standard, so this page will not be rendered as intended or work properly on this browser.', '이 웹 브라우저는 웹 표준을 지원하지 않기 때문에, 이 페이지는 이 브라우저에서 온전하게 보이거나 작동하지 않습니다.', 'Learn More', '자세히 알아보기', 'https://browser-update.org/update.html');
/* Internationalization */

i18next__WEBPACK_IMPORTED_MODULE_5__["default"].use(react_i18next__WEBPACK_IMPORTED_MODULE_2__["initReactI18next"]).init({
  resources: {
    en: {
      main: {}
    },
    ko: {
      main: {}
    }
  },
  lng: 'en',
  fallbackLng: 'en',
  defaultNS: 'main',
  ns: 'main',
  interpolation: {
    escapeValue: false
  }
});
/* React Component */

;

var Wrapper = function Wrapper(props) {
  var children = props.children,
      title = props.title,
      main = props.main,
      description = props.description,
      image = props.image,
      favicoff = props.favicoff,
      className = props.className,
      requiredFeatures = props.requiredFeatures;

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])(),
      pathname = _useRouter.pathname;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
      _useTranslation2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useTranslation, 2),
      t = _useTranslation2[0],
      i18n = _useTranslation2[1]; // Translation!


  i18n.addResources('en', 'main', {
    realTitleMain: 'Annyeong! wldh.',
    realTitleSub: '{{0}} ～ wldh.',
    metaTitle: 'Annyeong! - wldh',
    metaDescription: 'Jio Gim\'s personal homepage.'
  });
  i18n.addResources('ko', 'main', {
    realTitleMain: '반가워요! ᅍ',
    realTitleSub: '{{0}} ᅍ',
    metaTitle: '반가워요! - ㅈㅇ',
    metaDescription: '김지오의 개인 홈페이지입니다.'
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    i18n.changeLanguage(document.documentElement.lang);
  }, [i18n]); // Determine meta information

  var realTitle = main ? t('realTitleMain') : t('realTitleSub', [title]);
  var metaTitle = main ? t('metaTitle') : title;
  var metaDescription = description || t('metaDescription');
  var metaURL = "https://www.wldh.org".concat(pathname);
  var metaImage = image || '/images/banner-index.png'; // Feature Detection

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    // Initialize features
    var featureList = [function () {
      return !!String.prototype.includes;
    }];
    if (requiredFeatures) featureList = featureList.concat(requiredFeatures); // Check features

    for (var i = 0; i < featureList.length; i += 1) {
      try {
        if (!featureList[i]()) {
          throw new Error("A result of feature test ".concat(i, " was false."));
        } else if (i === featureList.length - 1) {
          /* eslint-disable no-console */
          console.info('This browser supports wldh.');
        }
      } catch (e) {
        /* eslint-disable no-console */
        console.info("This browser does not support wldh. [index=".concat(i, "]"));
        console.error(e);

        if (!document.getElementById('browser-disclaimer')) {
          document.body.innerHTML = "".concat(browserDisclaimerHTML).concat(document.body.innerHTML);
        }
      }
    }
  }, [requiredFeatures]); // Render

  return __jsx("div", {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx("script", {
    dangerouslySetInnerHTML: {
      __html: "\n              if (\n                (!document.cookie.indexOf(\"modarkbul\") > -1 && window.matchMedia(\"(prefers-color-scheme: dark)\").matches)\n                || (document.cookie.indexOf(\"modarkbul=dark\") > -1)\n              ) {\n                document.documentElement.dataset.theme = \"dark\";\n                document.documentElement.style.setProperty(\"background-color\", \"#000000\");\n              } else {\n                document.documentElement.dataset.theme = \"light\";\n                document.documentElement.style.setProperty(\"background-color\", \"#ffffff\");\n              }\n            "
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }), __jsx("script", {
    dangerouslySetInnerHTML: {
      __html: "\n              if (document.domain && document.domain.indexOf('wldh.org') > -1) {\n                document.domain = 'wldh.org';\n              }\n            "
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }), __jsx("script", {
    dangerouslySetInnerHTML: {
      __html: "\n              window.addEventListener('load', function () {\n                var agent = navigator.userAgent.toLowerCase();\n                if (\n                  (navigator.appName === \"Netscape\" && agent.indexOf(\"trident\") !== -1)\n                  || agent.indexOf(\"msie\") !== -1\n                ) {\n                  document.body.innerHTML = '".concat(browserDisclaimerHTML, "' + document.body.innerHTML;\n                }\n              });\n            ")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }), __jsx("meta", {
    name: "theme-color",
    content: "#ffffff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }), __jsx("meta", {
    name: "robots",
    content: "noimageindex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }), __jsx("meta", {
    name: "description",
    content: metaDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }), __jsx("meta", {
    property: "og:title",
    content: metaTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }), __jsx("meta", {
    property: "og:url",
    content: metaURL,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }), __jsx("meta", {
    property: "og:image",
    content: metaImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }), __jsx("meta", {
    property: "og:description",
    content: metaDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }), __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, realTitle), __jsx("link", {
    href: favicoff ? '/favicoff.ico' : '/favicon.ico',
    rel: "shortcut icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Noto+Sans+KR:300,400,500,700&display=swap",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  })), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Wrapper);

/***/ })

})
//# sourceMappingURL=wait.js.d81dcf8160fc86297dcd.hot-update.js.map