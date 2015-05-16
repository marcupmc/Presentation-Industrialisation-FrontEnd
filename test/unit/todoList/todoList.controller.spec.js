describe("Test du controlleur todoList",function(){

    beforeEach(module('TodoList'));
    beforeEach(module('mainApp'));

    var $scope;
    beforeEach(inject(function($rootScope,$controller){
        $scope = $rootScope.$new();
        $controller('TodoListCtrl', {
            '$scope': $scope
        });
    }));

    //--- DEMO --------------------------------
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

    //-----FIN DEMO --------------------------

    describe("suppression d'une tâche",function(){
        describe("appel sans argument",function(){
            beforeEach(function(){
                $scope.listOfTasks = [{text:"toto",done:false}];
                $scope.deleteTask();
            });

            it("aucune tâche n'est supprimée",function(){
                expect($scope.listOfTasks.length).toEqual(1);
                expect($scope.listOfTasks[0].text).toEqual("toto");
                expect($scope.listOfTasks[0].done).toBeFalsy();    
            });

        });

        describe("appel sur une liste de tâche vide",function(){
            beforeEach(function(){
                $scope.listOfTasks=[];
                $scope.deleteTask(10);
            });

            it("la liste de tâche reste vide",function(){
                expect($scope.listOfTasks.length).toEqual(0);
            });

        });

        describe("appel avec un index inconnu",function(){
            beforeEach(function(){
                $scope.listOfTasks = [{text:"toto",done:false}];
                $scope.deleteTask(2);
            });

            it("la liste n'est pas modifiée",function(){
                expect($scope.listOfTasks.length).toEqual(1);
                expect($scope.listOfTasks[0].text).toEqual("toto");
                expect($scope.listOfTasks[0].done).toBeFalsy();    
            });

        });

        describe("appel avec un index valide",function(){
            beforeEach(function(){
                $scope.listOfTasks = [{text:"toto",done:false}];
                $scope.deleteTask(0);
            });

            it("la tâche est supprimée de la liste",function(){
                expect($scope.listOfTasks.length).toEqual(0);  
            });
        });
    }); 

    describe("calcul du nombre de tâche réalisées",function(){
        describe("avec une liste de tâche vide",function(){
            beforeEach(function(){
                $scope.nbDoneTask=0;
                $scope.listOfTasks=[];
                $scope.calculateDoneTasks();
            });

            it("il n'y a aucune tâche réalisée",function(){
                expect($scope.nbDoneTask).toEqual(0);
            });
        });

        describe("avec une liste de tâche non réalisées",function(){
            beforeEach(function(){
                $scope.nbDoneTask=0;
                $scope.listOfTasks = [{text:"toto",done:false}];
                $scope.calculateDoneTasks();    
            });

            it("il n'y a aucune tâche réalisée",function(){
                expect($scope.nbDoneTask).toEqual(0);
            });
        });

        describe("avec une liste de tâches réalisées",function(){
            beforeEach(function(){
                $scope.nbDoneTask=0;
                $scope.listOfTasks = [{text:"toto",done:true}];
                $scope.calculateDoneTasks();    
            });

            it("il y a 1 tâche réalisée",function(){
                expect($scope.nbDoneTask).toEqual(1);
            });
        });
    });

    describe("watch sur la liste des tâches",function(){
        beforeEach(function(){
            $scope.nbDoneTask=0;
            $scope.listOfTasks=[];
            $scope.$digest();
            $scope.listOfTasks = [{text:"toto",done:true}];
            $scope.$digest();
        });

       it("il y a 1 tâche réalisée",function(){
            expect($scope.nbDoneTask).toEqual(1);
        });
    });

});