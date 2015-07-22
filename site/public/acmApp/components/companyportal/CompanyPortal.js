(function () {
    'use strict';

    angular.module('acmApp').controller('companyPortalController', ['prototypeFactory', CompanyPortalController]);

    function CompanyPortalController (prototypeFactory) {
        var self = this;

        self.prototypes = {};

        function init () {
            prototypeFactory.getAllPrototypes().then(function (data) {
                self.prototypes = data;
            });
        }

        init();
    }

})();
