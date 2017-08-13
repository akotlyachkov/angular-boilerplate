const gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    inject = require('gulp-inject'),
    del = require('del'),
    sass = require('gulp-sass'),
    clean = require('gulp-clean-css'),
    uglify = require('gulp-uglify');

const libs = [
        'client/styles/bootstrap.scss',
        'client/styles/awesome.scss',
        'client/styles/roboto.scss'
    ],
    styles = [
        'client/styles/common.scss',
        'client/styles/sticky.scss',
        'client/app/**/*.scss'
    ],
    scripts = [
        'node_modules/reflect-metadata/Reflect.js',
        'node_modules/zone.js/dist/zone.js',
    ],
    injectable = [
        'client/build/ie.js',
        'client/build/libs.js',
        'client/build/browser.js',
        'client/build/*.css'];

gulp.task('release-css', function () {
    return gulp.src(libs.concat(styles))
        .pipe(sass())
        .pipe(concat('styles.css'))
        .pipe(clean())
        .pipe(gulp.dest('client/build'))
});

gulp.task('release-js', function () {
    return gulp.src(scripts)
        .pipe(concat('libs.js'))
        .pipe(uglify())
        .pipe(gulp.dest('client/build'))
});

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

gulp.task('watch', () => gulp.watch(styles, ['styles']));

gulp.task('inject', function () {
    const sources = gulp.src(injectable, {read: false});
    return gulp.src('client/views/index.html')
        .pipe(inject(sources, {ignorePath: 'client/build/'}))
        .pipe(gulp.dest('client/views'));
});

gulp.task('clean', () => del('client/build'));
gulp.task('clean:styles', () => del('client/build/*(.css|.css.map)'));
gulp.task('clean:browser', () => del(['client/build/*(.js|.js.map)', '!client/build/server.js']));
gulp.task('clean:server', () => del('client/build/server.js'));

gulp.task('default', ['libs', 'styles']);