const gulp = require('gulp');
const useref = require('gulp-useref');
const cssnano = require('gulp-cssnano');
const gulpIf = require('gulp-if');

gulp.task('useref', () => {
  return gulp.src('src/index.html')
    .pipe(useref())
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});

gulp.task('images', () => {
  return gulp.src('src/img/**/*')
    .pipe(gulp.dest('dist/img'))
})

gulp.task('default', ['useref', 'images']);