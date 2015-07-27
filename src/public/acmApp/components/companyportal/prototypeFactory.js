(function () {
    'use strict';

    angular.module('acmApp').factory('prototypeFactory', ['$q', '$http', PrototypeFactory]);

    function PrototypeFactory ($q, $http) {
        var factory = {};

        factory.getAllPrototypes = function () {
            var deferred = $q.defer();

            $http.get('/prototypes')
            .success(function (data) {
                    deferred.resolve(data);
                })
                .error(function (err) {
                    deferred.reject(err);
                });

            return deferred.promise;
        }

        return factory;
    }

})();
