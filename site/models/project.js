// models/project.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = new Schema ({
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

// Example
// {
//     "title": "Name of the project",
//     "desc": "Description of project",
//     "date": Date,
//     "contr":
//     [
//             { "name": "Name of contributor" },
//             ...
//     ],
//     "links":
//     [
//             {
//                 "text": "Link text",
//                 "url": "Link target"
//             },
//             ...
//     ],
//     "tags":
//     [
//             { "tag": "Tech tag (ie Node.js or Java)" },
//             ...
//     ]
// }

module.exports = mongoose.model ('Project', ProjectSchema);