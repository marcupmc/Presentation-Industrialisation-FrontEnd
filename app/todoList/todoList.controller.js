TodoList.controller('TodoListCtrl',['$scope',function($scope){

   $scope.currentTask="";
   $scope.listOfTasks=[];

   $scope.addTask=function(){
        var newTask={
            text:$scope.currentTask,
            done:false
        }
        $scope.listOfTasks.unshift(newTask);
        $scope.currentTask="";
   }

   $scope.doneTask=function(task){
        task.done=true;
   };
}]);