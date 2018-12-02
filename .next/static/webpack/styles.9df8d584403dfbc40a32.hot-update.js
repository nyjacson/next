webpackHotUpdate("styles",{

/***/ "./components/header/header.scss":
/*!***************************************!*\
  !*** ./components/header/header.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"headerWrapper":"_1KlXYR8Dv4hcgg4fyaVIH3","logo":"_3AiP2Qi2bk0yE7U66_UFGO","nav":"_421J67Xqa34DWhIRL8f8b","navWrapper":"_2a35Uvo8lu8jgDsL_xLjYc","menuArea":"_3snn3EtbjMsUAkDq7CKohq","headerInner":"_2ChZfW1SwZQw6WgXdoc90D"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1543644239982");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.9df8d584403dfbc40a32.hot-update.js.map