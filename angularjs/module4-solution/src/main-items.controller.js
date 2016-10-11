(function () {
'use strict';

angular.module('data')
.controller('ItemsListController', ItemsListController);

ItemsListController.$inject = ['items'];
function ItemsListController(items) {
  var itemList = this;
  itemList.items = items.data.menu_items;
  itemList.items.categoryName = items.data.category.name;
}

})();
