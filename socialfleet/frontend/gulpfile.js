var gulp = require('gulp');
var webserver = require('gulp-webserver');

var paths = {
    temp: 'temp',
    index: 'app/index.html'
};

gulp.task('default', ['tempSetup', 'serve']);


gulp.task('tempSetup', function(){
    gulp.src(paths.index)
    .pipe(gulp.dest(paths.temp));
});


gulp.task('serve', function(){
    gulp.src(paths.temp)
    .pipe(webserver({
        host: '0.0.0.0',
        port: 8000,
        open: true
    }));
});
