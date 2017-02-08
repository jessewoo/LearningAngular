// CONTROLLERS
weatherApp.controller('homepageController', ['$scope', '$location', 'cityService', function ($scope, $location, cityService) {

	$scope.city = cityService.city;
	$scope.$watch('city', function() {
		cityService.city = $scope.city;
	})

	$scope.submit = function() {
		$location.path("/forecast");

	};

}]);

weatherApp.controller('forecastController', ['$scope', 'cityService', '$routeParams', 'weatherService', function ($scope, cityService, $routeParams, weatherService) {

	$scope.city = cityService.city;

	$scope.days = $routeParams.days || '2'

	// Encapsulized and Centralized in getting that data. Callback
	weatherService.GetWeather($scope.city, $scope.days).then(function(response) {
		$scope.weatherResult = response;
	})

	$scope.convertToFahrenheit = function(degK) {
		return Math.round((1.8 * (degK - 273)) + 32);
	}	

	$scope.convertToDate = function(dt) {
		return new Date(dt * 1000);
	}	


}]);