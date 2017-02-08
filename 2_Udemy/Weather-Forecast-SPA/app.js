// MODULE
var weatherApp = angular.module('WeatherApp', ['ngRoute','ngResource']);

// Prevent Angular Changing All Slashes in URL to %2f
weatherApp.config(['$locationProvider', function($locationProvider) {
  
  $locationProvider.hashPrefix('');

}]);