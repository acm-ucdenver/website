(function () {
    'use strict';

    angular.module('acmApp').controller('officerDirectiveController', ['$stateParams', '$scope', '$state', 'officersService', OfficerDirectiveController]);

    function OfficerDirectiveController ($stateParams, $scope, $state, officersService) {
        var self = this;

        self.savePressed = function () {

            officersService.saveOfficer(self.officer).then(function (result) {
                self.saveState = result;
            });

            self.swap();
        }

        self.swap = function () {
            if (self.edit === true) {
                self.template = 'acmApp/components/officers/template_normal.html';
                self.edit = false;
            } else if (self.edit === false ) {
                self.template = 'acmApp/components/officers/template_edit.html';
                self.edit = true;
            }
        }

        function initialize () {
            self.edit = false;
            self.template = 'acmApp/components/officers/template_normal.html';
            self.officer = $scope.info;
        }

        initialize();
    }
})();
