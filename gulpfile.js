var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
cssnested = require('postcss-nested'),
cssImport = require('postcss-import');

gulp.task('default', function() {
  console.log("Hooray! - You created a gulp task.");
});

gulp.task('html', function() {
  console.log("Imagine something useful being done to your HTML!");
});

gulp.task('styles', function() {
  return gulp.src('app/assets/css/styles.css')
  .pipe(postcss([autoprefixer, cssvars, cssnested, cssImport]))
  .pipe(gulp.dest('app/temp/css'));
});

gulp.task('watch', function() {
  watch('app/index.html', function() {
    gulp.start('html');
  });
  watch('app/assets/css/**/*.css', function() {
    gulp.start('styles');
  });
});