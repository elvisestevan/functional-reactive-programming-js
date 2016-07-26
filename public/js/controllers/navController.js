/*global app*/
app.controller('navController', ['$scope', function ($scope) {
    'use strict';
    $scope.states = {};
    $scope.states.currentPath = '/#/';
    $scope.items = [{
        path: '/#/',
        title: 'Home'
    }, {
        path: '/#/problem',
        title: 'The problem'
    }, {
        path: '/#/howtosolve',
        title: 'How to solve'
    }];
}]);