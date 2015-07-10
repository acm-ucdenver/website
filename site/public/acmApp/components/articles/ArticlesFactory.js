(function (){
    'use strict';

    angular.module('acmApp').factory('ArticleFactory', ['$http', '$q', '$log', '$rootScope', ArticleFactory]);

    function ArticleFactory ($http, $q, $log, $rootScope) {
        var factory = {};

        factory.getArticle = function (id) {
            var deferred = $q.defer();

            $http.get('/articles/' + id)
                .success(function(data) {
                    deferred.resolve(data);
                })
                .error(function(err) {
                    deferred.reject(err);
                });

            return deferred.promise;
        };

        factory.saveArticle = function (article) {
            var deferred = $q.defer();

            if (article._id === "0") {
                $http.post('/articles', article)
                    .success(function () {
                        deferred.resolve(true);
                    })
                    .error(function () {
                        deferred.reject(false);
                    });
            } else { 
                $http.put('/articles', article)
                    .success(function () {
                        deferred.resolve(true);
                    })
                    .error(function () {
                        deferred.reject(false);
                    });
            }

            return deferred.promise;
        };

        factory.getArticles = function () {
            var deferred = $q.defer();

            $http.get('/articles')
                .success(function(data) {
                    deferred.resolve(data);
                })
                .error(function(err) {
                    deferred.reject(err);
                });

            return deferred.promise;
        };
        
        return factory;
    }
})();
