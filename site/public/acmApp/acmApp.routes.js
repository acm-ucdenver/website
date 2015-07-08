acmApp.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
    $stateProvider.state('index', {
        url: "",
        views: {
            'navbar': {
                templateUrl: 'acmApp/components/navbar/navbar.html',
                controller: 'NavBarController'
            }
        }
    })
    .state('index.main', {
        url: "/index",
        views: {
            'content@': { 
                templateUrl: 'acmApp/components/articles/articles.html',
                controller: 'ArticlesController as controller'
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
                controller: 'NavBarController'
            }
        }
    });

    $locationProvider.html5Mode(true);
}]);
