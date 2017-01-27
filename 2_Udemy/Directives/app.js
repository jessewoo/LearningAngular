var angularApp = angular.module('angularApp', ['ngMessages', 'ngResource']);

angularApp.controller('mainController', ['$scope', '$filter', '$timeout', function ($scope, $filter, $timeout) {

	$scope.handle = '';

	$scope.lowercasehandle = function() {
		return $filter('lowercase')($scope.handle);
	};

	// Added handle and lowercasehandle to the WATCHLIST, runs the digest loop, starts the cycle

	$scope.$watch('handle', function(newValue, oldValue) {

		// Does a DIGEST CYCLE
		console.info("Changed");
		console.log("Old: " + oldValue);
		console.log("New: " + newValue);

	})

	// This is regular JAVASCRIPT function, it creates another EVENT LOOP in it's memory. NEW THREAD, inside JS memory. Does this Asyncronously. Runs this function, while other functions are running as well. This is OUTSIDE Angular JS context, didn't realize user had changed the value. NEVER started the Digest loop, never cycled thru the watchlist. 
	$timeout(function() {

		//  Start a DIGEST Cycle
		$scope.$apply(function() {
			$scope.handle = "hello";
			console.log("scope changed");
		})

	}, 3000);

}]);

// The View Changed the Model, and then the Model Changed the View