var gulp = require('gulp');

// Requires the gulp-sass plugin
var sass = require('gulp-sass');

var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
    return gulp.src('app/scss/*.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'app'
        }
    })
});

gulp.task('watch',['browserSync','sass'] function () {
    gulp.watch('app/scss/*.scss', gulp.parallel('sass'))
    // Other watchers
});
