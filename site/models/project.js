// models/project.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema ({
	title : String,
	desc : String,
	date : Date,
	contr : [{
		name : String
	}],
	links : [{
		text : String,
		url : String
	}],
	tags : [{
		tag : String
	}]
});

module.exports = mongoose.model ('Project', ProjectSchema);