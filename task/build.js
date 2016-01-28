module.exports = function (gulp, plugins, config) {
  'use strict';
  var del     = require('del'),
  runSequence = require('run-sequence');

  gulp.task('clean', function () {
    return del([config.paths.tmp, config.paths.dist]);
  });

  gulp.task('build-css', function () {
    return gulp.src(config.paths.sass)
      .pipe(plugins.sass().on('error', plugins.sass.logError))
      .pipe(gulp.dest(config.paths.css))
  });

  gulp.task('build-js', function () {
   return gulp.src(config.paths.coffee)
      .pipe(plugins.coffee({bare: false}).on('error', plugins.util.log))
      .pipe(plugins.ngAnnotate())
      .pipe(gulp.dest(config.paths.js))
  });

  gulp.task('build-copy', function () {
    return gulp.src(config.paths.asset)
      .pipe(gulp.dest(config.paths.dist))
  });

  gulp.task('usemin', function(callback) {
    return gulp.src(config.paths.html)
      .pipe(plugins.usemin({
        vendorCss: [ plugins.cssnano(), plugins.rev() ],
        appCss: [ plugins.cssnano(), plugins.rev() ],
        vendorJs: [ plugins.uglify(), plugins.rev() ],
        appJs: [ plugins.uglify(), plugins.rev() ]
      }))
      .pipe(gulp.dest(config.paths.dist));
  });

  return function () {
    gulp.task('build', function(done) {      
      runSequence('clean',['build-css', 'build-js'], 'build-copy', 'usemin', done);
    });
  };
};