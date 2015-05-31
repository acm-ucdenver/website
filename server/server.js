// server.js

// Call the packages
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var log4js = require('log4js');
var mongoose = require('mongoose');


// Configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configure log4js
log4js.configure({
  appenders: [
    { type: 'console' },
    { type: 'file', filename: 'logs/server.log', category: 'server' }
  ]
});
var logger = log4js.getLogger();

// MongoDB connection stuff
// mongoose.connect('mongodb://localhost/MONGODBNAME');
// Schema locations go here. For example:
// var Event = require('./app/models/event');

// Set the port
var port = process.env.PORT || 33455;

// Express router
var router = express.Router();

// Basic middleware
router.use(function (req, res, next) {
    // Log the request
    console.log('Recieved request');

    // Pass it on
    next();
});

router.route('/events')
	.get( function (req, res) {
			// Get functionality goes here
			logger.debug("Received /events GET request");
		
    })
	.post( function(req, res) {
			// Post functionality goes here 
			logger.debug("Received /events POST request");
			
	});
// Register the routes
app.use('/api', router);

// Start the server
app.listen(port);
console.log('Listening on port ' + port);