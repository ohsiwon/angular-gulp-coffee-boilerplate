module.exports = function (gulp, plugins, config) {
  'use strict';
  var wiredep = require('wiredep').stream;
  return function () {
    gulp.task('wiredep', function () {
      gulp.src(config.paths.html)
        .pipe(wiredep())
        .pipe(gulp.dest(config.paths.src));
    });

  };
};