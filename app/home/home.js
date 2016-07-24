'use strict';

angular.module('activity.home', ['ngRoute', 'activity.model'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['Activity', '$scope', function(Activity, $scope) {
  $scope.activities = Activity.all();
}]);