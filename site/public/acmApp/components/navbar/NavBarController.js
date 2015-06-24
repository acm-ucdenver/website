acmApp.controller('NavBarController', ['$scope', function ($scope) {
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