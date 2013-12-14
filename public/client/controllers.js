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
.controller('shortenController', function($scope, $http, $sce){
  $scope.createLink = function(){
    $http({
      method: 'POST',
      url: '/links',
      data: this.newLink
    })
    .success(function(data){
      console.log(data);
      var now = new Date();
      var minuteAgo = new Date(now);
      minuteAgo.setMinutes(now.getMinutes() - 1);
      if (new Date(data.created_at) < minuteAgo) {
        var url = data.base_url + '/' + data.code;
        $scope.urlExists = 'This shortened url already exists as:' + $sce.trustAsHtml('<a href="' + url + '"/>' + url + '</a>');
      } else {
        $scope.urlExists = '';
      }
      $scope.newLink = "";
      $scope.inputLink.$setPristine();
    });
  };
});