/**
 * Testing ground
 * ../node_modules/.bin/gulp test
 * ../node_modules/.bin/gulp empty
 */

let gulp = require('gulp');
let concatFolders = require('../');

gulp.task('test', done => {
  return gulp
		.src('./**/*.js')
		.pipe(concatFolders());
  done();
});

gulp.task('empty', done => {
  return gulp
		.src('./empty/**/*')
		.pipe(concatFolders());
  done();
});
