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
    let sum = Math.round(7400.9)
    // Additional Code
    $scope.numbers = [300, 400, 500]
    $scope.name = "Rohito"
    $scope.sum = sum
    $scope.people = [
      {
        name: "Rohito",
        team: "Raptors"
      },
      {
        name: "Bhambhani",
        team: "Bulls"
      },
      {
        name: "Rohit",
        team: "Rajasthan Royals"
      }
    ]
  }
])
