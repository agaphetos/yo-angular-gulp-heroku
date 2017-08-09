(function() {
  'use strict';

  angular
    .module('yo-angular-gulp-heroku')
    .config(routeConfig);

  function routeConfig($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5mode(true);
  }

})();
