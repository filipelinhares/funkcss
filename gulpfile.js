var gulp = require('gulp');
var postcss = require('gulp-postcss');
var rename = require('gulp-rename');
var shrink = require('gulp-cssshrink');

var postCSSArray = [
  require('postcss-partial-import')(),
  require('postcss-for')(),
  require('postcss-focus')(),
  require('autoprefixer')(),
  require('cssnext')(),
  require('postcss-reporter')(),
  require('postcss-nested')()
];

gulp.task('postcss', function () {
  return gulp.src('lib/funk.css')
    .pipe(postcss(postCSSArray))
    .pipe(gulp.dest('dist/'))
});

gulp.task('min', ['postcss'], function () {
    return gulp.src('dist/funk.css')
    .pipe(shrink())
      .pipe(rename('funk.min.css'))
      .pipe(gulp.dest('dist/'))
});

gulp.task('watch', function() {
  gulp.watch('lib/*.css', ['postcss']);
});

gulp.task('default', ['postcss', 'min'] )
