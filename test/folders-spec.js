var folders = require('../index.js');

var Stream = require('stream').Stream

describe('gulp-folder', function(){
    it('should list folders inside given folder', function(){
        
        var dirs = ['folder2', 'folder1'];
        
        folders('test', function(folder){
            expect(folder).toEqual(dirs.pop());
            
            return {pipe: function(){}, on: function(){}} 
        })();
    });
    
    it('should return stream', function(){
        var stream = folders('test', function(folder){
            return {pipe: function(){}, on: function(){}} 
        })();
        
        expect(stream).toBeDefined();
    });
});