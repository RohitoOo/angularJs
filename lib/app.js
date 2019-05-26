var rohitoApp = angular.module("rohitoApp", [])

// Before The App Runs
rohitoApp.config(function() {})

// As The App is Running
rohitoApp.run(function() {})

// Controller

rohitoApp.controller("appMainController", [
  "$scope",
  function($scope) {
    // Additional Code
    $scope.message = "Wasssup World!"
    $scope.name = "Rohito"
  }
])

rohitoApp.controller("formController", [
  "$scope",
  function($scope) {
    let sum = Math.round(45)
    // Additional Code
    $scope.numbers = [3, 4, 5]
    $scope.name = "Rohito"
    $scope.sum = sum
  }
])
