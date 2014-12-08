(function() {
  'use strict';

  var ServicesCtrl = function() {

  };

  angular
    .module('services', [])
    .config(['$routeProvider', function($routeProvider){
      $routeProvider
        .when('/services', {
          templateUrl: 'modules/services/ServicesView.html',
          controllerAs: 'services',
          controller: ServicesCtrl
        });
    }]);
})();
