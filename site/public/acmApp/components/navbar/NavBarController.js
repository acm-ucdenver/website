acmApp.controller('navBarController', ['$scope', function ($scope) {
    $scope.items = [
                        {
                            title: "Main",
                            state: "index.main"
                        },
                        {
                            title: "Contact",
                            state: "contact"
                        }
                    ];
}]);