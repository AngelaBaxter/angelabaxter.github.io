var gulp    = require( 'gulp' );
var less    = require( 'gulp-less' );
var connect = require( 'gulp-connect' );

gulp.task('less', function() {
	return gulp.src('style/main.less')
		.pipe(less())
		.pipe(gulp.dest('style'));
});

gulp.task('less:watch', ['less'], function () {
	gulp.watch('style/main.less', ['less']);
});

gulp.task('connect', function() {
	connect.server({
		port: 4242
	});
});

gulp.task('dev', ['connect', 'less:watch']);