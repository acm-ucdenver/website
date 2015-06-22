// models/announcement.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    createdDate: Date,
    modifiedDate: Date,
    author: String,
    subject: String,
    body: String,
    imgs: [ { src: String }]
});

module.exports = mongoose.model('Article', ArticleSchema)