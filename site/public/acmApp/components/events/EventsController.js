// dummy javascript file

// 'eventsController'
//   post request to orgsync API handled by EventService.js
//   provide orgsync event object array to page

// 'eventsDirective'
//   returns template for display of event object

angular.module('acmApp')
	.controller('EventsController', addEvents )
	.directive('eventView', function() {
		return {
			templateUrl: '/acmApp/components/events/events.html' // '<tr><td>{{event.title}}</td></tr>'//
		};
	})
	
	function addEvents() {
		this.events = [
			{
				title: 'Event Name',
				startDate: 'Date',
				endDate: 'Date',
				description: 'Description of event',
				location: 'Location of event',
				rsvp: false,
				imgs: [
					{
						src: 'Address of image'
					}
				]
			}
		];
	};
	/* .factory('EventModel', function() {
		var events;
		$http.get('/api/event', function(req, res) {
			if (err) 
			{ throw err; }
			else {
				events = res.body;
			}
		});
	}); */