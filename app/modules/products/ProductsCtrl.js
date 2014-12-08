(function() {
  'use strict';

  var ProductsCtrl = function() {

  };

  angular
    .module('products', [])
    .config(['$routeProvider', function($routeProvider){
      $routeProvider
        .when('/products', {
          templateUrl: 'modules/products/ProductsView.html',
          controllerAs: 'products',
          controller: ProductsCtrl
        });
    }]);
})();
