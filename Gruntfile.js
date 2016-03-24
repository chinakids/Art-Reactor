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
		  },
			md : [
				'doc/**/*.md'
			],
			tasks :['artReactorBuild']
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
          sourceMap:true,
          sourceMapURL:'./art-reactor.min.css.map'
        },
        files: {
          "dist/art-reactor.min.css": "less/art-reactor.less",
        }
      }
    },
		artReactorBuild: {
      less: {
        options: {
          outputType: "less"
        },
        files: {
          "less/ico.less": "doc/Art-Reactor图标字体代码点.md"
        }
      },
      json: {
        options: {
          outputType: "json"
        },
        files: {
          "dome/art-reactor.js": "doc/Art-Reactor图标字体代码点.md"
        }
      }
    }
	});

    // 注冊任务
    grunt.registerTask('default', [
      'artReactorBuild',
      'less:compress',
      'watch'
  	]);
    grunt.event.on('watch', function(action, filepath, target) {
	  grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
	});
};
