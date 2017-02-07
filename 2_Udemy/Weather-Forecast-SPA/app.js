// MODULE
var weatherApp = angular.module('WeatherApp', ['ngRoute','ngResource']);

// Prevent Angular Changing All Slashes in URL to %2f
weatherApp.config(['$locationProvider', function($locationProvider) {
  
  $locationProvider.hashPrefix('');

}]);

// ROUTES
weatherApp.config(function($routeProvider) {
	$routeProvider

	// Homepage
	.when('/', {
		templateUrl: 'pages/homepage.html',
		controller: 'homepageController'
	})

	// Forecast
	.when('/forecast/', {
		templateUrl: 'pages/forecast.html',
		controller: 'forecastController'
	})

	// Forecast
	.when('/forecast/:days', {
		templateUrl: 'pages/forecast.html',
		controller: 'forecastController'
	})

})

// SERVICES
weatherApp.service('cityService', function() {
    var self = this;
    this.city = 'New York, NY';
});

// CONTROLLERS
weatherApp.controller('homepageController', ['$scope', '$location', 'cityService', function ($scope, $location, cityService) {

	$scope.city = cityService.city;
	$scope.$watch('city', function() {
		cityService.city = $scope.city;
	})

}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$http', 'cityService', '$routeParams', function ($scope, $resource, $http, cityService, $routeParams) {

	$scope.city = cityService.city;

	$scope.days = $routeParams.days || 2

	// HTTP
	$http.get("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + $scope.city + "&cnt=" + $scope.days + "&appid=f6486ea3df39c27e86d597599f64f8f5")
		.then( function (response) {
			$scope.weatherResult = response.data;
			console.log(response.data);
	});

	$scope.convertToFahrenheit = function(degK) {
		return Math.round((1.8 * (degK - 273)) + 32);
	}	

	$scope.convertToDate = function(dt) {
		return new Date(dt * 1000);
	}	


}]);

