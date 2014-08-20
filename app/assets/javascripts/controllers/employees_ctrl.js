(function () {
  "use strict";

  // >>>***BEGIN NO IMPORTANT CODE***<<<
  //|module object=====|
  angular.module("app");
  //=> Object {
  //    .........
  //
  // The angular module object has a few methods. One that you've
  // seen before is controller.
  //
  //|module object=======|method======|
  angular.module("app").controller;
  //=> function () {
  //    .........
  //
  // If we put () behind a function in JavaScript, then we involk, or run, it.
  //
  //|module object=====|method=====|
  angular.module("app").controller();
  //
  // Below, we're going to involk/ run/ put () behind/ that
  // controller method for reals. We're going to
  // pass it 2 arguments, the first the name of the controller,
  // and the second an anonymous function. Angular will involk
  // that anonymous function when the page loads.
  // >>>***END NO IMPORTANT CODE***<<<


  //|module object=====|method====|argument1======|argument2================
  angular.module("app").controller("employeesCtrl", function ($scope, $http) {
    $scope.page = 1;

    $scope.init = function(stuff){
      $scope.employees = stuff.employees;

    }
    $scope.next = function(click){
      console.log(click)
      if(click === "next"){
      $scope.page += 1;
      getData();
      }else if(click ==="prev"){
      $scope.page -= 1;
      getData();
      };
    };  
    function getData(){
      $http.get("/api/employees?page=" + $scope.page).then(function (response) {
      $scope.employees = response.data;
      });
    };
    $http.get("/api/departments?").then(function (response) {
      $scope.departments = response.data;
    });

  });


})();
