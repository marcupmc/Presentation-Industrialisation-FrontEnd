TodoList.controller('TodoListCtrl',['$scope',function($scope){

   $scope.currentTask="";
   $scope.listOfTasks=[];
   $scope.nbDoneTask=0;

   $scope.addTask=function(){
        var newTask=
        {
            text:$scope.currentTask,
            done:false
        };
        $scope.listOfTasks.unshift(newTask);
        $scope.currentTask="";
   };

   $scope.deleteTask=function(index){
        if(!index && index!==0)return;
        $scope.listOfTasks.splice(index, 1);
   };

   $scope.calculateDoneTasks=function(){
        var nbDoneTask = 0;
        var all= $scope.listOfTasks.length;
        for(i=0;i<all;i++){
            if($scope.listOfTasks[i].done){
                nbDoneTask++;
            }
        }
        $scope.nbDoneTask=nbDoneTask;
   };

   $scope.$watch("listOfTasks",function(newValue,oldValue){
        if(newValue===oldValue)return;
        $scope.calculateDoneTasks();
   },true);


}]);