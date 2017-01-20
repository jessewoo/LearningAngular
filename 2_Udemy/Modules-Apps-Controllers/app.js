// MODULE
var angularApp = angular.module('angularApp', []);

var Person = function(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

function logPerson() {
  //  Currently it'a a dependency...if you need to change john, you change it inside the function
  var john = new Person('John', 'Doe');
  console.log(john);
}

logPerson();

// CONTROLLERS
angularApp.controller('mainController', ['$scope', function ($scope) {

  // Whatever is in here is the MODEL

}]);
