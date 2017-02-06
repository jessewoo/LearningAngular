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
	$scope.people = [
	{
		name: 'Jesse Woo',
		address: '456 Main St.',
		city: 'New York',
		state: 'NY',
		zip: '11111'
	},
	{
		name: 'Cole Christie',
		address: '123 Broadway St.',
		city: 'San Diego',
		state: 'CA',
		zip: '11111'
	},
	{
		name: 'Chris Randle',
		address: '987 One St.',
		city: 'San Francisco',
		state: 'CA',
		zip: '11111'
	}]


	$scope.formattedAddress = function(person) {
		return person.address + ', ' + person.city + ', ' + person.state + ' ' + person.zip;
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
			personObject: "=",
			formattedAddressFunction: "&"
		},
		link: function(scope, elements, attrs){
			console.log("Post-linking...");
			console.log("Model" + scope);
			
			// Functions that you can run, changes you can make
			// Control it's output, scope. Nice and encapsulated
			if (scope.personObject.name == "Jesse Woo") {
				elements.removeAttr('class');
			}
			// Dealing with Code
			console.log("View" + elements);

		}

	}
})


