var gulp = require("gulp"),
    less = require("gulp-less"),
   rename = require("gulp-rename"),
   cssnano = require("gulp-cssnano"),
   sourcemaps = require("gulp-sourcemaps"),
   sync = require("browser-sync").create();

var IS_DEV = true;

gulp.task("less", function () {
   return gulp.src("src/styles/app.less")
       .pipe(sourcemaps.init())
       .pipe(less())
       .pipe(rename("app.min.css"))
       .pipe(cssnano())
       .pipe(IS_DEV, sourcemaps.write("."))
       .pipe(gulp.dest("dist/css"))
});

gulp.task("html", function () {
   return gulp.src("src/index1.html")
       .pipe(gulp.dest("dist"));
});

gulp.task("watch", ["html", "less"], function () {
   sync.init({
      server: "dist"
   });
   gulp.watch("src/index1.html", ["html"]);
   gulp.watch("dist/index1.html").on("change", sync.reload);
});

gulp.task("default", ["watch"]);