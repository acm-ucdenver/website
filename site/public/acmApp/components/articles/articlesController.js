(function () { 
    'use strict';

    angular.module('acmApp').controller('ArticlesController', ['$scope', '$log', 'ArticlesFactory', ArticlesController]);

    function ArticlesController ($scope, $log, ArticlesFactory) {
        var self = this;

        self.articles = {};

        $scope.$on('articlesLoaded', loadArticles);

        function loadArticles() {
            self.articles = ArticlesFactory.getArticles();

        }

        ArticlesFactory.loadArticles();
    }
})();
