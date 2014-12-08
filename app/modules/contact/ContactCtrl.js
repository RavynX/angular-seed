(function() {
  'use strict';

  var ContactCtrl = function() {

  };

  angular
    .module('contact', [])
    .config(['$routeProvider', function($routeProvider){
      $routeProvider
        .when('/contact', {
          templateUrl: 'modules/contact/contactView.html',
          controllerAs: 'contact',
          controller: ContactCtrl
        });
    }]);

})();
