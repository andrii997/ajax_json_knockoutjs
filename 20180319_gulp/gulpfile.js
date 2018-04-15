var
    gulp = require("gulp"),
    sync = require("browser-sync").create(),
    del = require("del"),
    plugins = require("gulp-load-plugins")({
        scope: ["devDependencies"]
    });

gulp.task("html", function () {
    return gulp.src("src/views/*.html")
        .pipe(plugins.htmlExtend())
        .pipe(gulp.dest("dist"));
});

gulp.task("css", function () {
    return gulp.src("src/styles/app.less")
        .pipe(plugins.plumber())
        .pipe(plugins.less())
        .pipe(plugins.rename({suffix: ".min"}))
        .pipe(gulp.dest("dist/css"))
        .pipe(sync.stream());
});

gulp.task("css:vendor", function () {
    return gulp.src(["node_modules/bootstrap/dist/css/bootstrap.min.css"])
        .pipe(plugins.concat("vendor.min.css"))
        .pipe(gulp.dest("dist/css"));
});

gulp.task("fonts", function () {
    return gulp.src(["node_modules/bootstrap/dist/fonts/*"])
        .pipe(gulp.dest("dist/fonts"))
});

gulp.task("clean", function (cb) {
    del.sync("dist");
    cb();
});

gulp.task("build", ["clean"], function () {
    gulp.start(["html", "css:vendor", "fonts", "css"]);
});

gulp.task("watch", ["build"], function () {
    sync.init({
        server: "dist"
    });

    gulp.watch("src/views/**/*.html", ["html"]);
    gulp.watch("dist/*.html").on("change", sync.reload);

    gulp.watch("src/styles/**/*.css", ["css"]);
});

gulp.task("default", ["watch"]);