'use strict';

// Declare app level module which depends on views, and components
angular.module('activity', [
  'ngRoute',
  'ngResource',
  'activity.home',
  'activity.search',
  'activity.detail'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
