var angularApp = angular.module('angularApp', ['ngRoute']);

// Prevent Angular Changing All Slashes in URL to %2f
angularApp.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);

angularApp.config(function($routeProvider) {

	$routeProvider
	// ROUTE

	// http://stackoverflow.com/questions/18586921/how-to-launch-html-using-chrome-at-allow-file-access-from-files-mode
	// http-server -a localhost -p 8000 -c-1
	.when('/', {
		// VIEW with template URL
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


// Dependency Injection - nameService
// CONTROLLER
angularApp.controller('mainController', ['$scope', '$log', function($scope, $log) {

	// MODEL
	$scope.person = {
		name: 'Jesse Woo Hoo',
		address: '456 Main St., New York, NY'
	}

}]);


angularApp.controller('secondController', ['$scope', '$log', '$routeParams', function ($scope, $log, $routeParams) {

	

}]);


// Name the directive, give it a function to return data
// Replace: true - replaces the HTML
angularApp.directive("searchResult", function() {
	return {
		restrict: 'AEMC',
		templateUrl: 'directives/searchresult.html',
		replace: true,
		scope: {
			personName: "@",
			personAddress: "@"
		}

	}
})