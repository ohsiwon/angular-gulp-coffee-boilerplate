module.exports = function (gulp, plugins, config) {
  'use strict';
  return function () {
    gulp.task('connect', function() {
      plugins.livereload({ start: true });
      plugins.connect.server({
        root: config.paths.src,
        port: 3000,
        livereload: true,
        fallback: config.paths.src + '/index.html',
        middleware: function(connect, opt) {
          var connection = [], key;
          for (key in config.paths.tempDirs) {
            connection.push(  connect().use( key , connect.static( config.paths.tempDirs[key] )) )
          }
          return connection;
        }
      });
    });
  };
};