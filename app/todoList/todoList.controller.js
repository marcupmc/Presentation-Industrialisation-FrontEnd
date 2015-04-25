TodoList.controller('TodoListCtrl',['$scope',function($scope){

   $scope.currentTask="";
   $scope.listOfTasks=[];

   $scope.addTask=function(){
        $scope.listOfTasks.unshift($scope.currentTask);
        $scope.currentTask="";
   }
}]);