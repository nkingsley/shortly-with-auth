angular.module('shortlyApp')
.controller('mainController', function($scope, $http){
  $http({
    method: 'GET',
    url: '/links'
  })
  .success(function(data) {
    console.log(data);
    $scope.links = data;
  });
});