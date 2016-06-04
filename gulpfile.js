var gulp = require('gulp');
var postcss = require('gulp-postcss');
var rename = require('gulp-rename');
var del = require('del');

var postCSSArray = [
  require('postcss-nested')(),
  require("postcss-import")(),
  require("postcss-url")(),
  require('postcss-for')(),
  require("postcss-cssnext")(),
  require("cssnano")(),
  require('postcss-reporter')()
];

gulp.task('clean', function() {
  return del(['dist']);
});

gulp.task('postcss', ['clean'], function () {
  return gulp.src('lib/index.css')
    .pipe(postcss(postCSSArray))
    .pipe(rename({
      basename: 'funkcss',
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist/'))
});

gulp.task('immutable', ['clean' ,'postcss'], function () {
  return gulp.src('dist/funkcss.min.css')
    .pipe(postcss([require('postcss-importantly')]))
    .pipe(rename({
      prefix: 'funkcss-',
      basename: 'immutable',
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist/'))
});

gulp.task('watch', function() {
  gulp.watch('lib/*.css', ['postcss', 'immutable']);
});

gulp.task('default', ['postcss', 'immutable'] )
