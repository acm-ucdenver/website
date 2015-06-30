var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Projects = require('../models/project');

var app  = express();

// Configure body body-parser
app.use (bodyParser.urlencoded( extended: true));
app.use (bodyParser.json());

// '/projects' API
router.route('/');
	.get (function (req, res, next) {
		Projects.find (function(err, projects) {
			if (err)
				res.send(err);

			res.json(officers);
		});
	})