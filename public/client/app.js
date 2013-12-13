angular.module('shortlyApp', ['ngRoute'])
.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'mainTemplate',
    controller: 'mainController'
  })
  .when('/shorten', {
    templateUrl: 'shortenTemplate',
    controller: 'shortenController'
  })
  .otherwise({
    redirectTo: '/'
  });
});