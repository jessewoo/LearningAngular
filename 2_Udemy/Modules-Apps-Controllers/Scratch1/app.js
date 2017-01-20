// MODULE
// Add in different dependencies
var angularApp = angular.module('angularApp', ['ngMessages', 'ngResource']);

// CONTROLLERS - included parameters
angularApp.controller('mainController', function ($scope, $log, $filter, $resource) {
  // Add variables and function to the scope, becoming the middle view betwen the controller and the view. $scope is the data that will go back and forth between controlle and view.

// Eco-system of services
  console.log($log);

  $log.log("hello");
  $log.info("This is some info")
  $log.warn("warning")
  $log.error("error!")

  // console.log($scope);
  console.log($resource);

  $scope.name = 'John';
  $scope.formattedname = $filter('uppercase')($scope.name);

  $log.info($scope.name)
  $log.info($scope.formattedname)

});

// Number and Strings, could also have an array of functions
var things =
  [1,'2',
    function() {
      alert("Hello!");
    }];

console.log(things);
things[2]();
