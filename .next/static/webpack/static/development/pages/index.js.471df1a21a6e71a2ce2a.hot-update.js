webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Top; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layouts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/page */ "./layouts/page.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _constants_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants/api */ "./constants/api.js");
/* harmony import */ var _util_postsList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/postsList */ "./util/postsList/index.js");

var _jsxFileName = "/Users/yosuke.tsutsumi/Documents/Travel/Projects/FEG/GIT/Projects/next/myPage/pages/index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var Top =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Top, _React$Component);

  _createClass(Top, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                res = axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(_constants_api__WEBPACK_IMPORTED_MODULE_6__["default"].posts);
                return _context.abrupt("return", {
                  posts: res.data
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  function Top(props) {
    var _this;

    _classCallCheck(this, Top);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Top).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getPosts", function () {
      var posts = [];
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(_constants_api__WEBPACK_IMPORTED_MODULE_6__["default"].posts).then(function (res) {
        console.log('res', res);
        posts = res.data.map(function (r) {
          return {
            id: r.id,
            title: r.title.rendered,
            content: r.content.rendered,
            excerpt: r.excerpt.rendered
          };
        });
      }).then(function () {
        _this.setState({
          posts: posts
        });
      }).catch(function (error) {
        return console.log('error:', error);
      });
    });

    _this.state = {
      posts: [{
        id: null,
        title: null,
        content: null,
        excerpt: null
      }]
    };
    return _this;
  }

  _createClass(Top, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_layouts_page__WEBPACK_IMPORTED_MODULE_3__["default"], {
        headTitle: 'my-Page',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-284175591",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
        className: "jsx-284175591",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "Post list"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        className: "jsx-284175591",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "scoped!"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        secondary: true,
        onClick: this.getPosts,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "Click Here"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-284175591",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        className: "jsx-284175591",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "fetch response"), this.state.posts[0].id !== null ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_util_postsList__WEBPACK_IMPORTED_MODULE_7__["PostsList"], {
        posts: this.state.posts,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }) : 'コンテンツがありません')), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "284175591",
        css: "@media (max-width:600px){p.jsx-284175591{font-size:14px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95b3N1a2UudHN1dHN1bWkvRG9jdW1lbnRzL1RyYXZlbC9Qcm9qZWN0cy9GRUcvR0lUL1Byb2plY3RzL25leHQvbXlQYWdlL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBEb0IsQUFJOEIsZUFDakIiLCJmaWxlIjoiL1VzZXJzL3lvc3VrZS50c3V0c3VtaS9Eb2N1bWVudHMvVHJhdmVsL1Byb2plY3RzL0ZFRy9HSVQvUHJvamVjdHMvbmV4dC9teVBhZ2UvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFnZSBmcm9tICcuLi9sYXlvdXRzL3BhZ2UnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IEFQSSBmcm9tICcuLi9jb25zdGFudHMvYXBpJztcbmltcG9ydCB7IFBvc3RzTGlzdCB9IGZyb20gJy4uL3V0aWwvcG9zdHNMaXN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICBjb25zdCByZXMgPSBheGlvcy5nZXQoQVBJLnBvc3RzKTtcbiAgICByZXR1cm4geyBwb3N0czogcmVzLmRhdGEgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBvc3RzOiBbe1xuICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgdGl0bGU6IG51bGwsXG4gICAgICAgIGNvbnRlbnQ6IG51bGwsXG4gICAgICAgIGV4Y2VycHQ6IG51bGwgICAgICAgIFxuICAgICAgfV1cbiAgICB9XG4gIH1cblxuICBnZXRQb3N0cyA9ICgpID0+IHtcbiAgICBsZXQgcG9zdHMgPSBbXTtcbiAgICBheGlvcy5nZXQoQVBJLnBvc3RzKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygncmVzJywgcmVzKTtcbiAgICAgICAgcG9zdHMgPSByZXMuZGF0YS5tYXAociA9PiB7XG4gICAgICAgICAgcmV0dXJuICh7XG4gICAgICAgICAgICBpZDogci5pZCxcbiAgICAgICAgICAgIHRpdGxlOiByLnRpdGxlLnJlbmRlcmVkLFxuICAgICAgICAgICAgY29udGVudDogci5jb250ZW50LnJlbmRlcmVkLFxuICAgICAgICAgICAgZXhjZXJwdDogci5leGNlcnB0LnJlbmRlcmVkXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBwb3N0c1xuICAgICAgfSlcbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZygnZXJyb3I6JywgZXJyb3IpKVxuICB9XG4gIFxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQYWdlIGhlYWRUaXRsZT17J215LVBhZ2UnfT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDE+UG9zdCBsaXN0PC9oMT5cbiAgICAgICAgICA8cD5zY29wZWQhPC9wPlxuICAgICAgICAgIDxCdXR0b24gc2Vjb25kYXJ5IG9uQ2xpY2s9e3RoaXMuZ2V0UG9zdHN9PkNsaWNrIEhlcmU8L0J1dHRvbj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHA+ZmV0Y2ggcmVzcG9uc2U8L3A+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5wb3N0c1swXS5pZCAhPT0gbnVsbCA/IDxQb3N0c0xpc3QgcG9zdHM9e3RoaXMuc3RhdGUucG9zdHN9IC8+IDogJ+OCs+ODs+ODhuODs+ODhOOBjOOBguOCiuOBvuOBm+OCkycgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvUGFnZT5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/yosuke.tsutsumi/Documents/Travel/Projects/FEG/GIT/Projects/next/myPage/pages/index.js */",
        __self: this
      }));
    }
  }]);

  return Top;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
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
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.471df1a21a6e71a2ce2a.hot-update.js.map