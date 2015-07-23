acmApp.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
    var navbar = {
        templateUrl: 'acmApp/components/navbar/navbar.html',
        controller: 'navBarController'
    };


    $stateProvider.state('index', {
        url: "",
        views: {
            'content': { 
                templateUrl: 'acmApp/partials/index.html',
            },
            'navbar': navbar
        }
    })
    .state('index.main', {
        url: "/index",
        views: {
            'events': { 
                templateUrl: 'acmApp/components/events/events.html',
            },
            'articles': {
                templateUrl: 'acmApp/components/articles/articles.html',
            },
        }
    })
    .state('companyportal', {
        url: "/companyportal",
        views: {
            'content': { 
                templateUrl: 'acmApp/components/companyportal/companyportal.html',
                controller: 'companyPortalController as controller'
            },
            'navbar': navbar
        }
    })
    .state('contact', {
        url: "/contact",
        views: {
            'content': {
                templateUrl: 'acmApp/components/officers/officers.html',
                controller: 'officersController',
                controllerAs: 'officers'
            },
            'navbar': navbar
        }
    });

    $locationProvider.html5Mode(true);
}]);
