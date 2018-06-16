'use strict';

angular.module('app.travel', ['ngRoute', 'ui-leaflet'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/travel/:travelid', {
            templateUrl: 'views/travel/travel.html',
            controller: 'TravelCtrl'
        });
    }])

    .controller('TravelCtrl', function($scope, $http, $routeParams,
        leafletData, leafletBoundsHelpers) {
        $scope.travel = {};


        //map
        $scope.center = {
            /*lat: 0,
            lng: 0,
            zoom: 1*/
        };
        $scope.bounds = {};
        $scope.markers = [];
        $scope.tiles = {
            url: "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            options: {
                attribution: '<a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }
        };

        $http.get(urlapi + 'travels/id/' + $routeParams.travelid)
            .then(function(data, status, headers, config) {
                console.log('data success');
                console.log(data);

                $scope.travel = data.data;

                //map
                $scope.markers = [];
                $scope.markers.push({
                    lat: Number($scope.travel.from.lat),
                    lng: Number($scope.travel.from.long),
                    message: $scope.travel.from.name
                });
                $scope.markers.push({
                    lat: Number($scope.travel.to.lat),
                    lng: Number($scope.travel.to.long),
                    message: $scope.travel.to.name
                });
                $scope.center = {
                    lat: (Number($scope.travel.from.lat) + Number($scope.travel.to.lat)) / 2,
                    lng: (Number($scope.travel.from.long) + Number($scope.travel.to.long)) / 2,
                    zoom: 4
                };
            }, function(data, status, headers, config) {
                console.log('data error');
            });


    });
