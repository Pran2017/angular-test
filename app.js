(function () {

'use strict';

angular.module('NameCalculator', [])

.controller('NameCalculatorController', msgController);

msgController.$inject = ['$scope', '$filter'];

function msgController($scope, $filter) {
$scope.name = "My Name is Billa!";
$scope.dayornight = "day";
$scope.price = 0.456;

//$scope.name = $filter('uppercase') ($scope.name);

$scope.changeNight = function () {
  $scope.dayornight = "night";
};



};

})();
