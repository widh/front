webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "../node_modules/string-hash/index.js":
/*!********************************************!*\
  !*** ../node_modules/string-hash/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "../node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!*********************************************************!*\
  !*** ../node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports["default"] = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = typeof process !== 'undefined' && process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  var _proto = StyleSheet.prototype;

  _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
    invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
    invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
    this.flush();
    this._optimizeForSpeed = bool;
    this.inject();
  };

  _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
    return this._optimizeForSpeed;
  };

  _proto.inject = function inject() {
    var _this = this;

    invariant(!this._injected, 'sheet already injected');
    this._injected = true;

    if (this._isBrowser && this._optimizeForSpeed) {
      this._tags[0] = this.makeStyleTag(this._name);
      this._optimizeForSpeed = 'insertRule' in this.getSheet();

      if (!this._optimizeForSpeed) {
        if (!isProd) {
          console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
        }

        this.flush();
        this._injected = true;
      }

      return;
    }

    this._serverSheet = {
      cssRules: [],
      insertRule: function insertRule(rule, index) {
        if (typeof index === 'number') {
          _this._serverSheet.cssRules[index] = {
            cssText: rule
          };
        } else {
          _this._serverSheet.cssRules.push({
            cssText: rule
          });
        }

        return index;
      },
      deleteRule: function deleteRule(index) {
        _this._serverSheet.cssRules[index] = null;
      }
    };
  };

  _proto.getSheetForTag = function getSheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    } // this weirdness brought to you by firefox


    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    }
  };

  _proto.getSheet = function getSheet() {
    return this.getSheetForTag(this._tags[this._tags.length - 1]);
  };

  _proto.insertRule = function insertRule(rule, index) {
    invariant(isString(rule), '`insertRule` accepts only strings');

    if (!this._isBrowser) {
      if (typeof index !== 'number') {
        index = this._serverSheet.cssRules.length;
      }

      this._serverSheet.insertRule(rule, index);

      return this._rulesCount++;
    }

    if (this._optimizeForSpeed) {
      var sheet = this.getSheet();

      if (typeof index !== 'number') {
        index = sheet.cssRules.length;
      } // this weirdness for perf, and chrome's weird bug
      // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        }

        return -1;
      }
    } else {
      var insertionPoint = this._tags[index];

      this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
    }

    return this._rulesCount++;
  };

  _proto.replaceRule = function replaceRule(index, rule) {
    if (this._optimizeForSpeed || !this._isBrowser) {
      var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

      if (!rule.trim()) {
        rule = this._deletedRulePlaceholder;
      }

      if (!sheet.cssRules[index]) {
        // @TBD Should we throw an error?
        return index;
      }

      sheet.deleteRule(index);

      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        } // In order to preserve the indices we insert a deleteRulePlaceholder


        sheet.insertRule(this._deletedRulePlaceholder, index);
      }
    } else {
      var tag = this._tags[index];
      invariant(tag, "old rule at index `" + index + "` not found");
      tag.textContent = rule;
    }

    return index;
  };

  _proto.deleteRule = function deleteRule(index) {
    if (!this._isBrowser) {
      this._serverSheet.deleteRule(index);

      return;
    }

    if (this._optimizeForSpeed) {
      this.replaceRule(index, '');
    } else {
      var tag = this._tags[index];
      invariant(tag, "rule at index `" + index + "` not found");
      tag.parentNode.removeChild(tag);
      this._tags[index] = null;
    }
  };

  _proto.flush = function flush() {
    this._injected = false;
    this._rulesCount = 0;

    if (this._isBrowser) {
      this._tags.forEach(function (tag) {
        return tag && tag.parentNode.removeChild(tag);
      });

      this._tags = [];
    } else {
      // simpler on server
      this._serverSheet.cssRules = [];
    }
  };

  _proto.cssRules = function cssRules() {
    var _this2 = this;

    if (!this._isBrowser) {
      return this._serverSheet.cssRules;
    }

    return this._tags.reduce(function (rules, tag) {
      if (tag) {
        rules = rules.concat(Array.prototype.map.call(_this2.getSheetForTag(tag).cssRules, function (rule) {
          return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
        }));
      } else {
        rules.push(null);
      }

      return rules;
    }, []);
  };

  _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
    if (cssString) {
      invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
    }

    var tag = document.createElement('style');
    if (this._nonce) tag.setAttribute('nonce', this._nonce);
    tag.type = 'text/css';
    tag.setAttribute("data-" + name, '');

    if (cssString) {
      tag.appendChild(document.createTextNode(cssString));
    }

    var head = document.head || document.getElementsByTagName('head')[0];

    if (relativeToTag) {
      head.insertBefore(tag, relativeToTag);
    } else {
      head.appendChild(tag);
    }

    return tag;
  };

  _createClass(StyleSheet, [{
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports["default"] = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: " + message + ".");
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "../node_modules/process/browser.js")))

/***/ }),

/***/ "../node_modules/styled-jsx/dist/style.js":
/*!************************************************!*\
  !*** ../node_modules/styled-jsx/dist/style.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.flush = flush;
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "../node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var styleSheetRegistry = new _stylesheetRegistry["default"]();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.prevProps = {};
    return _this;
  }

  JSXStyle.dynamic = function dynamic(info) {
    return info.map(function (tagInfo) {
      var baseId = tagInfo[0];
      var props = tagInfo[1];
      return styleSheetRegistry.computeId(baseId, props);
    }).join(' ');
  } // probably faster than PureComponent (shallowEqual)
  ;

  var _proto = JSXStyle.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(otherProps) {
    return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
    // These are the computed values for dynamic styles.
    String(this.props.dynamic) !== String(otherProps.dynamic);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    styleSheetRegistry.remove(this.props);
  };

  _proto.render = function render() {
    // This is a workaround to make the side effect async safe in the "render" phase.
    // See https://github.com/zeit/styled-jsx/pull/484
    if (this.shouldComponentUpdate(this.prevProps)) {
      // Updates
      if (this.prevProps.id) {
        styleSheetRegistry.remove(this.prevProps);
      }

      styleSheetRegistry.add(this.props);
      this.prevProps = this.props;
    }

    return null;
  };

  return JSXStyle;
}(_react.Component);

exports["default"] = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "../node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!**************************************************************!*\
  !*** ../node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "../node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "../node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    this._sheet = styleSheet || new _stylesheet["default"]({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  var _proto = StyleSheetRegistry.prototype;

  _proto.add = function add(props) {
    var _this = this;

    if (undefined === this._optimizeForSpeed) {
      this._optimizeForSpeed = Array.isArray(props.children);

      this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    if (this._isBrowser && !this._fromServer) {
      this._fromServer = this.selectFromServer();
      this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
        acc[tagName] = 0;
        return acc;
      }, {});
    }

    var _this$getIdAndRules = this.getIdAndRules(props),
        styleId = _this$getIdAndRules.styleId,
        rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


    if (styleId in this._instancesCounts) {
      this._instancesCounts[styleId] += 1;
      return;
    }

    var indices = rules.map(function (rule) {
      return _this._sheet.insertRule(rule);
    }) // Filter out invalid rules
    .filter(function (index) {
      return index !== -1;
    });
    this._indices[styleId] = indices;
    this._instancesCounts[styleId] = 1;
  };

  _proto.remove = function remove(props) {
    var _this2 = this;

    var _this$getIdAndRules2 = this.getIdAndRules(props),
        styleId = _this$getIdAndRules2.styleId;

    invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
    this._instancesCounts[styleId] -= 1;

    if (this._instancesCounts[styleId] < 1) {
      var tagFromServer = this._fromServer && this._fromServer[styleId];

      if (tagFromServer) {
        tagFromServer.parentNode.removeChild(tagFromServer);
        delete this._fromServer[styleId];
      } else {
        this._indices[styleId].forEach(function (index) {
          return _this2._sheet.deleteRule(index);
        });

        delete this._indices[styleId];
      }

      delete this._instancesCounts[styleId];
    }
  };

  _proto.update = function update(props, nextProps) {
    this.add(nextProps);
    this.remove(props);
  };

  _proto.flush = function flush() {
    this._sheet.flush();

    this._sheet.inject();

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  };

  _proto.cssRules = function cssRules() {
    var _this3 = this;

    var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
      return [styleId, _this3._fromServer[styleId]];
    }) : [];

    var cssRules = this._sheet.cssRules();

    return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
      return [styleId, _this3._indices[styleId].map(function (index) {
        return cssRules[index].cssText;
      }).join(_this3._optimizeForSpeed ? '' : '\n')];
    }) // filter out empty rules
    .filter(function (rule) {
      return Boolean(rule[1]);
    }));
  }
  /**
   * createComputeId
   *
   * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
   */
  ;

  _proto.createComputeId = function createComputeId() {
    var cache = {};
    return function (baseId, props) {
      if (!props) {
        return "jsx-" + baseId;
      }

      var propsToString = String(props);
      var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

      if (!cache[key]) {
        cache[key] = "jsx-" + (0, _stringHash["default"])(baseId + "-" + propsToString);
      }

      return cache[key];
    };
  }
  /**
   * createComputeSelector
   *
   * Creates a function to compute and memoize dynamic selectors.
   */
  ;

  _proto.createComputeSelector = function createComputeSelector(selectoPlaceholderRegexp) {
    if (selectoPlaceholderRegexp === void 0) {
      selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    }

    var cache = {};
    return function (id, css) {
      // Sanitize SSR-ed CSS.
      // Client side code doesn't need to be sanitized since we use
      // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
      if (!this._isBrowser) {
        css = sanitize(css);
      }

      var idcss = id + css;

      if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
      }

      return cache[idcss];
    };
  };

  _proto.getIdAndRules = function getIdAndRules(props) {
    var _this4 = this;

    var css = props.children,
        dynamic = props.dynamic,
        id = props.id;

    if (dynamic) {
      var styleId = this.computeId(id, dynamic);
      return {
        styleId: styleId,
        rules: Array.isArray(css) ? css.map(function (rule) {
          return _this4.computeSelector(styleId, rule);
        }) : [this.computeSelector(styleId, css)]
      };
    }

    return {
      styleId: this.computeId(id),
      rules: Array.isArray(css) ? css : [css]
    };
  }
  /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */
  ;

  _proto.selectFromServer = function selectFromServer() {
    var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
    return elements.reduce(function (acc, element) {
      var id = element.id.slice(2);
      acc[id] = element;
      return acc;
    }, {});
  };

  return StyleSheetRegistry;
}();

exports["default"] = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: " + message + ".");
  }
}

/***/ }),

/***/ "../node_modules/styled-jsx/style.js":
/*!*******************************************!*\
  !*** ../node_modules/styled-jsx/style.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "../node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./assets/vectorImages.tsx":
/*!*********************************!*\
  !*** ./assets/vectorImages.tsx ***!
  \*********************************/
/*! exports provided: WVectorImageDOMConverter, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WVectorImageDOMConverter", function() { return WVectorImageDOMConverter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\wldhg\\Desktop\\homepage\\src\\assets\\vectorImages.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* Type Definition */

;
;
;
/* Converter */

var WVectorImageDOMConverter = function WVectorImageDOMConverter(vi) {
  var viewbox = "0 0 ".concat(vi.width, " ").concat(vi.height);
  var vectors = vi.vectors.map(function (vec, idx) {
    var element;

    switch (vec.type) {
      case 'path':
        element = __jsx("path", {
          d: vec.data,
          key: new Date().getTime(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        });
        break;
    }

    return element;
  });
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: vi.width,
    height: vi.height,
    viewBox: viewbox,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, vectors);
};
/* Vector Images */

var VectorImages = {
  wldh: {
    width: 225,
    height: 225,
    vectors: [{
      type: 'path',
      data: 'm 62.2531 195.965 c -6.77325 0.954407 -13.6828 -3.90832 -15.6099 -10.2697 c -0.508789 -4.79114 0.895611 -9.37938 3.92307 -13.2973 c 3.74917 -4.85194 8.50735 -8.45125 13.201 -12.2038 c -17.4105 -15.8142 -30.1018 -36.2512 -38.5992 -58.0687 c -3.7655 -9.26949 -5.95485 -19.1194 -8.18191 -28.8482 c -1.75697 -8.80379 -2.19757 -17.77 -1.25495 -26.6941 c 0.685751 -6.28266 1.87233 -14.1318 8.18108 -17.1484 c 4.87196 -2.1798 8.3207 2.91237 9.63991 7.62412 c 2.95223 10.5443 6.71136 20.8551 11.1812 30.886 c 6.08284 15.8405 14.0144 31.0339 23.7906 44.9123 c 6.61678 8.98366 14.5027 17.3715 23.3623 23.9841 c 2.67021 -2.39134 5.22746 -5.31415 7.56217 -8.15787 c -10.4808 -9.81097 -19.5873 -20.9042 -28.2728 -32.3016 c -5.53772 -7.42009 -12.007 -14.4747 -15.5175 -23.1224 c -2.43471 -6.57686 -0.227062 -14.696 5.97366 -18.2724 c 5.85519 -3.96976 13.5412 -1.81926 18.5948 2.93448 c 6.47869 6.0943 13.5772 12.7297 20.3293 18.5578 c 7.44698 6.42799 15.3106 11.1639 23.2137 17.0247 c 2.8605 -6.1085 6.60159 -11.8789 7.82022 -18.5973 c 1.51298 -5.00284 3.52585 -10.7546 9.11749 -12.3375 c 4.1609 -0.896957 8.76012 0.192551 11.4665 3.71606 c 6.05576 6.2112 6.49695 15.7372 5.97734 23.8797 c -0.492935 7.72453 -3.31813 15.0936 -5.57481 22.4632 c 12.6801 7.51446 26.6991 12.6855 40.8546 16.743 c 8.34241 2.5563 15.2773 9.84836 16.1428 18.7039 c 1.75478 12.4378 -9.63647 24.7019 -22.2143 23.7122 c -11.4842 -0.232361 -22.3822 -4.71947 -33.0367 -8.64645 c -8.15671 -3.4055 -16.1442 -7.30788 -23.7558 -11.8129 c -2.62269 2.96549 -5.26968 5.90935 -7.90379 8.86467 c 3.86825 4.05698 8.81584 7.76958 9.43112 13.7756 c 1.5126 8.51373 -7.37437 15.3682 -15.5682 14.7828 c -7.34094 -0.524414 -14.247 -2.9054 -20.8736 -5.77805 c -8.30789 5.26269 -17.157 9.9082 -26.7197 12.2967 c -2.21996 0.357452 -4.42409 0.695282 -6.67976 0.695251 Z'
    }]
  }
};
/* harmony default export */ __webpack_exports__["default"] = (VectorImages);

/***/ }),

/***/ "./components/FrontStage/index.tsx":
/*!*****************************************!*\
  !*** ./components/FrontStage/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "../node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_Wrapper */ "./components/_Wrapper/index.tsx");
/* harmony import */ var _assets_features__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/features */ "./assets/features.tsx");
/* harmony import */ var _assets_vectorImages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/vectorImages */ "./assets/vectorImages.tsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./components/FrontStage/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\wldhg\\Desktop\\homepage\\src\\components\\FrontStage\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





/* React Components */

var FrontStage = function FrontStage() {
  var rwldh = __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_assets_vectorImages__WEBPACK_IMPORTED_MODULE_4__["WVectorImageDOMConverter"])(_assets_vectorImages__WEBPACK_IMPORTED_MODULE_4__["default"].wldh), __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "\n          [data-id=\"switch\"] path { fill: #e34; }\n        "));

  return __jsx(_Wrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    main: true,
    requiredFeatures: [_assets_features__WEBPACK_IMPORTED_MODULE_3__["default"].promise, _assets_features__WEBPACK_IMPORTED_MODULE_3__["default"].cssVar, _assets_features__WEBPACK_IMPORTED_MODULE_3__["default"].cssFilter],
    className: _style_scss__WEBPACK_IMPORTED_MODULE_5___default.a.mainbody,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("div", {
    "data-id": "background",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx("article", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("header", {
    "data-id": "brand",
    "aria-label": "Header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("h1", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_5___default.a.hidden,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "World of wldh"), __jsx("button", {
    "data-id": "switch",
    "aria-hidden": "true",
    tabIndex: -1,
    type: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, rwldh), __jsx("h2", {
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Short Messages"), __jsx("span", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_5___default.a['text-roller'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("span", {
    "data-id": "banner-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("span", {
    "data-id": "banner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Wldh "), "is a hangul typing of Jio."), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx("span", {
    "data-transparent": "true",
    "data-removed": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "With wldh, nothing is inconceivable.")), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx("span", {
    "data-id": "banner-message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Be eigenius."))))), __jsx("section", {
    "data-id": "links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("h2", {
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Links"), __jsx("nav", {
    "aria-label": "List of links about myself",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("ul", {
    "data-id": "outer-link-container",
    className: _style_scss__WEBPACK_IMPORTED_MODULE_5___default.a['link-container'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("li", {
    role: "none presentation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("a", {
    "data-lang": "Korean",
    href: "https://blog.wldh.org/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Blog"))), __jsx("li", {
    role: "none presentation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("a", {
    href: "https://github.com/wldh-g/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "GitHub"))), __jsx("li", {
    role: "none presentation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("a", {
    href: "https://www.instagram.com/with_jio/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Instagram"))), __jsx("li", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_5___default.a['link-container'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("span", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_5___default.a.hidden,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Other Links"), __jsx("ul", {
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("li", {
    role: "none presentation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("a", {
    href: "https://www.facebook.com/wldh.aa",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Facebook"))), __jsx("li", {
    role: "none presentation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("a", {
    href: "https://www.linkedin.com/in/wldh/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "LinkedIn"))), __jsx("li", {
    role: "none presentation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("a", {
    href: "https://twitter.com/wldh_aa",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Twitter"))), __jsx("li", {
    role: "none presentation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("a", {
    href: "https://steamcommunity.com/id/2_shakki",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Steam")))))))), __jsx("footer", {
    "data-id": "author",
    "aria-label": "Footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("p", {
    role: "contentinfo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "\xA9 wldh"))), __jsx("noscript", {
    className: "jsx-3089790763",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3089790763",
    __self: this
  }, "#background.jsx-3089790763{display:none;}#switch.jsx-3089790763{-webkit-animation:none !important;animation:none !important;cursor:default;}#brand.jsx-3089790763 #switch.jsx-3089790763{-webkit-transform:none !important;-ms-transform:none !important;transform:none !important;margin-bottom:1vh !important;}#switch.jsx-3089790763:active svg.jsx-3089790763,#switch.jsx-3089790763:focus svg.jsx-3089790763{-webkit-transform:none;-ms-transform:none;transform:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcd2xkaGdcXERlc2t0b3BcXGhvbWVwYWdlXFxzcmNcXGNvbXBvbmVudHNcXEZyb250U3RhZ2VcXGluZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RVcsQUFHNEIsQUFHYSxBQUlBLEFBSVgsYUFWakIsNENBV0EsR0FSaUIsZUFDakIsZUFHK0IsNkJBQy9CIiwiZmlsZSI6IkM6XFxVc2Vyc1xcd2xkaGdcXERlc2t0b3BcXGhvbWVwYWdlXFxzcmNcXGNvbXBvbmVudHNcXEZyb250U3RhZ2VcXGluZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBXcmFwcGVyIGZyb20gJy4uL19XcmFwcGVyJztcclxuaW1wb3J0IEZlYXR1cmVzIGZyb20gJy4uLy4uL2Fzc2V0cy9mZWF0dXJlcyc7XHJcbmltcG9ydCBWZWN0b3JJbWFnZXMsIHsgV1ZlY3RvckltYWdlRE9NQ29udmVydGVyIH0gZnJvbSAnLi4vLi4vYXNzZXRzL3ZlY3RvckltYWdlcyc7XHJcblxyXG5pbXBvcnQgJCBmcm9tICcuL3N0eWxlLnNjc3MnO1xyXG5cclxuLyogUmVhY3QgQ29tcG9uZW50cyAqL1xyXG5jb25zdCBGcm9udFN0YWdlOiBSZWFjdC5TRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgcndsZGggPSAoXHJcbiAgICA8PlxyXG4gICAgICB7V1ZlY3RvckltYWdlRE9NQ29udmVydGVyKFZlY3RvckltYWdlcy53bGRoKX1cclxuICAgICAgPHN0eWxlPlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICBbZGF0YS1pZD1cInN3aXRjaFwiXSBwYXRoIHsgZmlsbDogI2UzNDsgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFdyYXBwZXJcclxuICAgICAgbWFpblxyXG4gICAgICByZXF1aXJlZEZlYXR1cmVzPXtbXHJcbiAgICAgICAgRmVhdHVyZXMucHJvbWlzZSwgRmVhdHVyZXMuY3NzVmFyLCBGZWF0dXJlcy5jc3NGaWx0ZXIsXHJcbiAgICAgIF19XHJcbiAgICAgIGNsYXNzTmFtZT17JC5tYWluYm9keX1cclxuICAgID5cclxuICAgICAgPGRpdiBkYXRhLWlkPVwiYmFja2dyb3VuZFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XHJcbiAgICAgIDxhcnRpY2xlPlxyXG4gICAgICAgIDxoZWFkZXIgZGF0YS1pZD1cImJyYW5kXCIgYXJpYS1sYWJlbD1cIkhlYWRlclwiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT17JC5oaWRkZW59PldvcmxkIG9mIHdsZGg8L2gxPlxyXG4gICAgICAgICAgPGJ1dHRvbiBkYXRhLWlkPVwic3dpdGNoXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgdGFiSW5kZXg9ey0xfSB0eXBlPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICAgIHtyd2xkaH1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGgyIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlNob3J0IE1lc3NhZ2VzPC9oMj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17JFsndGV4dC1yb2xsZXInXX0+XHJcbiAgICAgICAgICAgIDxzcGFuIGRhdGEtaWQ9XCJiYW5uZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gZGF0YS1pZD1cImJhbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxiPldsZGggPC9iPlxyXG4gICAgICAgICAgICAgICAgICBpcyBhIGhhbmd1bCB0eXBpbmcgb2YgSmlvLlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXRyYW5zcGFyZW50PVwidHJ1ZVwiIGRhdGEtcmVtb3ZlZD1cInRydWVcIj5XaXRoIHdsZGgsIG5vdGhpbmcgaXMgaW5jb25jZWl2YWJsZS48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGRhdGEtaWQ9XCJiYW5uZXItbWVzc2FnZVwiPjxiPkJlIGVpZ2VuaXVzLjwvYj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICA8c2VjdGlvbiBkYXRhLWlkPVwibGlua3NcIj5cclxuICAgICAgICAgIDxoMiBhcmlhLWhpZGRlbj1cInRydWVcIj5MaW5rczwvaDI+XHJcbiAgICAgICAgICA8bmF2IGFyaWEtbGFiZWw9XCJMaXN0IG9mIGxpbmtzIGFib3V0IG15c2VsZlwiPlxyXG4gICAgICAgICAgICA8dWwgZGF0YS1pZD1cIm91dGVyLWxpbmstY29udGFpbmVyXCIgY2xhc3NOYW1lPXskWydsaW5rLWNvbnRhaW5lciddfT5cclxuICAgICAgICAgICAgICA8bGkgcm9sZT1cIm5vbmUgcHJlc2VudGF0aW9uXCI+PGEgZGF0YS1sYW5nPVwiS29yZWFuXCIgaHJlZj1cImh0dHBzOi8vYmxvZy53bGRoLm9yZy9cIj48c3Bhbj5CbG9nPC9zcGFuPjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgIHsvKiA8bGkgcm9sZT1cIm5vbmUgcHJlc2VudGF0aW9uXCI+PGEgaHJlZj1cImh0dHBzOi8vd3d3LndsZGgub3JnL3Byb2plY3RzL1wiPjxzcGFuPlByb2plY3RzPC9zcGFuPjwvYT48L2xpPiAqL31cclxuICAgICAgICAgICAgICA8bGkgcm9sZT1cIm5vbmUgcHJlc2VudGF0aW9uXCI+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS93bGRoLWcvXCI+PHNwYW4+R2l0SHViPC9zcGFuPjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgIHsvKiA8bGkgcm9sZT1cIm5vbmUgcHJlc2VudGF0aW9uXCI+PGEgaHJlZj1cImh0dHBzOi8vd3d3LndsZGgub3JnL3Jlc3VtZS9cIj48c3Bhbj5SZXN1bWU8L3NwYW4+PC9hPjwvbGk+ICovfVxyXG4gICAgICAgICAgICAgIDxsaSByb2xlPVwibm9uZSBwcmVzZW50YXRpb25cIj48YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS93aXRoX2ppby9cIj48c3Bhbj5JbnN0YWdyYW08L3NwYW4+PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17JFsnbGluay1jb250YWluZXInXX0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9eyQuaGlkZGVufT5PdGhlciBMaW5rczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDx1bCBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgICAgPGxpIHJvbGU9XCJub25lIHByZXNlbnRhdGlvblwiPjxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vd2xkaC5hYVwiPjxzcGFuPkZhY2Vib29rPC9zcGFuPjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgcm9sZT1cIm5vbmUgcHJlc2VudGF0aW9uXCI+PGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi93bGRoL1wiPjxzcGFuPkxpbmtlZEluPC9zcGFuPjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgcm9sZT1cIm5vbmUgcHJlc2VudGF0aW9uXCI+PGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vd2xkaF9hYVwiPjxzcGFuPlR3aXR0ZXI8L3NwYW4+PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSByb2xlPVwibm9uZSBwcmVzZW50YXRpb25cIj48YSBocmVmPVwiaHR0cHM6Ly9zdGVhbWNvbW11bml0eS5jb20vaWQvMl9zaGFra2lcIj48c3Bhbj5TdGVhbTwvc3Bhbj48L2E+PC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8Zm9vdGVyIGRhdGEtaWQ9XCJhdXRob3JcIiBhcmlhLWxhYmVsPVwiRm9vdGVyXCI+XHJcbiAgICAgICAgICA8cCByb2xlPVwiY29udGVudGluZm9cIj4mY29weTsgd2xkaDwvcD5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICA8bm9zY3JpcHQ+XHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICNiYWNrZ3JvdW5kIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNzd2l0Y2gge1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjYnJhbmQgI3N3aXRjaCB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXZoICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3N3aXRjaDphY3RpdmUgc3ZnLCAjc3dpdGNoOmZvY3VzIHN2ZyB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvbm9zY3JpcHQ+XHJcbiAgICAgIDxzY3JpcHQgc3JjPVwiL3NjcmlwdHMvYnVycmkuanNcIiAvPlxyXG4gICAgPC9XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGcm9udFN0YWdlO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\wldhg\\\\Desktop\\\\homepage\\\\src\\\\components\\\\FrontStage\\\\index.tsx */")), __jsx("script", {
    src: "/scripts/burri.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (FrontStage);

/***/ })

})
//# sourceMappingURL=index.js.9613eb53e5e7243fd870.hot-update.js.map