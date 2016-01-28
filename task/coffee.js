module.exports = function (gulp, plugins, config) {
  'use strict';
  return function () {
    gulp.task('coffee', function() {
      gulp.src(config.paths.coffee)
        .pipe(plugins.cached('coffee'))
        .pipe(plugins.coffee({bare: false}).on('error', plugins.util.log))
        .pipe(plugins.ngAnnotate())
        .pipe(gulp.dest(config.paths.js))
        .pipe(plugins.livereload());
    });
  };
};