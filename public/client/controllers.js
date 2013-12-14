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
})
.controller('shortenController', function($scope,$http){
  $scope.createLink = function(){
    $http({
      method: 'POST',
      url: '/links',
      data: this.newLink
    })
    .success(function(data){
      console.log(data);
      $scope.inputLink.$setPristine();
    });
  };
});