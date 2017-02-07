var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssVars = require('postcss-simple-vars'),
cssNested = require('postcss-nested'),
cssImport = require('postcss-import');

gulp.task('styles', function() {
  return gulp.src('app/assets/css/styles.css')
  // pipe *.css in a filter postcss
  .pipe(postcss([cssImport, cssNested, cssVars, autoprefixer]))
  // handle error gracefully
  .on('error', function(errorInfo) {
    // print out errorInfo for debugging purpose
    console.log(errorInfo.toString());
    // stop acting with error
    this.emit('end');
  })
  .pipe(gulp.dest('app/temp/css'));
});