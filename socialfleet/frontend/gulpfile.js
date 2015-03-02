var gulp = require('gulp');
var webserver = require('gulp-webserver');
var mainBowerFiles = require('main-bower-files');
var inject = require('gulp-inject');

var paths = {
    temp: 'temp',
    tempVendor: 'temp/vendor',
    index: 'app/index.html'
};

gulp.task('default', ['scripts', 'serve']);

gulp.task('scripts', function(){

    var tempIndex = gulp.src(paths.index)
        .pipe(gulp.dest(paths.temp));

    var tempVendors = gulp.src(mainBowerFiles())
        .pipe(gulp.dest(paths.tempVendor));

    tempIndex.pipe(inject(tempVendors, {relative: true}))
        .pipe(gulp.dest(paths.temp));
});

gulp.task('serve', function(){
    gulp.src(paths.temp)
    .pipe(webserver({
        host: '0.0.0.0',
        port: 8080,
        open: true
    }));
});
