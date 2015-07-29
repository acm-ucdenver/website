(function () {
    'use strict';

    angular.module('acmApp').controller('navBarController', [NavBarController]);

    function NavBarController () {
        var self = this;

        self.items =
        [
            {
                title: "Main",
                state: "index"
            },
            {
                title: "Company Portal",
                state: "companyportal"
            },
            {
                title: "Contact",
                state: "contact"
            }
        ];   
    }

})();
