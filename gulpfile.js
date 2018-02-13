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

gulp.task('fontawesome', () => {
  return gulp.src('node_modules/font-awesome/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('fonts', () => {
  return gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('images', () => {
  return gulp.src('src/img/**/*')
    .pipe(gulp.dest('dist/img'))
})

gulp.task('default', ['useref', 'fontawesome', 'images', 'fonts']);