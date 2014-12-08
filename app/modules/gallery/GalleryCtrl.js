(function() {
  'use strict';

  var GalleryCtrl = function() {

  };

  angular
    .module('gallery', [])
    .config(['$routeProvider', function($routeProvider){
      $routeProvider
        .when('/gallery', {
          templateUrl: 'modules/gallery/GalleryView.html',
          controllerAs: 'gallery',
          controller: GalleryCtrl
        });
    }]);
})();
