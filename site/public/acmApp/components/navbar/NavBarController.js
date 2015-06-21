acmApp.controller('NavBarController', ['$scope', function ($scope) {
    $scope.items = [
                        {
                            title: "Main",
                            state: "main.index"
                        },
                        {
                            title: "Contact",
                            state: "contacts"
                        }
                    ];
}]);