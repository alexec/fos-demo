
angular.module('fosdemo').controller('NewTodoController', function ($scope, $location, locationParser, TodoResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.todo = $scope.todo || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/Todos/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        TodoResource.save($scope.todo, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/Todos");
    };
});