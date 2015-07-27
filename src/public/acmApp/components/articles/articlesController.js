(function () {
    angular.module('acmApp').controller('articlesController', ['$scope', '$http', ArticlesController]);

    function ArticlesController ($scope, $http) {
        // Get all articles
        $http.get('/articles')
            .success(function(data) {
                $scope.articles = data;
            });
    }

})();


	
