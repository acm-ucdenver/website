(function () {
    'use strict';

    angular.module('acmApp').directive('officer', [OfficerEditorDirective]);

    function OfficerEditorDirective () {
        return {
            restrict: 'E',
            scope: {
                info: '='
            },
            controller: 'officerDirectiveController as controller',
            template: '<ng-include src="controller.template" /></ng-include>'
        };
    }
})();
