var gulp = require('gulp'),
    jade = require('gulp-jade'),
    plumber = require('gulp-plumber'),
    watch = require('gulp-watch'),
    connect = require('gulp-connect');

gulp.task('server', function() {
    connect.server({
        root: 'src',
        port: 8080,
        livereload: true
    });
});

gulp.task('watch-jade', function() {
    return gulp.src('src/**/*.jade')
        .pipe(plumber())
        .pipe(watch('src/**/*.jade'))
        .pipe(jade())
        .pipe(gulp.dest('src'))
        .pipe(connect.reload());
});

gulp.task('dev', ['server', 'watch-jade'], function() {});
