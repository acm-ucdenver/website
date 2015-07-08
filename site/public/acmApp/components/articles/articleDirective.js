(function () {
    'use strict';

    angular.module('acmApp').directive('articleframe', ArticlesDirective);

    function ArticlesDirective() {
        return {
            restrict: 'E',
            scope: {
                info: '='
            },
            templateUrl: 'article_template.html'
        }
    }
})();
