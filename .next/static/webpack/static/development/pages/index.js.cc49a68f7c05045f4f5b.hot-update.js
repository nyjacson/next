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
var _jsxFileName = "/Users/yosuke.tsutsumi/Documents/Travel/Projects/FEG/GIT/Projects/next/myPage/pages/index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Top =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Top, _React$Component);

  function Top(props) {
    var _this;

    _classCallCheck(this, Top);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Top).call(this, props));
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
      var _this2 = this;

      var posts = [];

      var getPosts = function getPosts() {
        axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_constants_api__WEBPACK_IMPORTED_MODULE_5__["default"].posts).then(function (res) {
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
          _this2.setState({
            posts: posts
          });
        }).catch(function (error) {
          return console.log('error:', error);
        });
      };

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layouts_page__WEBPACK_IMPORTED_MODULE_2__["default"], {
        headTitle: 'my-Page',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        class: "ui container",
        className: "jsx-2241407178",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-2241407178",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Post list"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-2241407178",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "scoped!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        secondary: true,
        onClick: getPosts,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Click Here"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2241407178",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-2241407178",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "fetch response"), this.state.props[0].id !== null ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_util_postsList__WEBPACK_IMPORTED_MODULE_6__["PostsList"], {
        posts: this.state.posts,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }) : 'コンテンツがありません')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2241407178",
        css: "@media (max-width:600px){p.jsx-2241407178{font-size:14px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95b3N1a2UudHN1dHN1bWkvRG9jdW1lbnRzL1RyYXZlbC9Qcm9qZWN0cy9GRUcvR0lUL1Byb2plY3RzL25leHQvbXlQYWdlL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFEZ0IsQUFJMEIsZUFDakIiLCJmaWxlIjoiL1VzZXJzL3lvc3VrZS50c3V0c3VtaS9Eb2N1bWVudHMvVHJhdmVsL1Byb2plY3RzL0ZFRy9HSVQvUHJvamVjdHMvbmV4dC9teVBhZ2UvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFnZSBmcm9tICcuLi9sYXlvdXRzL3BhZ2UnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IEFQSSBmcm9tICcuLi9jb25zdGFudHMvYXBpJztcbmltcG9ydCB7IFBvc3RzTGlzdCB9IGZyb20gJy4uL3V0aWwvcG9zdHNMaXN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBvc3RzOiBbe1xuICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgdGl0bGU6IG51bGwsXG4gICAgICAgIGNvbnRlbnQ6IG51bGwsXG4gICAgICAgIGV4Y2VycHQ6IG51bGwgICAgICAgIFxuICAgICAgfV1cbiAgICB9XG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgcG9zdHMgPSBbXTtcbiAgICBjb25zdCBnZXRQb3N0cyA9ICgpID0+IHtcbiAgICAgIGF4aW9zLmdldChBUEkucG9zdHMpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygncmVzJywgcmVzKTtcbiAgICAgICAgICBwb3N0cyA9IHJlcy5kYXRhLm1hcChyID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoe1xuICAgICAgICAgICAgICBpZDogci5pZCxcbiAgICAgICAgICAgICAgdGl0bGU6IHIudGl0bGUucmVuZGVyZWQsXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IHIuY29udGVudC5yZW5kZXJlZCxcbiAgICAgICAgICAgICAgZXhjZXJwdDogci5leGNlcnB0LnJlbmRlcmVkXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pXG4gICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgcG9zdHNcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coJ2Vycm9yOicsIGVycm9yKSlcbiAgICB9XG5cbiAgcmV0dXJuIChcbiAgPFBhZ2UgaGVhZFRpdGxlPXsnbXktUGFnZSd9PlxuICAgIDxkaXYgY2xhc3M9XCJ1aSBjb250YWluZXJcIj5cbiAgICAgIDxoMT5Qb3N0IGxpc3Q8L2gxPlxuICAgICAgPHA+c2NvcGVkITwvcD5cbiAgICAgIDxCdXR0b24gc2Vjb25kYXJ5IG9uQ2xpY2s9e2dldFBvc3RzfT5DbGljayBIZXJlPC9CdXR0b24+XG4gICAgICA8ZGl2PlxuICAgICAgICA8cD5mZXRjaCByZXNwb25zZTwvcD5cbiAgICAgICAge3RoaXMuc3RhdGUucHJvcHNbMF0uaWQgIT09IG51bGwgPyA8UG9zdHNMaXN0IHBvc3RzPXt0aGlzLnN0YXRlLnBvc3RzfSAvPiA6ICfjgrPjg7Pjg4bjg7Pjg4TjgYzjgYLjgorjgb7jgZvjgpMnIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvUGFnZT5cbil9XG59XG4iXX0= */\n/*@ sourceURL=/Users/yosuke.tsutsumi/Documents/Travel/Projects/FEG/GIT/Projects/next/myPage/pages/index.js */",
        __self: this
      }));
    }
  }]);

  return Top;
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.cc49a68f7c05045f4f5b.hot-update.js.map