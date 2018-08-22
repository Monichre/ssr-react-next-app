module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_AppBar__ = __webpack_require__("material-ui/AppBar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_AppBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_AppBar__);
var _jsxFileName = "/Users/Liam/Desktop/ssr-next-app/components/header.js";



var Header = function Header(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Next.js Blogging Appliction' : _ref$title;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui_AppBar___default.a, {
    title: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_header__ = __webpack_require__("./components/header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_MUI_withMUI__ = __webpack_require__("./shared/MUI/withMUI.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Card__ = __webpack_require__("material-ui/Card");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_RaisedButton__ = __webpack_require__("material-ui/RaisedButton");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_RaisedButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_RaisedButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_fetch__ = __webpack_require__("isomorphic-fetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_isomorphic_fetch__);

var _jsxFileName = "/Users/Liam/Desktop/ssr-next-app/pages/index.js";


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }







var Index = function Index(_ref) {
  var posts = _ref.posts;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), posts.map(function (x) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Card__["Card"], {
      key: x.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Card__["CardHeader"], {
      title: x.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Card__["CardText"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_RaisedButton___default.a, {
      label: "Click to view post!",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    })));
  }));
};

Index.getInitialProps =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
  var response, data;
  return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return __WEBPACK_IMPORTED_MODULE_6_isomorphic_fetch___default()("".concat("https://www.googleapis.com/blogger/v3/blogs/4789269094064278868/posts", "?key=").concat("AIzaSyDdkPjIro5hDVyzd7IFShkoRchS8PbfcGA"));

        case 2:
          response = _context.sent;
          _context.next = 5;
          return response.json();

        case 5:
          data = _context.sent;
          return _context.abrupt("return", {
            posts: data.items
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_3__shared_MUI_withMUI__["a" /* default */])(Index));

/***/ }),

/***/ "./shared/MUI/theme.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PRIMARY_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return PRIMARY_COLOR_TWO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return PRIMARY_COLOR_THREE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACCENT_COLOR_ONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ACCENT_COLOR_TWO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ACCENT_COLOR_THREE; });
var PRIMARY_COLOR = '#569cb7';
var PRIMARY_COLOR_TWO = '#88cde9';
var PRIMARY_COLOR_THREE = '#1e6e87';
var ACCENT_COLOR_ONE = '#556cb7';
var ACCENT_COLOR_TWO = '#889aea';
var ACCENT_COLOR_THREE = '#204287';

/***/ }),

/***/ "./shared/MUI/withMUI.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles_MuiThemeProvider__ = __webpack_require__("material-ui/styles/MuiThemeProvider");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles_MuiThemeProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles_MuiThemeProvider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles_getMuiTheme__ = __webpack_require__("material-ui/styles/getMuiTheme");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles_getMuiTheme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles_getMuiTheme__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_tap_event_plugin__ = __webpack_require__("react-tap-event-plugin");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_tap_event_plugin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_tap_event_plugin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__theme__ = __webpack_require__("./shared/MUI/theme.js");

var _jsxFileName = "/Users/Liam/Desktop/ssr-next-app/shared/MUI/withMUI.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








try {
  __WEBPACK_IMPORTED_MODULE_4_react_tap_event_plugin___default()();
} catch (e) {}

var withMaterialUI = function withMaterialUI(ComposedComponent) {
  var HOC =
  /*#__PURE__*/
  function (_Component) {
    _inherits(HOC, _Component);

    function HOC() {
      _classCallCheck(this, HOC);

      return _possibleConstructorReturn(this, (HOC.__proto__ || Object.getPrototypeOf(HOC)).apply(this, arguments));
    }

    _createClass(HOC, [{
      key: "render",
      value: function render() {
        var userAgent = this.props.userAgent;
        var Lato = 'lato, sans-serif';
        var muiTheme = __WEBPACK_IMPORTED_MODULE_3_material_ui_styles_getMuiTheme___default()({
          fontFamily: Lato,
          palette: {
            primary1Color: __WEBPACK_IMPORTED_MODULE_6__theme__["d" /* PRIMARY_COLOR */],
            primary2Color: __WEBPACK_IMPORTED_MODULE_6__theme__["f" /* PRIMARY_COLOR_TWO */],
            primary3Color: __WEBPACK_IMPORTED_MODULE_6__theme__["e" /* PRIMARY_COLOR_THREE */],
            accent1Color: __WEBPACK_IMPORTED_MODULE_6__theme__["a" /* ACCENT_COLOR_ONE */],
            accent2Color: __WEBPACK_IMPORTED_MODULE_6__theme__["c" /* ACCENT_COLOR_TWO */],
            accent3Color: __WEBPACK_IMPORTED_MODULE_6__theme__["b" /* ACCENT_COLOR_THREE */]
          },
          appBar: {
            height: 50
          }
        }, {
          userAgent: userAgent
        });
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_head___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        }, "SSR NEXT.JS BLOGGER APP"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
          name: "viewport",
          content: "initial-scale=1.0, width=device-width",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles_MuiThemeProvider___default.a, {
          muiTheme: muiTheme,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ComposedComponent, _extends({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          }
        }))));
      }
    }], [{
      key: "getInitialProps",
      value: function () {
        var _getInitialProps = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
          var req, userAgent, subProps;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  req = ctx.req;
                  userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
                  _context.next = 4;
                  return ComposedComponent.getInitialProps(ctx);

                case 4:
                  subProps = _context.sent;
                  return _context.abrupt("return", _objectSpread({}, subProps, {
                    userAgent: userAgent
                  }));

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function getInitialProps(_x) {
          return _getInitialProps.apply(this, arguments);
        };
      }()
    }]);

    return HOC;
  }(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

  return HOC;
};

/* harmony default export */ __webpack_exports__["a"] = (withMaterialUI);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "isomorphic-fetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "material-ui/AppBar":
/***/ (function(module, exports) {

module.exports = require("material-ui/AppBar");

/***/ }),

/***/ "material-ui/Card":
/***/ (function(module, exports) {

module.exports = require("material-ui/Card");

/***/ }),

/***/ "material-ui/RaisedButton":
/***/ (function(module, exports) {

module.exports = require("material-ui/RaisedButton");

/***/ }),

/***/ "material-ui/styles/MuiThemeProvider":
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ }),

/***/ "material-ui/styles/getMuiTheme":
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/getMuiTheme");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-tap-event-plugin":
/***/ (function(module, exports) {

module.exports = require("react-tap-event-plugin");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map