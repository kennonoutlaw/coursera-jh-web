(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])

.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var itemBuyer = this;

  itemBuyer.items = ShoppingListCheckOffService.getToBuyItems();

  itemBuyer.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };
}

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var alreadyBought = this;

  alreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  var toBuyItems = [
    { name: "cookies", quantity: 10 }, { name: "eggs", quantity: 5 },
    { name: "apples", quantity: 8 }, { name: "packs of bacon", quantity: 9 },
    { name: "candy", quantity: 7 }, { name: "bags of grapes", quantity: 6 },
    { name: "loaves of bread", quantity: 4 }, { name: "cartons of milk", quantity: 5 }];
  var alreadyBoughtItems = [];

  service.buyItem = function (toBuyItemIndex) {
    var item = toBuyItems[toBuyItemIndex];
    alreadyBoughtItems.push(item);
    toBuyItems.splice(toBuyItemIndex, 1);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getAlreadyBoughtItems = function () {
    return alreadyBoughtItems;
  };
}

})();
