
    angular.module('myApp', []).controller('namesCtrl', function ($scope, $http) {
        $scope.name = "jane doe";
        $scope.todos = [];
        $scope.todosToDelete = [];
        
        $scope.toggleSelection = function (todo) {
            let index=$scope.todosToDelete.indexOf(todo);
            if(index>-1){
                $scope.todosToDelete.splice(index, 1);
            }
            else{
                $scope.todosToDelete.push(todo);
            }
            console.log($scope.todosToDelete);
        }
        
        $scope.deleteTodos = function () {
            // alert($scope.todoToAdd)
            // $scope.todos.push($scope.todoToAdd);

            console.log($scope.todos.filter(todo=>$scope.todosToDelete.indexOf(todo)===-1));

            $scope.todos=$scope.todos.filter(todo=>$scope.todosToDelete.indexOf(todo)===-1);
            testPosting();
        }

        $scope.addTodo = function () {
            // alert($scope.todoToAdd)
            $scope.todos.push($scope.todoToAdd);

            testPosting();
        }

        var testPosting = function () {
            $http.post("data", $scope.todos).
                then(function (response) {
                    console.log("posted successfully");
                }).catch(function (response) {
                    console.error("error in posting");
                })
        }

        var hi = function () {
            $http.get("data").then(function mySuccess(response) {
                $scope.todos = response.data.todos;
                // debugger;
            }, function myError(response) {
                $scope.todos = response.statusText;
            });
        }
        hi();
    });