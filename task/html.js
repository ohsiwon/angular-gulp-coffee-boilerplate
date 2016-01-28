module.exports = function (gulp, plugins, config) {  
  'use strict';
  return function () {
    gulp.task('html', function() {
      gulp.src(config.paths.html)
        .pipe(plugins.cached('html'))
        .pipe(plugins.livereload());
    });
  };
};