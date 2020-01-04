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
/* harmony import */ var _assets_Features__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/Features */ "./assets/Features.tsx");
var _jsxFileName = "C:\\Users\\wldh.g\\Desktop\\wldh-www\\src\\components\\_Wrapper\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* Constants */

var browserDisclaimerHTML = Object(_assets_Features__WEBPACK_IMPORTED_MODULE_3__["WFeatureDisclaimer"])('This web browser does not support web standard, so this page will not be rendered as intended or work properly on this browser.', '이 웹 브라우저는 웹 표준을 지원하지 않기 때문에, 이 페이지는 이 브라우저에서 온전하게 보이거나 작동하지 않습니다.', 'Learn More', '자세히 알아보기', 'https://browser-update.org/update.html#co');
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
      pathname = _useRouter.pathname; // Determine meta information


  var realTitle = main ? 'Annyeong! The world of wldh.' : "".concat(title, " \uFF5E Wowldh.");
  var metaTitle = main ? 'The world of wldh, Annyeong!' : title;
  var metaDescription = description || 'Jio Gim\'s personal homepage, the world of wldh.';
  var metaURL = "https://www.wldh.org".concat(pathname);
  var metaImage = image || '/images/banner-index.png'; // Initialize features

  var featureList = [function () {
    return !!String.prototype.includes;
  }];
  if (requiredFeatures) featureList = featureList.concat(requiredFeatures); // Check features

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
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
  }, [featureList]); // Render

  return __jsx("div", {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("script", {
    dangerouslySetInnerHTML: {
      __html: "\n              if (\n                (!document.cookie.includes(\"modarkbul\") && window.matchMedia(\"(prefers-color-scheme: dark)\").matches)\n                || (document.cookie.includes(\"modarkbul=dark\"))\n              ) {\n                document.documentElement.style.setProperty(\"background-color\", \"#000000\");\n                document.documentElement.dataset.theme = \"dark\";\n                document.documentElement.style.setProperty(\"color\", \"#ffffff\");\n              } else {\n                document.documentElement.style.setProperty(\"background-color\", \"#ffffff\");\n                document.documentElement.dataset.theme = \"light\";\n                document.documentElement.style.setProperty(\"color\", \"#000000\");\n              }\n            "
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), __jsx("script", {
    dangerouslySetInnerHTML: {
      __html: "\n              if (document.domain && document.domain.indexOf('wldh.org') > -1) {\n                document.domain = 'wldh.org';\n              }\n            "
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), __jsx("script", {
    dangerouslySetInnerHTML: {
      __html: "\n              window.onload = function () {\n                var agent = navigator.userAgent.toLowerCase();\n                if (\n                  (navigator.appName === \"Netscape\" && agent.indexOf(\"trident\") !== -1)\n                  || agent.indexOf(\"msie\") !== -1\n                ) {\n                  document.body.innerHTML = '".concat(browserDisclaimerHTML, "' + document.body.innerHTML;\n                }\n              };\n            ")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }), __jsx("meta", {
    name: "theme-color",
    content: "#ffffff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }), __jsx("meta", {
    name: "robots",
    content: "noimageindex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }), __jsx("meta", {
    name: "description",
    content: metaDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }), __jsx("meta", {
    property: "og:title",
    content: metaTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }), __jsx("meta", {
    property: "og:url",
    content: metaURL,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }), __jsx("meta", {
    property: "og:image",
    content: metaImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }), __jsx("meta", {
    property: "og:description",
    content: metaDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }), __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, realTitle), __jsx("link", {
    href: favicoff ? '/favicoff.ico' : '/favicon.ico',
    rel: "shortcut icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Noto+Sans+KR:300,400,500,700&display=swap",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  })), __jsx("noscript", {
    dangerouslySetInnerHTML: {
      __html: Object(_assets_Features__WEBPACK_IMPORTED_MODULE_3__["WFeatureDisclaimer"])('JavaScript is now disabled. Please turn it on for full page rendering.', 'JavaScript가 꺼져 있습니다. 완전한 페이지 표시를 위해 JavaScript를 켜 주세요.')
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Wrapper);

/***/ })

})
//# sourceMappingURL=index.js.da527b8a23e6e834eb3c.hot-update.js.map