const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  /* my next config */
});

const withSass = require('@zeit/next-sass');

module.exports = withSass({
  cssModules: true
});
