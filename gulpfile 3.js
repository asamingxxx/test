var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
require('es6-promise').polyfill();//autoprefixerのエラー回避
var browser = require("browser-sync");
var plumber = require("gulp-plumber");

gulp.task("server", function() {
    browser({
        server: {
            baseDir: "./organic/"
        }
    });
});

gulp.task("sass", function() {
  gulp.src("organic/scss/*scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest("./organic/css"))
    .pipe(browser.reload({stream:true}))
});

gulp.task("default",['server'], function() {
    gulp.watch("organic/scss/*scss",["sass"]);
});