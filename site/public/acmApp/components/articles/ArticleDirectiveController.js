(function () {
    'use strict';

    angular.module('acmApp').controller('ArticleDirectiveController', ['$stateParams', '$scope', '$state', 'ArticleFactory', ArticleDirectiveController]);

    function ArticleDirectiveController ($stateParams, $scope, $state, ArticleFactory) {
        var self = this;

        self.savePressed = function () {
            self.saveState = undefined;

            ArticleFactory.saveArticle(self.article).then(function (result) {
                self.saveState = result;
            });
        }

        /*self.cancelPressed = function () {
            $state.go('index.main');
        }*/

        self.swap = function () {
            if (self.edit === true) {
                self.template = 'acmApp/components/articles/template_normal.html';
                self.edit = false;
            } else if (self.edit === false ) {
                self.template = 'acmApp/components/articles/template_edit.html';
                self.edit = true;
            }
        }

        function initialize () {
            self.edit = false;
            self.template = 'acmApp/components/articles/template_normal.html';
            self.article = $scope.info;
        }

        initialize();
    }
})();
