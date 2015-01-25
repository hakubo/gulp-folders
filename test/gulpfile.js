/**
* Testing ground
 * ../node_modules/.bin/gulp test
 * ../node_modules/.bin/gulp empty
 */

var gulp = require('gulp'),
	folders = require('../');

gulp.task('test', folders('.', function(folder){
	console.log(folder);

	return gulp.src(folder);
}));

gulp.task('empty', folders('empty', function(folder){
	console.log(folder);

	return gulp.src(folder);
}));
