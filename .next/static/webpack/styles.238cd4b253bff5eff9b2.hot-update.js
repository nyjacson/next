webpackHotUpdate("styles",{

/***/ "./layouts/page.scss":
/*!***************************!*\
  !*** ./layouts/page.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"mainWrapper":"_2FYN8Ay7f8wSbblpK4kVXQ","nav":"_1EGnLj_VKz-9AFlQMcQFTC","navWrapper":"_2rQgRK5yvZ1l_E1aWKW_pw"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1543664816829");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.238cd4b253bff5eff9b2.hot-update.js.map