const gulp = require('gulp');

gulp.task('watchAssets', () => {
  gulp.watch(['src/*.scss', 'src/**/*.scss'], gulp.series('assets'));
})

gulp.task('assets', () => {
  return gulp.src(['src/*.scss', 'src/**/*.scss'])
    .pipe(gulp.dest('lib'))
})
