webpackHotUpdate("static/development/pages/post.js",{

/***/ "./components/header/index.js":
/*!************************************!*\
  !*** ./components/header/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _svg_iconMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../svg/iconMenu */ "./components/svg/iconMenu.js");
/* harmony import */ var _meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../meta */ "./components/meta/index.js");
/* harmony import */ var _constants_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/common */ "./constants/common.js");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header.scss */ "./components/header/header.scss");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_header_scss__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/yosuke.tsutsumi/Documents/Travel/Projects/FEG/GIT/Projects/next/myPage/components/header/index.js";






function Header(_ref) {
  var headTitle = _ref.headTitle,
      onClickMenu = _ref.onClickMenu;

  var onMouseEnter = function onMouseEnter(e) {
    console.log('enter');
  };

  var onMouseLeave = function onMouseLeave(e) {
    console.log('leave');
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_meta__WEBPACK_IMPORTED_MODULE_3__["default"], {
    headTitle: headTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: _header_scss__WEBPACK_IMPORTED_MODULE_5___default.a.headerWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ui container py-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _header_scss__WEBPACK_IMPORTED_MODULE_5___default.a.headerInner,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: {
      pathname: '/'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: _header_scss__WEBPACK_IMPORTED_MODULE_5___default.a.logo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Logo")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: _header_scss__WEBPACK_IMPORTED_MODULE_5___default.a.menuArea,
    onClick: onClickMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Menu"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_svg_iconMenu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }))))));
}
Header.defaultProps = {
  headTitle: 'COMMON.HPName'
};

/***/ })

})
//# sourceMappingURL=post.js.caf063c327483e74428b.hot-update.js.map