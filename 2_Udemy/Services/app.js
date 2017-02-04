var angularApp = angular.module('angularApp', ['ngRoute']);

// Prevent Angular Changing All Slashes in URL to %2f
angularApp.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);

angularApp.config(function($routeProvider) {

	$routeProvider

	// http://stackoverflow.com/questions/18586921/how-to-launch-html-using-chrome-at-allow-file-access-from-files-mode
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

angularApp.service('nameService', function() {
   
    var self = this;
    this.name = 'John Doe';
    
    this.namelength = function() {
        return self.name.length;
    };
    
});

// Dependency Injection - nameService
angularApp.controller('mainController', ['$scope', '$log', 'nameService', function($scope, $log, nameService) {

	// $scope is NOT a singleton
	$scope.name = nameService.name;

	// Watches the "name" property on the $scope when it changes
	$scope.$watch('name', function() {
		// Update the nameService.name
		nameService.name = $scope.name;
	})

    $log.log(nameService.name);
    $log.log(nameService.namelength());

}]);


angularApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function ($scope, $log, $routeParams, nameService) {

	$scope.name = nameService.name;
	$scope.num = $routeParams.num || 1 ;

	$scope.$watch('name', function() {
		// Update the nameService.name
		nameService.name = $scope.name;
	})

}]);