(function() {
  'use strict';

  var HomeCtrl = function() {

  };

  angular
    .module('home', [])
    .config(['$routeProvider', function($routeProvider){
      $routeProvider
        .when('/', {
          templateUrl: 'modules/home/homeView.html',
          controllerAs: 'home',
          controller: HomeCtrl
        });
    }]);
})();
