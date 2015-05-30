Feature: A list of events can be pulled with a GET call
	As a web developer
	I would like to be able to get a list of all events
	So I can display them to the user
	
	Background:
		Given I have access to the /event API
	
	Scenario: Developer GETs /event
		Given an event exists in the API
		When I send a GET HTTP request to /event
		Then a JSON array of all event objects will be return over HTTP
		And the server will issue a 200 message response
		And the call will be idempotent

	Scenario: Developer GETs /event/{event-id}
		Given {event-id} is an id of an event in the collection
		When I send a GET HTTP request to /event/{event-id}
		Then A JSON object of that event will be returned over HTTP response
		And the server will issue a 200 message response
		And the call will be idempotent

	Scenario: Developer attempts to GET /event/{event-id} for an event that doesn't exist
		Given {event-id} is an id of an event not in the collection
		When I send a GET HTTP request to /event/{event-id}
		Then the server will issue a 400 message
		And the server will issue an error JSON response body
		And the call will be idempotent