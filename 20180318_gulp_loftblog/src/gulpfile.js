var gulp = require('gulp');
var concatCss = require('gulp-concat-css'),//обєднує всі файли(js. css) в один
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),//виводить повідомлення про зміни
    autoprefixer = require('gulp-autoprefixer'),//добавляє префікси до цсс
    minifyCSS = require('gulp-minify-css');

//css
gulp.task('css', function () {
    return gulp.src('css/*.css')//шлях до папок з якими працювати
        .pipe(concatCss("bundle.css"))//виклик функції __ concatCSS функція яка буде зберiгати цсс в один файл(назва файлу)
        .pipe(minifyCSS())
        .pipe(rename("bundle.mis.css"))//створення файлу min.css
        .pipe(notify("Done!!!"))//повідомлення яке вивести
        .pipe(autoprefixer('last 15 version'))//браузери які підтримує іе 9++(в нових версіях gulp не працює)
        .pipe(gulp.dest('app/css'));//(concatCss)куда зберігати файл який получиться в результаті
});

//html
gulp.task('html', function(){
    gulp.src('app/index.html')
        .pipe(connect.reload());
});


gulp.task("watch", function () {
    gulp.watch('css/*.css', ['css'])
    gulp.watch('app/html', ['html'])
});

//default
gulp.task('default',['connect', 'html', 'css', 'watch']);