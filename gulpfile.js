var gulp = require('gulp');
var postcss = require('gulp-postcss');
var rename = require('gulp-rename');
var shrink = require('gulp-cssshrink');
var del = require('del');

var postCSSArray = [
  require('postcss-partial-import')(),
  require('postcss-for')(),
  require('autoprefixer')(),
  require('cssnext')(),
  require('postcss-reporter')(),
  require('postcss-nested')()
];

gulp.task('clean', function() {
  return del(['dist']);
});

gulp.task('postcss', ['clean'], function () {
  return gulp.src(['lib/funk.css', 'lib/funk-components.css'])
    .pipe(postcss(postCSSArray))
    .pipe(gulp.dest('dist/'))
});

gulp.task('min', ['postcss'], function () {
    return gulp.src(['dist/funk.css', 'dist/funk-components.css'])
    .pipe(shrink())
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(gulp.dest('dist/'))
});

gulp.task('watch', function() {
  gulp.watch('lib/*.css', ['postcss']);
});

gulp.task('default', ['postcss', 'min'] )
