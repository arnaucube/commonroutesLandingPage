'use strict';

// var urlapi = "http://localhost:3000/api/";
//var urlapi = "http://192.168.1.36:3000/api/";
var urlapi = "http://routes.fair.coop:3000/api/";

// Declare app level module which depends on views, and components
angular.module('app', [
  'ngRoute',
  'ngMessages',
  'angularBootstrapMaterial',
  'app.navbar',
  'app.travels',
  'app.travel'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/travels'});
}]);
