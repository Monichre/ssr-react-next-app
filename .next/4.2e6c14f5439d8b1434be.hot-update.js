webpackHotUpdate(4,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_header__ = __webpack_require__("./components/header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_MUI_withMUI__ = __webpack_require__("./shared/MUI/withMUI.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Card__ = __webpack_require__("./node_modules/material-ui/Card/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_RaisedButton__ = __webpack_require__("./node_modules/material-ui/RaisedButton/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_RaisedButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_RaisedButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_isomorphic_fetch__ = __webpack_require__("./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_isomorphic_fetch__);

var _jsxFileName = "/Users/Liam/Desktop/ssr-next-app/pages/index.js";


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }








var Index = function Index(_ref) {
  var posts = _ref.posts;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), posts.map(function (x) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Card__["Card"], {
      key: x.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Card__["CardHeader"], {
      title: x.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Card__["CardText"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_RaisedButton___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_next_link___default.a, {
      prefetch: true,
      href: "/post?id=".concat(x.id),
      as: "/blog/".concat(x.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      }
    }, "Click to View Post!")))));
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
          return __WEBPACK_IMPORTED_MODULE_7_isomorphic_fetch___default()("".concat("https://www.googleapis.com/blogger/v3/blogs/4789269094064278868/posts", "?key=").concat("AIzaSyDdkPjIro5hDVyzd7IFShkoRchS8PbfcGA"));

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
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.2e6c14f5439d8b1434be.hot-update.js.map