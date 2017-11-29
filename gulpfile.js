let gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    inject = require('gulp-inject'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    clean = require('gulp-clean-css'),
    sass = require('gulp-sass'),
    pug = require('gulp-pug');

let commonCss = [
        'client/styles/common.scss',
    ],
    loadingCss = [
        'client/styles/loading.scss',
    ],
    injectJs = [
        'client/build/browser.js'
    ],
    injectCss = [
        'client/build/styles.css'
    ],
    pugs = [
        'client/views/browser.pug',
        'client/views/server.pug'
    ],
    destination = 'client/build';

gulp.task('commonCss', function () {
    return gulp
        .src(commonCss)
        //.pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('styles.css'))
        .pipe(clean())
        .pipe(gulp.dest(destination))
});

gulp.task('loadingCss', function () {
    return gulp
        .src(loadingCss)
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('loading.css'))
        .pipe(clean())
        .pipe(gulp.dest(destination))
});

gulp.task('inject', function () {
    const cssFiles = gulp.src(injectCss);
    const jsFiles = gulp.src(injectJs);
    return gulp.src(pugs)
        .pipe(inject(cssFiles, {ignorePath: 'client/build',addPrefix:'css'}))
        .pipe(inject(jsFiles, {ignorePath: 'client/build',addPrefix:'js'}))
        .pipe(pug())
        .pipe(gulp.dest('client/views'));
});

gulp.task('watch', ['commonCss'], function () {
    return gulp.watch([
        'client/styles/**/*.scss',
        'client/app/**/*.scss'
    ], ['default'])
});

gulp.task('default',['commonCss','loadingCss','inject']);