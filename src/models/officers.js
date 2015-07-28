// models/officers.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OfficerSchema = new Schema({
    name: String,
    position: String,
    email: String,
    photo: String,
    year: String,
    bio: String
});

module.exports = mongoose.model('Officer', OfficerSchema);
