(function () {
'use strict';

angular.module('data')
.controller('CategoriesListController', CategoriesListController);

CategoriesListController.$inject = ['items'];
function CategoriesListController(items) {
  var catList = this;
  catList.items = items.data;
}

})();
