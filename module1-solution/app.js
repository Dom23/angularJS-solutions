(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

 $scope.lunchCheckInputBox = "";

 $scope.checkIfToMuch = function() {

    var lunchItemsCount = countLunchItems($scope.lunchCheckInputBox);
    $scope.message = setMessage(lunchItemsCount);
    $scope.messageColor = {"color" : setColor(lunchItemsCount)};
    $scope.inputBoxBorderColor = {"border" : "solid " + setColor(lunchItemsCount)};

  };

function countLunchItems(string) {

  var itemsCount = 0;

  if ($scope.lunchCheckInputBox.length) {
    var itemArray = string.split(',');
    for (var i = 0; i < itemArray.length; i++) {
      itemArray[i] = itemArray[i].trim();
      if (itemArray[i] != "") {
        itemsCount++;
      }
    }
  }

  return itemsCount;
};

function setMessage(lunchItemsCount) {

  var message = "";

  if (lunchItemsCount == 0) {
    message = "Please enter data first";
  } else if (lunchItemsCount <= 3) {
    message = "Enjoy!";
  } else {
    message = "Too much!";
  }

  return message;
};

function setColor(lunchItemsCount) {

  var color = "";

  if (lunchItemsCount == 0) {
    color = "red";
  } else {
    color = "green";
  }
  return color;
};


}

})();
