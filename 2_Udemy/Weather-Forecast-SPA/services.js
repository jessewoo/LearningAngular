// SERVICES
weatherApp.service('cityService', function() {
    var self = this;
    this.city = 'New York, NY';
});


// Inject $http service into array, pass it to the function
weatherApp.service("weatherService", ['$http', function($http) {

	this.GetWeather = function(city, days) {
		// Set response as a variable
		var promise = $http.get("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&cnt=" + days + "&appid=f6486ea3df39c27e86d597599f64f8f5")
			.then( function (response) {
				// console.log(response.data);
				results = response.data;
				return results;
			});

		// console.log(promise);
		return promise;
	}

	
}])