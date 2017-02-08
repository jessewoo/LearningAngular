// DIRECTIVES
weatherApp.directive("weatherPanel", function() {
	return {
		restrict: 'AE',
		templateUrl: 'directives/panel.html',
		replace: true,
		scope: {
			weatherDay: "=",
			convertToStandard: "&",
			convertToDate: "&",
			dateFormat: "@"
		}

	}
})
