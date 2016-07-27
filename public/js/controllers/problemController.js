/*global app*/
app.controller('problemController', ['$scope', '$http', function ($scope, $http) {
    'use strict';
    $scope.charactersIds = [1011010, 1009368, 1009220, 1017109, 1017107, 1009262, 1009718, 1010979, 1009664, 1009165];
    $scope.characters = [];

    $scope.ts = 1;
    $scope.apikey = '5c1a0bed76f0c0a03d011c9490bc32b5';
    $scope.hash = '784b0e42bf98a49a0c2c7992fbf9d797';

    var addCharacter = function (character) {
        character.order = $scope.charactersIds.indexOf(character.id) + 1;
        $scope.characters.push(character);
    };

    var getCharacter = function (id) {
        $http({
            url: "http://gateway.marvel.com/v1/public/characters/" + id,
            method: "GET",
            params: {ts: $scope.ts, apikey: $scope.apikey, hash: $scope.hash}
        })
            .success(function (response) {
                addCharacter(response.data.results[0]);
            })
            .error(function (response) {
                console.log(response);
            });
    };

    var i = 0;
    for (i = 0; i < $scope.charactersIds.length; i += 1) {
        getCharacter($scope.charactersIds[i]);
    }

    $scope.pathTumbnail = function (character) {
        return character.thumbnail.path + "/portrait_medium.jpg";
    };
}]);