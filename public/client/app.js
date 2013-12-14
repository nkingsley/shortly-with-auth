angular.module('shortlyApp', ['ngRoute', 'ngSanitize'])
.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'client/templates/mainTemplate.html',
    controller: 'mainController'
  })
  .when('/shorten', {
    templateUrl: 'client/templates/shortenTemplate.html',
    controller: 'shortenController'
  })
  .otherwise({
    redirectTo: '/'
  });
});