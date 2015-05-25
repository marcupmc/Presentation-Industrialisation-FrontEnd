module.exports = function(grunt) {

    var LIVERELOAD_PORT = 35729;
    grunt.initConfig({


    //---DEMO
    //------- CONCAT -----------
        concat: {
            app: {
                     src: ['app/**/*.js'],
                     dest: 'dist/app.js',
                 }
        },

    //---DEMO
    //------- UGLIFY -----------
        uglify: {
            build: {
                  files: {
                    'dist/app.min.js': ['dist/app.js']
                  }
            }
        },



   //---DEMO
    // ---- LIVE RELOAD ------
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



        //------ TESTS KARMA
        karma: {
                    unit: {
                        configFile: 'karma.unit.js'
                    }

                },

        shell: {
            e2e: { command: 'protractor protractor.conf.e2e.js'}
        },
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //--BUILD ------------
    grunt.registerTask('build',[
            'concat:app',
            'uglify:build'
        ]);


    //--LIVE RELOAD ----
    grunt.registerTask('serve', [
        'connect',
        'watch:dev'
    ]);

    //-- TESTS UNITAIRES ----
    grunt.registerTask('test-unit',['karma:unit']);

    //-- TESTS E2E
    grunt.registerTask('test-e2e',[
        'connect',
        'shell:e2e'
    ]);
};
