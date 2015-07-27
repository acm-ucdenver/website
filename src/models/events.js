// models/event.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventSchema = new Schema({
    title: String,
    startDate: Date,
    endDate: Date,
    description: String,
    location: String,
    rsvp: Boolean,
    imgs: [ { src: String } ]
});

module.exports = mongoose.model('Event', EventSchema);
