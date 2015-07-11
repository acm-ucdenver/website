angular
	.module('acmApp')
	.controller('articlesController', ['$scope', '$http', function($scope, $http){
		// Get all articles
		$http.get('/articles')
	        .success(function(data) {
	            $scope.articles = data;
	        });
	}]);
	