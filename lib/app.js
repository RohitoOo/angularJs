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
    $scope.deleteThisPerson = function(person) {
      let removeThisPerson = $scope.people.indexOf(person)
      console.log(removeThisPerson)
      $scope.people.splice(removeThisPerson, 1)
    }

    $scope.addPerson = function(name, team) {
      let newPerson = {
        name,
        team,
        registered: true
      }
      $scope.people.push(newPerson)

      $scope.newPersonName = ""
      $scope.newPersonTeam = ""
    }

    let sum = Math.round(7400.9)
    // Additional Code
    $scope.numbers = [300, 400, 500]
    $scope.name = "Rohito"
    $scope.sum = sum
    $scope.people = [
      {
        name: "Rohito",
        team: "Raptors",
        registered: true
      },
      {
        name: "Bhambhani",
        team: "Bulls",
        registered: true
      },
      {
        name: "Rohit",
        team: "Rajasthan Royals",
        registered: true
      },
      {
        name: "John",
        team: "Lakers",
        registered: false
      },
      {
        name: "Doe",
        team: "Real Madrid",
        registered: false
      },
      {
        name: "Tony",
        team: "Italy",
        registered: false
      }
    ]
  }
])
