// MODULE
var angularApp = angular.module('angularApp', []);

var Person = function(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

function logPerson(person) {
  console.log(person);
}

// Pass the object to the function - Dependency Injection (like Syringe)
// Do not create the object inside the function - gets complicated to manage
var john = new Person('John', 'Doe');
logPerson(john);

// CONTROLLERS
// Can pass $scope
angularApp.controller('mainController', function ($scope) {
  // Whatever is in here is the MODEL

  // Add variables and function to the scope, becoming the middle view betwen the controller and the view. $scope is the data that will go back and forth between controlle and view.
  /*
  $scope.name = "Jane Doe";
  $scope.occupation = "Coder";

  $scope.getname = function() {
    return 'Jonh Doe';
  }

  $scope.getName();
  */

  // $scope object was created and passed to the controller function
  // Angular looked at the controller function and parsed out $scope
  // Put variable correctly in function and you will get it. 
  console.log($scope);


});

var searchPeople = function (firstName, lastName, height, age, occupation) {
  return "Jesse Woo";
}

// Finding the arguments of a certain function
console.log(angular.injector().annotate(searchPeople));


console.log(searchPeople(1,2,3,4,5));

// Turn a function into a string. Parse out, expected to see the arguments
console.log(searchPeople);

var searchPeopleString = searchPeople.toString();
console.log(searchPeopleString);
