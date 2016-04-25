var gulp = require('gulp');
var postcss = require('gulp-postcss');
var rename = require('gulp-rename');
var del = require('del');

var postCSSArray = [
  require('postcss-reporter')(),
  require('postcss-nested')(),
  require("postcss-import")(),
  require("postcss-url")(),
  require("postcss-cssnext")(),
  require('postcss-for')(),
  require("cssnano")()
];

gulp.task('clean', function() {
  return del(['dist']);
});

gulp.task('postcss', ['clean'], function () {
  return gulp.src('lib/funk.css')
    .pipe(postcss(postCSSArray))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist/'))
});

gulp.task('watch', function() {
  gulp.watch('lib/*.css', ['postcss']);
});

gulp.task('default', ['postcss'] )
