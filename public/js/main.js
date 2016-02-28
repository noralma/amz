var myApp = angular.module('myApp', []);

myApp.controller('MainController', ['$scope', '$http', function($scope, $http) {
  $scope.formData = {};

  $scope.buscar=function() {
    $http.get('/gafas')
        .success(function(data) {
            $scope.resultado = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
  };      
}]);
