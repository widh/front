webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/_Wrapper/index.tsx":
/*!***************************************!*\
  !*** ./components/_Wrapper/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "../node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _misc_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../misc/i18n */ "./misc/i18n.tsx");
/* harmony import */ var _misc_features__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../misc/features */ "./misc/features.tsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./components/_Wrapper/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\wldhg\\Desktop\\homepage\\src\\components\\_Wrapper\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






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

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])(),
      pathname = _useRouter.pathname;

  var _useI18n = Object(_misc_i18n__WEBPACK_IMPORTED_MODULE_3__["useI18n"])('common'),
      t = _useI18n.t; // Determine meta information


  var realTitle = main ? t('realTitleMain') : t('realTitleSub', [title]);
  var metaTitle = main ? t('metaTitle') : title;
  var metaDescription = description || t('metaDescription');
  var metaURL = "https://www.wldh.org".concat(pathname);
  var metaImage = image || '/static/images/banner-index.png'; // Feature Detection

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // Initialize features
    var featureList = [function () {
      return !!String.prototype.includes;
    }, function () {
      return !!(CSS && CSS.supports('color', 'var(--a)'));
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
          document.body.innerHTML = "".concat(Object(_misc_features__WEBPACK_IMPORTED_MODULE_4__["WFeatureDisclaimer"])('This browser does not support web standard, so this page will not be rendered as intended or work properly on this browser.', '이 웹 브라우저는 웹 표준을 지원하지 않기 때문에, 이 페이지는 이 브라우저에서 온전하게 보이거나 작동하지 않습니다.', 'Learn More', '자세히 알아보기', 'https://browser-update.org/update.html')).concat(document.body.innerHTML);
        }
      }
    }
  }, [requiredFeatures]); // Render

  return __jsx("div", {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("script", {
    dangerouslySetInnerHTML: {
      __html: "\n              if (\n                (!document.cookie.indexOf(\"modarkbul\") > -1 && window.matchMedia(\"(prefers-color-scheme: dark)\").matches)\n                || (document.cookie.indexOf(\"modarkbul=dark\") > -1)\n              ) {\n                document.documentElement.dataset.theme = \"dark\";\n                document.documentElement.style.setProperty(\"background-color\", \"#000000\");\n              } else {\n                document.documentElement.dataset.theme = \"light\";\n                document.documentElement.style.setProperty(\"background-color\", \"#ffffff\");\n              }\n            "
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), __jsx("script", {
    dangerouslySetInnerHTML: {
      __html: "\n              if (document.domain && document.domain.indexOf('wldh.org') > -1) {\n                document.domain = 'wldh.org';\n              }\n            "
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), __jsx("meta", {
    name: "theme-color",
    content: "#ffffff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }), __jsx("meta", {
    name: "robots",
    content: "noimageindex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }), __jsx("meta", {
    name: "description",
    content: metaDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }), __jsx("meta", {
    property: "og:title",
    content: metaTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }), __jsx("meta", {
    property: "og:url",
    content: metaURL,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }), __jsx("meta", {
    property: "og:image",
    content: metaImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }), __jsx("meta", {
    property: "og:description",
    content: metaDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }), __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, realTitle), __jsx("link", {
    href: favicoff ? '/favicoff.ico' : '/favicon.ico',
    rel: "shortcut icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Noto+Sans+KR:300,400,500,700&display=swap&subset=korean",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Fira+Mono&display=swap",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  })), children, __jsx("noscript", {
    dangerouslySetInnerHTML: {
      __html: Object(_misc_features__WEBPACK_IMPORTED_MODULE_4__["WFeatureDisclaimer"])('JavaScript is now disabled. Please turn it on for full page rendering.', 'JavaScript가 꺼져 있습니다. 완전한 페이지 표시를 위해 JavaScript를 켜 주세요.')
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }), __jsx("script", {
    dangerouslySetInnerHTML: {
      __html: "\n            window.addEventListener('load', function () {\n              var agent = navigator.userAgent.toLowerCase();\n              if (\n                (navigator.appName === \"Netscape\" && agent.indexOf(\"trident\") !== -1)\n                || agent.indexOf(\"msie\") !== -1\n              ) {\n                document.body.innerHTML = '".concat(Object(_misc_features__WEBPACK_IMPORTED_MODULE_4__["WFeatureDisclaimer"])('Internet Explorer is an old browser, does not support modern web technologies. This page will not be rendered as intended or work properly.', 'Internet Explorer는 현대 웹 기술을 지원하지 않는 낡은 브라우저입니다. 이 페이지는 Internet Explorer에서 온전하게 보이거나 작동하지 않습니다.', 'Learn More', '더 알아보기', 'https://techcommunity.microsoft.com/t5/windows-it-pro-blog/the-perils-of-using-internet-explorer-as-your-default-browser/ba-p/331732', 'http://newslabit.hankyung.com/article/201902192484G'), "' + document.body.innerHTML;\n              }\n            });\n          ")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Wrapper);

/***/ })

})
//# sourceMappingURL=index.js.ba5d68c6760d388ed073.hot-update.js.map