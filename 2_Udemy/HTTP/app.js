var angularApp = angular.module('angularApp', []);

angularApp.controller('mainController', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {

	$scope.handle = '';

	$scope.lowercasehandle = function() {
		return $filter('lowercase')($scope.handle);
	};

	$scope.characters = 5;

	$http.get('/api')
		.success(function (result) {
			$scope.rules = result;
		})
		.error(function(data, status) {
			console.log(data);
		})

	$scope.newRule = '';
	$scope.addRule = function () {

		// Send to the server, JSON object. POST to server, update the RULES in the scope. 
		$http.post('/api', { newRule: $scope.newRule })
			.success(function (result) {
				$scope.rules = result;
				$scope.newRule = "";
			})
			.error(function(data, status) {
				console.log(data);
			})

	}

}]);