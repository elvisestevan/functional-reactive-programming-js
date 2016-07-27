/*global app*/
app.controller('navController', ['$scope', '$location', function ($scope, $location) {
    'use strict';
    $scope.states = {};
    $scope.states.currentPath = $location.$$path;
    $scope.items = [{
        path: '/',
        title: 'Home'
    }, {
        path: '/problem',
        title: 'The problem'
    }, {
        path: '/howtosolve',
        title: 'How to solve'
    }];
}]);