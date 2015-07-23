angular
	.module('acmApp')
	.controller('ArticlesController', ['$scope', '$http', function($scope, $http){
		// Get all articles
		$http.get('/articles')
	        .success(function(data) {
	            $scope.articles = data;
	        });
	}]);
	
