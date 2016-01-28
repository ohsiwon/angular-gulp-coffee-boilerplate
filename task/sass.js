module.exports = function (gulp, plugins, config) {
  'use strict';
  return function () {
    gulp.task('sass', function() {
      gulp.src(config.paths.sass)
        .pipe(plugins.cached('sass'))
        .pipe(plugins.sass.sync().on('error', plugins.sass.logError))
        .pipe(gulp.dest(config.paths.css))
        .pipe(plugins.livereload(config.paths.css));
    });
  };
};