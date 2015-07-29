(function () {
    'use strict';

    angular.module('acmApp').config(['$stateProvider', Routes]);  

    function Routes ($stateProvider) {
        // Views
        // --------------------------------------------------
        var navbar = {
            templateUrl: 'acmApp/components/navbar/navbar.html',
            controller: 'navBarController as controller'
        };

        var companyportal = {
            templateUrl: 'acmApp/components/companyportal/companyportal.html',
            controller: 'companyPortalController as controller'
        };

        var events = {
            templateUrl: 'acmApp/components/events/events.html'
        };

        var articles = {
            templateUrl: 'acmApp/components/articles/articles.html',
            controller: 'articlesController as controller'
        };

        var officers = {
            templateUrl: 'acmApp/components/officers/officers.html',
            controller: 'officersController as controller'
        };

        // Routes
        // --------------------------------------------------
        var routeIndex = {
            name: 'index',
            url: '/',
            views: {
                'content': articles,
                'navbar': navbar
            }
        };

        var routeCompanyPortal = {
            name: 'companyportal',
            url: '/companyportal',
            views: {
                'content': companyportal,
                'navbar': navbar
            }
        };

        var routeContact = {
            name: 'contact',
            url: '/contact',
            views: {
                'content': officers,
                'navbar': navbar
            }
        };


        // State Provider
        // --------------------------------------------------
        $stateProvider
            .state(routeIndex)
            .state(routeCompanyPortal)
            .state(routeContact);
    }

})();
