/*global angular*/
var app = angular.module('pokemonApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    'use strict';
    $routeProvider.when('/', {templateUrl: 'views/home.html', controller: 'homeController'});
    $routeProvider.when('/problem', {templateUrl: 'views/problem.html', controller: 'problemController'});
    $routeProvider.when('/howtosolve', {templateUrl: 'views/howtosolve.html', controller: 'howToSolveController'});
    $routeProvider.otherwise({redirectTo: '/'});
}]);