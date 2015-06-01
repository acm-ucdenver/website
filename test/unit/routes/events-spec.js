var chai     = require('chai');
var promised = require('chai-as-promised');
chai.use(promised) 
var expect   = chai.expect;

/*
	These are gonna be full of:
	browser.get('/api/events');
	calls of some kind
*/


// Suite
describe('getEventAPI', function() {
	describe('authorized GET /event calls', function() {
		it('should return all events', function() {
			// Run test
		});
	
		it('should return 200 message', function() {
			// Run test
		});
	});

	describe('authorized GET /event/{event-id} calls for existing {event-id}', function() {
		it('should return an event matching {event-id}', function() {
			// Run test
		});
		
		it('should return a 200 mesage', function() {
			// Run test
		});
	});
	
	describe('authorized GET /event/{event-id} calls for non-existant {event-id}', function() {
		it('should return an error JSON', function() {
			// Run test
		});
		
		it('should return a 400 mesage', function() {
			// Run test
		});
	});
	
	describe('unauthorized GET /event calls', function() {
		it('should return an error JSON', function() {
			// Run test
		});
		
		it('should return a 401 code', function() {
			// Run test
		});
	});
	
	describe('unauthorized GET /event/{event-id} calls for existing {event-id}', function() {
		it('should return an error JSON', function() {
			// Run test
		});
		
		it('should return a 401 code', function() {
			// Run test
		});
	});
	
	describe('unauthorized GET /event/{event-id} calls for non-existant {event-id}', function() {
		it('should return an error JSON', function() {
			// Run test
		});
		
		it('should return a 401 code', function() {
			// Run test
		});
	});
	
});