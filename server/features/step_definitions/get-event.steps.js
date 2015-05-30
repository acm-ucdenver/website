'use strict';

module.exports = function() {

	this.Given(/^I have access to the \/event API$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});

	this.Given(/^an event exists in the API$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});

	this.When(/^I send a GET HTTP request to \/event$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});

	this.Then(/^a JSON array of all event objects will be return over HTTP$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});

	this.Then(/^the server will issue a (\d+) message response$/, function (arg1, callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});

	this.Then(/^the call will be idempotent$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});

	this.Given(/^\{event\-id\} is an id of an event in the collection$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});

	this.When(/^I send a GET HTTP request to \/event\/\{event\-id\}$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});

	this.Then(/^A JSON object of that event will be returned over HTTP response$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});

	this.Given(/^\{event\-id\} is an id of an event not in the collection$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});

	this.Then(/^the server will issue a (\d+) message$/, function (arg1, callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});

	this.Then(/^the server will issue an error JSON response body$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});

};

