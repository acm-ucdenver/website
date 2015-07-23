acmApp.controller('NavBarController', ['$scope', function ($scope) {
    $scope.items = [
                        {
                            title: "Main",
                            state: "index.main"
                        },
                        {
                            title: "Company Portal",
                            state: "companyportal"
                        },
                        {
                            title: "Contact",
                            state: "contact"
                        }
                    ];
}]);
