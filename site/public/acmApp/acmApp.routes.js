acmApp.config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('index', {
        url: "",
        views: {
            'content': { 
                templateUrl: 'partials/index.html',
            },
            'navbar': {
                templateUrl: 'partials/navbar.html',
                controller: 'NavBarController'
            }
        }
    })
    .state('index.main', {
        url: "/index",
        views: {
            'events': { 
                templateUrl: 'partials/events.html',
                controller: 'EventsController'
            },
            'announcements': {
                templateUrl: 'partials/announcements.html',
                controller: 'AnnouncementsController'
            }
        }
    });


    $stateProvider.state('contact', {
        url: "/contact",
        views: {
            'content': {
                templateUrl: 'partials/contact.html',
                controller: 'ContactsController'
            },
            'navbar': {
                templateUrl: 'partials/navbar.html',
                controller: 'NavBarController'
            }
        }
    });
}]);