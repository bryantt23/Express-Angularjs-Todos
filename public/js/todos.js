
    angular.module('myApp', []).controller('namesCtrl', function ($scope, $http) {
        $scope.name = "jane doe";

        const updateJsonFile = () => {

            console.log((JSON.stringify({ "todos": $scope.todos })));

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