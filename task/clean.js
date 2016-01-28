module.exports = function (gulp, plugins, config) {
  'use strict';
  var del = require('del');
  return function () {
    gulp.task('clean', function (done) {
      return del([config.paths.dist],done);
    });
  };
};