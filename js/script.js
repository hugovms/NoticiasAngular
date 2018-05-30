 var app = angular.module('myApp', []);
 app.controller('noticias', function ($scope, $http) {
     var limitStep = 3;
     $scope.limit = limitStep;
     $scope.incrementLimit = function () {
         $scope.limit += limitStep;
     };
     $scope.decrementLimit = function () {
         $scope.limit -= limitStep;
     };
     $http.get("https://api.myjson.com/bins/10nms7")
         .then(function (response) {
             $scope.names = response.data.artigos;
         });
 });
