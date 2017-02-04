var angularApp = angular.module('angularApp', ['ngRoute']);

angularApp.config(function($routeProvider) {

	$routeProvider

	// Connnect it to that mainController. Changing the HASH
	.when('/', {
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})

	.when('/second/', {
		templateUrl: 'pages/second.html',
		controller: 'secondController'
	})

	.when('/second/:num', {
		templateUrl: 'pages/second.html',
		controller: 'secondController'
	})

})

// $log = singleton, only ONE object, big memory savings
// $scope = is a CHILD scope, exception to the rule, not a singleton
angularApp.controller('mainController', ['$scope', '$location', '$log', function ($scope, $location, $log) {

	// Know what is in the hash
	$log.info($location.path());
	$scope.name = "Main";

	$log.main = "Property from main";
	$log.log($log);

}]);

angularApp.controller('secondController', ['$scope', '$location', '$log', '$routeParams', function ($scope, $location, $log, $routeParams) {

	// Know what is in the hash
	$log.info($location.path());
	$scope.name = "Second";
	$scope.num = $routeParams.num || 1 ;

	$log.second = "Property from second";
	$log.log($log);

}]);