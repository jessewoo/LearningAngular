var angularApp = angular.module('angularApp', ['ngRoute']);

angularApp.config(function($routeProvider) {

	$routeProvider

	// Connnect it to that mainController. Changing the HASH
	.when('/', {
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})

	.when('/second', {
		templateUrl: 'pages/second.html',
		controller: 'secondController'
	})

})


angularApp.controller('mainController', ['$scope', '$location', '$log', function ($scope, $location, $log) {

	// Know what is in the hash
	$log.info($location.path());
	$scope.name = "Main";

}]);

angularApp.controller('secondController', ['$scope', '$location', '$log', function ($scope, $location, $log) {

	// Know what is in the hash
	$log.info($location.path());
	$scope.name = "Second";

}]);