acmApp.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
    $stateProvider.state('index', {
        url: "",
        views: {
            'content': { 
                templateUrl: 'acmApp/partials/index.html',
            },
            'navbar': {
                templateUrl: 'acmApp/components/navbar/navbar.html',
                controller: 'navBarController'
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
    });


    $stateProvider.state('contact', {
        url: "/contact",
        views: {
            'content': {
                templateUrl: 'acmApp/partials/contact.html',
            },
            'navbar': {
                templateUrl: 'acmApp/components/navbar/navbar.html',
                controller: 'navBarController'
            }
        }
    });

    $locationProvider.html5Mode(true);
}]);