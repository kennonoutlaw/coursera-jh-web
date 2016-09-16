(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchMenu = "";
  $scope.lunchMessage = "";
  $scope.lunchMessageColor = "";

  var EMPTY_MENU = 0;
  var ENOUGH_TO_EAT = 3;

  $scope.checkIfTooMuch = function () {
    var menuCount = getMenuCount();

    //Note: checking if menuCount is 0 instead of checking if lunchMessage == ""
    //      because I also want to print this message if the user enters
    //      something like this ,,,,,,,,,
    if (menuCount == EMPTY_MENU) {
      $scope.lunchMessage = "Please enter data first";
      $scope.lunchMessageColor = "red";
    }
    else if (menuCount <= ENOUGH_TO_EAT) {
      $scope.lunchMessage = "Enjoy!";
      $scope.lunchMessageColor = "green";
    }
    else {
      $scope.lunchMessage = "Too much!";
      $scope.lunchMessageColor = "green";
    }
  };

  function getMenuCount() {
    var count = 0;
    var menuItems = $scope.lunchMenu.split(",");
    for (var i in menuItems)
      if (menuItems[i].trim().length > 0)
        count++;

    return count;
  }

}

})();
