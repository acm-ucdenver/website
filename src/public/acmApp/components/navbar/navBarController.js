(function () {
    'use strict';

    angular.module('acmApp').controller('navBarController', ['$scope', NavBarController]);

    function NavBarController ($scope) {
        $scope.items =
        [
            {
                title: "Main",
                state: "index.main"
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
