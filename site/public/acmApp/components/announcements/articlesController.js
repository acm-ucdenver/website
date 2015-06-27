angular
	.module('acmApp')
	.controller('ArticlesController', ['$scope', '$http', function($scope, $http){
		// Get all articles
		$http.get('http://localhost:3000/articles')
	        .success(function(data) {
	            $scope.articles = data;
	        });
	}]);
	