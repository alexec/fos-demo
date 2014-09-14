

angular.module('fosdemo').controller('EditTodoController', function($scope, $routeParams, $location, TodoResource ) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.todo = new TodoResource(self.original);
        };
        var errorCallback = function() {
            $location.path("/Todos");
        };
        TodoResource.get({TodoId:$routeParams.TodoId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.todo);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.todo.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/Todos");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/Todos");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.todo.$remove(successCallback, errorCallback);
    };
    
    
    $scope.get();
});