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

   $scope.deleteTask=function(index){
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

   $scope.$watchCollection("listOfTasks",function(newValue,oldValue){
        if(newValue===oldValue)return;
        $scope.calculateDoneTasks();
   });


}]);