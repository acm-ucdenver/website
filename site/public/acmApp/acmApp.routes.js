acmApp.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
    $stateProvider.state('index', {
        url: "",
        views: {
            'content': { 
                templateUrl: 'acmApp/partials/index.html',
            },
            'navbar': {
                templateUrl: 'acmApp/components/navbar/navbar.html',
                controller: 'NavBarController'
            }
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
            'navbar': {
                templateUrl: 'acmApp/components/navbar/navbar.html',
                controller: 'NavBarController'
            }
        }
    })
    .state('contact', {
        url: "/contact",
        views: {
            'content': {
                templateUrl: 'acmApp/partials/contact.html',
            },
            'navbar': {
                templateUrl: 'acmApp/components/navbar/navbar.html',
                controller: 'NavBarController'
            }
        }
    });

    $locationProvider.html5Mode(true);
}]);
