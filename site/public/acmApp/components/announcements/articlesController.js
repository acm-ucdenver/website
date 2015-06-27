angular
	.module('acmApp')
	.controller('ArticlesController', ['$scope', 'Article', function($scope, Article) {
  		$scope.articles = Article.query();	// Get all articles
}]);
	