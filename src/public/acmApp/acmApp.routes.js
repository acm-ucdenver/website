(function () {
    'use strict';

    angular.module('acmApp').config(['$stateProvider', Routes]);  

    function Routes ($stateProvider) {
        // Views
        // --------------------------------------------------
        var index = {
            templateUrl: 'acmApp/partials/index.html'
        };

        var navbar = {
            templateUrl: 'acmApp/components/navbar/navbar.html',
            controller: 'navBarController'
        };

        var companyportal = {
            templateUrl: 'acmApp/components/companyportal/companyportal.html',
            controller: 'companyPortalController as controller'
        };

        var events = {
            templateUrl: 'acmApp/components/events/events.html'
        };

        var articles = {
            templateUrl: 'acmApp/components/articles/articles.html'
        };

        var officers = {
            templateUrl: 'acmApp/components/officers/officers.html',
            controller: 'officersController as officers'
        };

        // Routes
        // --------------------------------------------------
        var routeIndex = {
            name: 'index',
            url: '',
            views: {
                'content': index,
                'navbar': navbar
            }
        };

        var routeIndexMain = {
            name: 'index.main',
            url: '/index',
            views: {
                'events': events,
                'articles': articles
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
            .state(routeIndexMain)
            .state(routeCompanyPortal)
            .state(routeContact);
    }

})();
