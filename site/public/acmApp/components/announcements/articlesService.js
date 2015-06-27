angular
	.module('acmApp')
	.factory('Article', ['$resource',
	function($resource){
		return $resource('articles/:articleId', {}, {
			query: {method:'GET', params:{articleId:'articles'}, isArray:true}
		});
	}]);