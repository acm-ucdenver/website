(function () {
    'use strict';

    angular.module('acmApp').controller('ArticleDirectiveController', ['$stateParams', '$scope', '$state', 'ArticleFactory', ArticleDirectiveController]);

    angular.module('acmApp').directive('article', ['$stateParams', '$state', 'ArticleFactory', ArticleEditorDirective]);

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

    function ArticleDirectiveController ($stateParams, $scope, $state, ArticleFactory) {
        var self = this;

        /*self.savePressed = function () {
            if (typeof self.article === undefined) {
                $state.go('index.main');
            } else {
                self.saveState = undefined;

                ArticleFactory.saveArticle(self.article).then(function (result) {
                    self.saveState = result;
                });
            }
        }

        self.cancelPressed = function () {
            $state.go('index.main');
        }*/

        self.swap = function () {
            if (self.edit === true) {
                self.template = 'acmApp/components/articles/article_template.html';
                self.edit = false;
            } else if (self.edit === false ) {
                self.template = 'acmApp/components/articles/article_edit.html';
                self.edit = true;
            }

            console.log(self.edit);
        }

        function initialize () {
            self.edit = false;
            self.template = 'acmApp/components/articles/article_template.html';
            self.article = $scope.info;
        }

        initialize();
    }
})();
