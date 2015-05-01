TodoList.controller('TodoListCtrl',['$scope',function($scope){

   $scope.currentTask="";
   $scope.listOfTasks=[];


   $scope.addTask=function(){
        var newTask=
        {
            text:$scope.currentTask,
            done:false
        };
        $scope.listOfTasks.unshift(newTask);
        $scope.currentTask="";
   };

   $scope.doTask= function(index){
        var doneTask  = $scope.listOfTasks[index];
        //on supprime la tache de la liste
        $scope.listOfTasks.splice(index, 1);
        //et on l'ajoute à la fin si c'est une tache finie
        if(doneTask.done)
            $scope.listOfTasks.push(doneTask);
        else
         //Sinon on la remet au debut
            $scope.listOfTasks.unshift(doneTask);
   };


}]);