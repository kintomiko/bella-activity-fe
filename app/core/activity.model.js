/**
 * Created by kindai on 22/07/16.
 */

angular.module('activity.model', ['ngResource'])
    .factory('Activity', ['$resource',
        function($resource){
            return $resource('http://127.0.0.1:8090/activity/:actId', {}, {
                all: {method:'GET', params: {actId: ''}, isArray:true}
            });
        }]);