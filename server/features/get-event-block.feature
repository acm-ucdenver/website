Feature: Server blocks access to event API
	As a web developer
	I would like to block access to /event API
	So I can prevent unwanted access to events
	
	Background:
		Given I do not have access to the /event API
	
	Scenario: Developer attempts to GET /event without permission
		Given I send a GET call to the /event API
		Then the server will issue a 401 message
		And the server will issue an error JSON response body
		And the call will be idempotent

	Scenario: Developer attempts to GET /event/{event-id} without permission
		Given I sends a GET call to the /event/{event-id} API
		Then the server will issue a 401 message
		And the server will issue an error JSON response body
		And the call will be idempotent