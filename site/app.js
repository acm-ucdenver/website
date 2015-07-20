var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');
var mongoose = require('mongoose');

var routes = require('./routes/index');
var officers = require('./routes/officers');
var articles = require('./routes/articles');
var events = require('./routes/events');

var app = express();

// Configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// view engine setup (doesn't apply to angular templates)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Logging Initialization
// ----------------------
// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'});

// setup the logger
app.use(logger('combined', {stream: accessLogStream}));
// ----------------------


// Routes (a few examples, we will remove these)
// ----------------------
app.use('/officers', officers);
app.use('/articles', articles);
app.use('/events', events);
app.use('/', routes);
app.use('/*', routes);
// ----------------------

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// mongodb database setup using mongoosejs
// http://mongoosejs.com/docs/index.html
mongoose.connect('mongodb://localhost/acm');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: could not connect to mongodb database "acm"'));
db.once('open', function (callback) {
  console.log('connected to mongodb database "acm"');
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
