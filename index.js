/**
 * @description Gulp plugin that lets you work with folders and treat them as package names
 * @see README.md
 */
var fs = require('fs'),
	path = require('path');
	es = require('event-stream');

function getFolders(dir){
	return fs.readdirSync(dir)
		.filter(function(file){
			return fs.statSync(path.join(dir, file)).isDirectory();
		});
}

module.exports = function folders(dir, tasks){
	return function(done){
		var folders = getFolders(dir),
			streams = folders.map(tasks);

		if (streams.length === 0) {
			done();
		}

		return es.merge.apply(null, streams);
	};
};
