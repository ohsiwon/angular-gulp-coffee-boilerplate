module.exports = function (gulp, plugins, config) {  
  'use strict';
  var path = require('path');
  return function () {
    gulp.task('watch', function(){
      gulp.watch(config.paths.coffee, ['coffee']).on('change', showLog);
      gulp.watch(config.paths.sass, ['sass']).on('change', showLog);
      gulp.watch(config.paths.html, ['html']).on('change', showLog);
    });
  };
  // Log helper
  function showLog(e) {
    plugins.util.log(
      plugins.util.colors.green('>> ' + e.type + ': ') +
      plugins.util.colors.magenta(path.basename(e.path))
    );
  };

};