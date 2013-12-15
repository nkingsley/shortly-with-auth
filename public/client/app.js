angular.module('shortlyApp', ['ngRoute','ngSanitize'])
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
  .when('/history/:code', {
    templateUrl: 'client/templates/historyTemplate.html',
    controller: 'clickHistoryController'
  })
  .when('/login', {
    templateUrl: 'client/templates/loginTemplate.html',
    controller: 'loginController'
  })
  .when('/signup', {
    templateUrl: 'client/templates/signupTemplate.html',
    controller: 'loginController'
  })
  .otherwise({
    redirectTo: '/'
  });
})
.run(function($rootScope, authService){
  $rootScope.$on('$routeChangeStart', function(event,nextUrl,currentUrl){
    if (nextUrl.$$route.controller !== "loginController"){
      console.log("notlogin");
    }
  });
});