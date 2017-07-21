const gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass');

const libs = [
       // 'client/styles/bootstrap.scss',
       // 'client/styles/awesome.scss',
       // 'client/styles/roboto.scss'

    ],
    styles = [

        'client/styles/common.scss',
        'client/styles/sticky.scss',
        'client/app/**/*.scss'
    ];

gulp.task('libs', function () {
    return gulp.src(libs)
        .pipe(sass())
        .pipe(concat('libs.css'))
        .pipe(gulp.dest('client/build'))
});
gulp.task('styles', function () {
    return gulp.src(styles)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(concat('styles.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('client/build'))
});

gulp.task('watch',function () {
   return gulp.watch(styles, ['styles'])
})

gulp.task('default', ['libs','styles']);