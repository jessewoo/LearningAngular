// MODULE
var angularApp = angular.module('angularApp', []);

var Person = function(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

function logPerson(person) {
  console.log(person);
}

// Pass the object to the function - Dependency Injection
// Do not create the object inside the function - gets complicated to manage
var john = new Person('John', 'Doe');
logPerson(john);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', function ($scope) {
  // Whatever is in here is the MODEL
}]);
