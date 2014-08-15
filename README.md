[![Build Status](https://travis-ci.org/hakubo/gulp-folders.svg?branch=master)](https://travis-ci.org/hakubo/gulp-folders)

# gulp-folders

Gulp plugin that lets you work with folders and treat them as package names

## Install

```
npm install gulp-folders --save-dev
```

# Rationale

This gives you a perfect solution to build different packages out of folders.
Given this structure:

```
path
  to
    folder
	  main
	    jquery.js
		ember.js
	  secondary
	    plugin.js
```

it is very easy to build

```
dist
  folder
    main.js
	secondary.js
```

## Usage

```javascript
var gulp = require('gulp'),
	path = require('path'),
	folders = require('gulp-folders'),
	pathToFolder = 'path/to/folder';

gulp.task('task', folders(pathToFolder, function(folder){
	//This will loop over all folders inside pathToFolder main, secondary
	//Return stream so gulp-folders can concatenate all of them
	//so you still can use safely use gulp multitasking

	return gulp.src(path.join(pathToFolder, folder, '*.js'))
		.pipe(concat(folder + '.js'))
		.pipe(gulp.dest('dist'));
}));
```
