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