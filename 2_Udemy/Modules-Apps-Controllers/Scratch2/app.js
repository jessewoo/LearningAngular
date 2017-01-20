var angularApp = angular.module('angularApp', ['ngMessages', 'ngResource']);

// Last element of the array should be the function run.
// The parameters before should be variables that gets passed into the function

/*
angularApp.controller('mainController', ['$scope', '$log', function ($scope, $log, $filter, $resource) {
  $log.info($scope);
}]);
*/

// Minified Version - ORDER MATTERS
angularApp.controller("mainController",["$scope","$log",function(a,b){b.info(a)}]);
