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

    describe("ajout d'une tache",function(){
        beforeEach(function(){
            $scope.listOfTasks=[];
            $scope.currentTask="Test";
            $scope.addTask();
        });
        it("la liste contient un element",function(){
            expect($scope.listOfTasks.length).toEqual(1);
        });

    });

});