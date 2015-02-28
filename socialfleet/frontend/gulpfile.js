var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('default', function(){

    gulp.src('app/index.html')
    .pipe(gulp.dest('temp'));

    gulp.src('temp')
    .pipe(webserver({
        host: '0.0.0.0',
        port: 8000,
        open: true
    }));
});
