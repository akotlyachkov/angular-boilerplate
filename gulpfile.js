let gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    inject = require('gulp-inject'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    clean = require('gulp-clean-css'),
    path = require('path'),
    sass = require('gulp-sass'),
    del = require('del'),
    pug = require('gulp-pug');

let commonCss = [
        'client/styles/common.scss',
    ],
    injectJs = [
        'build/common.js',
        'build/libs.js',
        'build/browser.js'
    ],
    injectCss = [
        'build/styles.css'
    ],
    pugs = [
        'client/views/index.pug'
    ],
    destination = 'build';

gulp.task('commonCss', function () {
    return gulp
        .src(commonCss)
        //.pipe(sourcemaps.init())
        .pipe(sass({importer: tildaResolver}).on('error', sass.logError))
        .pipe(concat('styles.css'))
        .pipe(clean())
        .pipe(gulp.dest(destination))
});


gulp.task('inject', function () {
    const cssFiles = gulp.src(injectCss);
    const jsFiles = gulp.src(injectJs);
    return gulp.src(pugs)
        .pipe(inject(cssFiles, {ignorePath: 'build', addPrefix: 'styles'}))
        .pipe(inject(jsFiles, {ignorePath: 'build', addPrefix: 'scripts'}))
        .pipe(pug())
        .pipe(gulp.dest('client/views'));
});

gulp.task('watch', ['commonCss'], function () {
    return gulp.watch([
        'client/styles/**/*.scss',
        'client/app/**/*.scss'
    ], ['default'])
});

gulp.task('default', ['commonCss', 'inject']);

function tildaResolver(url, prev, done) {
    if (url[0] === '~') {
        url = path.resolve('node_modules', url.substr(1));
    }
    return { file: url };
}
gulp.task('clean:files', function () {
    return del([
        'client/app/**/*.js',
        'client/app/**/*.map',
        'client/app/**/*.json',
    ])
});