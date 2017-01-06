(function(){

'Use Strict';

angular.module('LunchChecker',[])
.controller('LunchCheckerController', lunchController);

lunchController.$inject = ['$scope'];

function lunchController($scope) {
  $scope.dishes = "";

  $scope.lunchCheck = function () {
    if ($scope.dishes == "") {
       alert ("Please enter data first");
    } else {
       var dish_array = $scope.dishes.split(",");

       if (dish_array.length > 3) {
         alert ("Too much!");
       } else {
         alert ("Enjoy!");
       }
    }
  };
};

})();
