var 
  gulp = require("gulp"),
    del = require("del"),
  sync = require("browser-sync").create(),
  plugins = require("gulp-load-plugins")({
    scope: ["devDependencies"]
  });
// plugins.htmlExtend <- gulp-html-extend

gulp.task("html", function () {
   return gulp.src("src/views/*.html")
       .pipe(plugins.htmlExtend())
       .pipe(gulp.dest("dist"))
       .pipe(sync.stream());
});

gulp.task("styles:app", function () {
    return gulp.src("src/style/app.less")
        .pipe(plugins.plumber())
        .pipe(plugins.less())
        .pipe(plugins.rename({suffix: '.min'}))
        .pipe(gulp.dest("dist/css"));
});

gulp.task("clean", function (cb) {
    setTimeout(function () {
        del.sync("dist");
        cb();
    });
});

gulp.task("styles: vendor", function () {
    return gulp.src({
        "node_modules/bootrstarp/dist/css/bootstrap.min.css"
    })
        .pipe(plugins.concat("vendor.min.css"))
        .pipe(gulp.dest('dist/css'))
});

gulp.task("build", ["clean"], function () {
    gulp.start(["html", 'styles:app', 'styles:app']);
});

gulp.task("watch", ['build'], function() {
    sync.init({
        server: "dist"
    });

    gulp.watch("sec/styles/**/*.less", ["styles:app"]);

    gulp.watch("src/views/**/*.html", ["html"]);
    gulp.watch("dist/*html").on("change", sync.reload);
});


gulp.task("default", ["watch"]);