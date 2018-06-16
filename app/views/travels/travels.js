'use strict';

angular.module('app.travels', ['ngRoute', 'ui-leaflet'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/travels', {
            templateUrl: 'views/travels/travels.html',
            controller: 'TravelsCtrl'
        });
    }])

    .controller('TravelsCtrl', function($scope, $http) {
        $scope.travels = [];
        $scope.loadMorePagination = true;
        $scope.page = 0;

        //map
        $scope.center = {};
        $scope.bounds = {};
        $scope.markers = [];
        $scope.paths = [];
        $scope.tiles = {
            url: "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            options: {
                attribution: '<a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }
        };

        $http.get(urlapi + 'travels?page=' + $scope.page)
            .then(function(data) {
                console.log('data success');
                console.log(data);
                $scope.travels = data.data;
                //draw markers on map
                $scope.markers = [];
                for (var i = 0; i < $scope.travels.length; i++) {
                    $scope.markers.push({
                        lat: Number($scope.travels[i].from.lat),
                        lng: Number($scope.travels[i].from.long),
                        message: $scope.travels[i].from.name
                    });
                    $scope.markers.push({
                        lat: Number($scope.travels[i].to.lat),
                        lng: Number($scope.travels[i].to.long),
                        message: $scope.travels[i].to.name
                    });
                }
                //draw lines between markers on map
                $scope.paths = {};
                var paths = [];
                for (var i = 0; i < $scope.markers.length; i++) {
                    var x = $scope.markers[i].lat;
                    var y = $scope.markers[i].lng;
                    paths.push([x, y]);
                }
                $scope.paths = {
                    p1: {
                        color: '#9575CD',
                        weight: 8,
                        latlngs: paths
                    }
                };
                //var maplines = L.polyline(lines).addTo(map)

                $scope.center = {
                    lat: (Number($scope.travels[0].from.lat) + Number($scope.travels[0].to.lat)) / 2,
                    lng: (Number($scope.travels[0].from.long) + Number($scope.travels[0].to.long)) / 2,
                    zoom: 4
                };
            }, function(data) {
                console.log('data error');
            });
    });
