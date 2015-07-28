// models/members.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MemberSchema = new Schema({
    email: String,
    name: String,
    email_verified: Date
});

module.exports = mongoose.model('Member', MemberSchema);
