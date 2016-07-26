/*global app*/
app.controller('problemController', ['$scope', '$http', function ($scope, $http) {
    'use strict';
    $scope.pokemons = {};
    $scope.gender = "0";

    $scope.getPokemons = function () {

        $http.get("http://pokeapi.co/api/v2/gender/" + $scope.gender)
            .success(function (response) {
                $scope.pokemons = response;
            })
            .error(function (response) {
                console.log(response);
            });
    };
}]);