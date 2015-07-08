// models/events.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventsSchema = new Schema({
    title: String,
    startDate: Date,
    endDate: Date,
    description: String,
    location: String,
    rsvp: boolean,
    imgs: [
    {
    	src: String
    }]
});

module.exports = mongoose.model('Event', OfficerSchema);
