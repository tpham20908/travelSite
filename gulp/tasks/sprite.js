var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite'),
rename = require('gulp-rename');

var config = {
  mode: {
    css: {
      sprite: 'sprite.svg',
      render: {
        css: {
          template: './gulp/template/sprite.css'
        }
      }
    }
  }
}

gulp.task("createSprite", function() {
  return  gulp.src("./app/assets/images/icons/**/*.svg")
          .pipe(svgSprite(config))
          .pipe(gulp.dest("./app/temp/sprites/"));
});

gulp.task("CopySpriteGraphic", ["createSprite"], function() {
  return  gulp.src("./app/temp/sprites/css/**/*.svg")
          .pipe(gulp.dest("./app/assets/images/sprites"));
});

gulp.task("copySpriteCSS", ["createSprite"], function() {
  return  gulp.src("./app/temp/sprites/css/*.css")
          .pipe(rename("_sprite.css"))
          .pipe(gulp.dest("./app/assets/css/modules"));
});

gulp.task("icons", ["CopySpriteGraphic", "copySpriteCSS"]);