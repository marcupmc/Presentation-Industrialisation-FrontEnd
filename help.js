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



    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-shell');


     grunt.registerTask('build',[
            'concat:app',
            'uglify:build'
        ]);




     //------- TEST unit ----

      describe("ajout d'une tache",function(){
        beforeEach(function(){
            $scope.listOfTasks=[];
            $scope.currentTask="Test";
            $scope.addTask();
        });
        it("la liste contient un element",function(){
            expect($scope.listOfTasks.length).toEqual(1);
        });
        it("aucune tâche n'a ete realisée",function(){
            expect($scope.nbDoneTask).toEqual(0);
        });
    });


      // -----e2e ------
      describe("on ajoute une tâche",function(){
    it("il y a donc 1 tache dans la liste",function(){
      element(by.model('currentTask')).sendKeys('Hello World !');
      element(by.id('button-add-ask')).click(); 
      var taches = element.all(by.repeater('task in listOfTasks'));
            expect(taches.count()).toEqual(1);
       });

    it("le texte faisant le décompte des taches est affiché",function(){
      expect(element(by.id('textTaskCount')).isDisplayed()).toBeTruthy();
      expect(element(by.id('textTaskCount')).getText()).toEqual("You have done 0 of your 1 task.");
    });
  });
