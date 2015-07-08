(function (){
    'use strict';

    angular.module('acmApp').factory('ArticlesFactory', ['$http', '$log', '$rootScope', ArticlesFactory]);

    function ArticlesFactory ($http, $log, $rootScope) {
        var factory = {};

        var _articles = {};
        var _loaded = false;

        // Get all articles
        factory.getArticles = function () {
            if (_loaded) {
                return _articles;
            } else {
                factory.loadArticles();
                return {};
            }
        }

        factory.loadArticles = function () {
            $http.get('/articles')
                .success(function(data) {
                    _articles = data;
                    _loaded = true;
                    $rootScope.$broadcast('articlesLoaded');
                });
        }
        
        return factory;
    }
})();
