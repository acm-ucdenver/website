(function () {
    angular.module('acmApp').controller('articlesController', ['$scope', '$http', ArticlesController]);

    function ArticlesController ($scope, $http) {
        var self = this;

        // Get all articles
        $http.get('/articles')
            .success(function(data) {
                self.articles = data;
            });
    }

})();


	
