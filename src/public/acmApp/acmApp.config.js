(function () {
    'use strict';

    angular.module('acmApp').config(['$locationProvider', Config]);

    function Config ($locationProvider) {
        $locationProvider.html5Mode(true);
    }
})();
