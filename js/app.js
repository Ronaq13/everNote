angular.module('myApp', ['ngMaterial', 'ui.router'])
    .controller('myController', ['$scope', function($scope) {
        $scope.name = "Angular Done";
        $scope.contents = [
            { heading: 'Best Book', text: 'HC verma', imageSRC: 'images/book.jpeg' },
            { heading: 'Evening', text: 'Will go to have my dish', imageSRC: 'images/dish.jpeg' }
        ];
    }]);