module.exports = function(grunt) {

    var LIVERELOAD_PORT = 35729;
    grunt.initConfig({
        connect: {
            server: {
              options: {
                base: '.',
                // This will inject live reload script into the html
                livereload: 35729
              }
            }
          },
      watch: {
        dev: {
          files: ['app/**/*'],
                options: {
                    base:'app/index.html',
                     // Start a live reload server on the default port 35729
                    livereload: 35729
                },
            },
        },
        karma: {
                    unit: {
                        configFile: 'karma.unit.js'
                    }

                }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-karma');


    grunt.registerTask('serve', [
        'connect',
        'watch:dev'
    ]);

    grunt.registerTask('test-unit',['karma:unit']);
};
