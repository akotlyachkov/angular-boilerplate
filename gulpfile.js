const gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat-css'),
    sass = require('gulp-sass');

const files = [
    'client/styles/bootstrap.scss',
    'client/styles/awesome.scss',
    'client/styles/roboto.scss',
    'client/styles/common.scss',
    'client/styles/sticky.scss',
    'client/app/**/*.scss'
];

gulp.task('sass', function () {
    return gulp.src(files)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('styles.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('client/build'))
});

gulp.task('default', ['sass']);