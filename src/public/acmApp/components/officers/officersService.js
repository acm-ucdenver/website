(function() {
    'use strict';


    angular
        .module('acmApp')
        .factory('officersService', ['$http', '$q', officersService]);

    function officersService ($http, $q) {
        var officersEndpoint = '/officers';
        var officersService = {
            getOfficers: getOfficers
        };

        function getOfficers() {
            var deferred = $q.defer();
            $http.get(officersEndpoint)
            .success(function(data) {
                deferred.resolve(data);
            })
            .error(function(err) {
                deferred.reject(err);
            });
            return deferred.promise;
        }

        officersService.saveOfficer = function (officer) {
            var deferred = $q.defer();

            if (officer._id === "0" || typeof officer._id === 'undefined') {
                $http({
                    method: 'POST',
                    url: officersEndpoint,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    transformRequest: function (obj) {
                        var str = [];
                        for (var p in obj) {
                            str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
                        }
                        return str.join("&");
                    },
                    data: officer
                })
                .success(function () {
                        deferred.resolve(true);
                })
                .error(function () {
                    deferred.reject(false);
                });
            } else { 
                $http({
                    method: 'PUT',
                    url: officersEndpoint + '/' + officer._id,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    transformRequest: function (obj) {
                        var str = [];
                        for (var p in obj) {
                            str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
                        }
                        return str.join("&");
                    },
                    data: officer
                })
                .success(function () {
                        deferred.resolve(true);
                })
                .error(function () {
                    deferred.reject(false);
                });
            }

            return deferred.promise;
        };

        return officersService;
    }

}());
