(function () {
    'use strict';

    angular.module('acmApp').directive('articleframe', ['$timeout', '$interval', ArticlesDirective]);

    function ArticlesDirective($timeout, $interval) {
        function link (scope, element, attrs) {
            var show = true;
            var full_text = scope.info.body;
            var original_height = 0;
            var height = 0;

            $timeout(init, false);
            function init(){
                original_height = element[0].offsetHeight;
                height = original_height;
            }

            element.bind('click', function(event) {
                show = !show;
                if (show) {
                    scope.info.body = full_text;
                    scope.$apply();
                    $interval(function () {
                        height += (original_height-120)/27;
                        element.css('height', height+'px'); 
                    }, 20, 27);
                } else {
                    $interval(function () {
                        height -= (original_height-120)/27;
                        element.css('height', height+'px'); 
                    }, 20, 27);
                    $timeout(function() {
                        scope.info.body = full_text.substring(0, 150) + "...";
                        scope.$apply();
                    }, 20*27);
                }
            })
        }

        return {
            restrict: 'E',
            link: link,
            replace: true,
            scope: {
                info: '='
            },
            templateUrl: 'acmApp/components/articles/article_template.html'
        }
    }
})();
