'use strict';

angular.module('fosdemo',['ngRoute','ngResource'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/',{templateUrl:'views/landing.html',controller:'LandingPageController'})
      .when('/Todos',{templateUrl:'views/Todo/search.html',controller:'SearchTodoController'})
      .when('/Todos/new',{templateUrl:'views/Todo/detail.html',controller:'NewTodoController'})
      .when('/Todos/edit/:TodoId',{templateUrl:'views/Todo/detail.html',controller:'EditTodoController'})
      .otherwise({
        redirectTo: '/'
      });
  }])
  .controller('LandingPageController', function LandingPageController() {
  })
  .controller('NavController', function NavController($scope, $location) {
    $scope.matchesRoute = function(route) {
        var path = $location.path();
        return (path === ("/" + route) || path.indexOf("/" + route + "/") == 0);
    };
  });
