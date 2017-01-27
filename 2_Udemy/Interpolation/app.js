var angularApp = angular.module('angularApp', ['ngMessages', 'ngResource']);

// Last element of the array should be the function run.
// The parameters before should be variables that gets passed into the function


angularApp.controller('mainController', ['$scope', '$log', '$timeout', function ($scope, $log, $timeout) {

  // $log.info($scope);
  // Whatever is sitting in the $scope is AVAILABLE in that controller
  // $scope is the GLUE from controller to view. Ran interpolation
  $scope.name = "Tony";

  // Changing variable, not the HTML DOM. Just worry about the update data
  // INJECT Utilities
  $timeout(function() {
    $scope.name = "Everybody";
  }, 3000);

}]);

// Minified Version - ORDER MATTERS
// angularApp.controller("mainController",["$scope","$log",function(a,b){b.info(a)}]);
