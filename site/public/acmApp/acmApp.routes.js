acmApp.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
    $stateProvider.state('index', {
        url: "",
        views: {
            'content': { 
                templateUrl: 'acmApp/partials/index.html',
            },
            'navbar': {
                templateUrl: 'acmApp/shared/navBar/navbar.html',
            }
        }
    })
    .state('index.main', {
        url: "/index",
        views: {
            'events': { 
                templateUrl: 'acmApp/components/events/events.html',
            },
            'announcements': {
                templateUrl: 'acmApp/components/announcements/announcements.html',
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
                templateUrl: 'acmApp/shared/navBar/navbar.html',
            }
        }
    });

    $locationProvider.html5Mode(true);
}]);