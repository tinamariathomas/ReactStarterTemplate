var gulp = require('gulp');
var reactify = require('reactify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var babelify = require("babelify");

var path = {
    MINIFIED_OUT: 'build.min.js',
    DEST_PUBLIC: 'out/build/public',
};

gulp.task('transform', function(){
    browserify({
        entries: ["javascript/src/tictactoe.js"],
        transform: [reactify]
    })
        .bundle()
        .pipe(source(path.MINIFIED_OUT))
        .pipe(gulp.dest(path.DEST_PUBLIC));
});