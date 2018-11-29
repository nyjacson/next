webpackHotUpdate("static/development/pages/post.js",{

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Post; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/page */ "./layouts/page.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _constants_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/api */ "./constants/api.js");
/* harmony import */ var _util_postsList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/postsList */ "./util/postsList/index.js");
var _jsxFileName = "/Users/yosuke.tsutsumi/Documents/Travel/Projects/FEG/GIT/Projects/next/myPage/pages/post.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var Post =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Post, _React$Component);

  function Post(props) {
    var _this;

    _classCallCheck(this, Post);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Post).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getPost", function (id) {
      var post = {};
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_constants_api__WEBPACK_IMPORTED_MODULE_5__["default"].posts + id).then(function (res) {
        console.log('res', res);
        return post = {
          id: res.data.id,
          title: res.data.title.rendered,
          content: res.data.content.rendered,
          excerpt: res.data.excerpt.rendered
        };
      }).then(function () {
        _this.setState({
          post: post
        });
      }).catch(function (error) {
        return console.log('error:', error);
      });
    });

    _this.state = {
      post: {
        id: null,
        title: null,
        content: null,
        excerpt: null
      }
    };
    return _this;
  }

  _createClass(Post, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layouts_page__WEBPACK_IMPORTED_MODULE_2__["default"], {
        headTitle: 'my-Page | post',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-284175591",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-284175591",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Post list"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-284175591",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "scoped!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        secondary: true,
        onClick: function onClick() {
          return _this2.getPost(_this2.props.url.query.id);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Click Here"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-284175591",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-284175591",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "fetch response"), this.state.post.id)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "284175591",
        css: "@media (max-width:600px){p.jsx-284175591{font-size:14px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95b3N1a2UudHN1dHN1bWkvRG9jdW1lbnRzL1RyYXZlbC9Qcm9qZWN0cy9GRUcvR0lUL1Byb2plY3RzL25leHQvbXlQYWdlL3BhZ2VzL3Bvc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0RvQixBQUk4QixlQUNqQiIsImZpbGUiOiIvVXNlcnMveW9zdWtlLnRzdXRzdW1pL0RvY3VtZW50cy9UcmF2ZWwvUHJvamVjdHMvRkVHL0dJVC9Qcm9qZWN0cy9uZXh0L215UGFnZS9wYWdlcy9wb3N0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi4vbGF5b3V0cy9wYWdlJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBBUEkgZnJvbSAnLi4vY29uc3RhbnRzL2FwaSc7XG5pbXBvcnQgeyBQb3N0c0xpc3QgfSBmcm9tICcuLi91dGlsL3Bvc3RzTGlzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcG9zdDoge1xuICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgdGl0bGU6IG51bGwsXG4gICAgICAgIGNvbnRlbnQ6IG51bGwsXG4gICAgICAgIGV4Y2VycHQ6IG51bGwgICAgICAgIFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldFBvc3QgPSAoaWQpID0+IHtcbiAgICBsZXQgcG9zdCA9IHt9O1xuICAgIGF4aW9zLmdldChBUEkucG9zdHMgKyBpZClcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3JlcycsIHJlcyk7XG4gICAgICAgIHJldHVybiBwb3N0ID0ge1xuICAgICAgICAgIGlkOiByZXMuZGF0YS5pZCxcbiAgICAgICAgICB0aXRsZTogcmVzLmRhdGEudGl0bGUucmVuZGVyZWQsXG4gICAgICAgICAgY29udGVudDogcmVzLmRhdGEuY29udGVudC5yZW5kZXJlZCxcbiAgICAgICAgICBleGNlcnB0OiByZXMuZGF0YS5leGNlcnB0LnJlbmRlcmVkXG4gICAgICAgIH1cbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBwb3N0XG4gICAgICB9KVxuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKCdlcnJvcjonLCBlcnJvcikpXG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFBhZ2UgaGVhZFRpdGxlPXsnbXktUGFnZSB8IHBvc3QnfT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDE+UG9zdCBsaXN0PC9oMT5cbiAgICAgICAgICA8cD5zY29wZWQhPC9wPlxuICAgICAgICAgIDxCdXR0b24gc2Vjb25kYXJ5IG9uQ2xpY2s9eygpID0+IHRoaXMuZ2V0UG9zdCh0aGlzLnByb3BzLnVybC5xdWVyeS5pZCl9PkNsaWNrIEhlcmU8L0J1dHRvbj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHA+ZmV0Y2ggcmVzcG9uc2U8L3A+XG4gICAgICAgICAgICB7LyogPFBvc3RzTGlzdCBwb3N0cz17dGhpcy5zdGF0ZS5wb3N0c30gLz4gKi99XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5wb3N0LmlkfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvUGFnZT5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/yosuke.tsutsumi/Documents/Travel/Projects/FEG/GIT/Projects/next/myPage/pages/post.js */",
        __self: this
      }));
    }
  }]);

  return Post;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);


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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/post")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=post.js.fbe2dced7e9387b8a833.hot-update.js.map