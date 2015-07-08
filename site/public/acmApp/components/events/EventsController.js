angular
	.module('acmApp')
	.controller('EventsController', ['$scope', '$http', function($sccope, $http){
		//Get all events
		$http.get('/events')
		.success(function(data){
			$scope.events = data;
	});
}]);

