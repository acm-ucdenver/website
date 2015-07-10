(function () {
    'use strict';

    angular.module('acmApp').directive('article', [ArticleEditorDirective]);

    function ArticleEditorDirective () {
        return {
            restrict: 'E',
            scope: {
                info: '='
            },
            controller: 'ArticleDirectiveController as controller',
            template: '<ng-include src="controller.template" /></ng-include>'
        };
    }
})();
