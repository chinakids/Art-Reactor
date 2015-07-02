module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	require('time-grunt')(grunt);

  grunt.initConfig({
	  pkg: grunt.file.readJSON('package.json'),
	  watch: {
		  less: {
		    files: [
		        'less/**/*.less'
		    ],
		    tasks: ['less']
		  }
		},
		less: {
      fontIco: {
        options: {
          banner: '/*\n * <%= pkg.name %> - v<%= pkg.version %> (<%= grunt.template.today("yyyy-mm-dd HH:MM") %>)\n * <%= pkg.description %>\n * Author:<%= pkg.author %>\n */\n',
          compress: false,
          sourceMap:false
        },
        files: {
          "css/art-reactor.css": "less/art-reactor.less",
        }
      },
      compress:{
        options: {
          banner: '/*\n * <%= pkg.name %> - Compress - v<%= pkg.version %> (<%= grunt.template.today("yyyy-mm-dd HH:MM") %>)\n * <%= pkg.description %>\n * Author:<%= pkg.author %>\n */\n',
          compress: true,
          sourceMap:true
        },
        files: {
          "dist/art-reactor.min.css": "less/art-reactor.less",
        }
      }
    }
	});

    // 注冊任务
    grunt.registerTask('default', [
    	'less',
      'watch'
  	]);
    grunt.event.on('watch', function(action, filepath, target) {
	  grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
	});
};
