'use strict';

var gulp    = require('gulp'),
plugins     = require('gulp-load-plugins')(),
config      = [];

// Path settings
config.paths = {
  'html'  : './src/**/*.html',
  'sass'  : './src/scss/**/*.scss',
  'coffee': './src/script/**/*.coffee',  
  'css'   : './.tmp/style',
  'js'    : './.tmp/script',
  'src'   : './src',
  'dist'  : './dist',
  'tmp'   : './.tmp',
  'asset' : './src/**/*.{html,jpg,jpeg,png,gif,svg}',
  tempDirs: {
    '/style'    : './.tmp/style',
    '/script' : './.tmp/script',
    '/bower_components' : './bower_components',
  }
};

// gulp task loader
function getTask(task) {
    return require('./task/' + task)(gulp, plugins, config);
};

// Register tasks
gulp.task('connect', getTask('connect'));
gulp.task('watch', getTask('watch'));
gulp.task('html', getTask('html'));
gulp.task('sass', getTask('sass'));
gulp.task('coffee', getTask('coffee'));
gulp.task('wiredep', getTask('wiredep'));

// Main tasks
gulp.task('default', ['coffee', 'sass', 'wiredep','connect', 'watch']);
gulp.task('build', getTask('build'));