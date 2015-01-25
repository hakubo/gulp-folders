var folders = require('../index.js');

var Stream = require('stream').Stream;

describe('gulp-folder', function(){

    it('should return stream', function(){
        var stream = folders('test', function(folder){
            return {pipe: function(){}, on: function(){}}
        })();

        expect(stream).toBeDefined();
    });

    it('should list folders inside given folder', function(){
        
        var dirs = ['folder2', 'folder1', 'empty'],
            done = jasmine.createSpy('done');
        
        folders('test', function(folder){
            expect(folder).toEqual(dirs.pop());
            
            return {pipe: function(){}, on: function(){}} 
        })(done);

        expect(done).not.toHaveBeenCalled();
    });

    it('should do nothing with empty folder', function(){

        var spy = jasmine.createSpy('folderCallback'),
            done = jasmine.createSpy('done');

        folders('test/empty', spy)(done);

        expect(spy).not.toHaveBeenCalled();
        expect(done).toHaveBeenCalled();
    });
});
