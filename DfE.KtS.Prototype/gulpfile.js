const gulp = require('gulp');
//const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const del = require('del');

console.log('in gulpfile.js');

var paths = {
    styles: {
        src: 'app/assets/sass/*.scss',
        dest: 'public/stylesheets/'
    }
};

function styles() {
    return gulp.src(['app/assets/sass/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest('public/stylesheets/'));
};

function watch() {
    gulp.watch(paths.styles.src, styles);
}

function clean() {
    // You can use multiple globbing patterns as you would with `gulp.src`,
    // for example if you are using del 2.0 or above, return its promise
    return del(['public']);
}
var build = gulp.series(clean, gulp.parallel(styles));


exports.clean = clean;
exports.styles = styles;
exports.watch = watch;
exports.build = build;

exports.default = build;
//gulp.task('default', ['sass','watch']);
