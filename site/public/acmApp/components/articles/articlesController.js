(function () { 
    'use strict';

    angular.module('acmApp').controller('ArticlesController', ['$scope', 'ArticleFactory', ArticlesController]);

    function ArticlesController ($scope, ArticlesFactory) {
        var self = this;

        ArticlesFactory.getArticles().then(function (data) {
            self.articles = data;
        });

    }
})();
