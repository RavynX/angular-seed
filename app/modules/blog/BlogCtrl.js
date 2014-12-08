(function() {
  'use strict';

  var BlogCtrl = function() {

  };

  angular
    .module('blog', [])
    .config(['$routeProvider', function($routeProvider){
      $routeProvider
        .when('/blog', {
          templateUrl: 'modules/blog/BlogView.html',
          controllerAs: 'blog',
          controller: BlogCtrl
        });
    }]);
})();
