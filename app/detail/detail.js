/**
 * Created by kindai on 22/07/16.
 */

'use strict';

angular.module('activity.detail', ['ngRoute', 'activity.model'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/detail/:actId', {
            templateUrl: 'detail/detail.html',
            controller: 'DetailCtrl'
        });
    }])

    .controller('DetailCtrl', ['Activity', '$scope', '$routeParams', "$http", function(Activity, $scope, $routeParams, $http) {
        $scope.activity = Activity.get({actId: $routeParams.actId});
        $scope.locations = ["Beijing", "Guangdong", "Oversea"]

        $scope.submit = function() {

        }

        $scope.uploadFile = function(files) {
            var fd = new FormData();
            //Take the first selected file
            fd.append("file", files[0]);

            $http.post("http://127.0.0.1:8090/files/", fd, {
                withCredentials: true,
                headers: {'Content-Type': undefined },
                transformRequest: angular.identity
            });

        };
    }]);