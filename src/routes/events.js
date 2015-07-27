var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Event = require('../models/events');

var app = express();

// Configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* '/events' API */
router.route('/')
    .get(function (req, res, next) {
        Event.find(function(err, events) {
            if (err)
                res.send(err);

            res.json(events);
        });
    })

    .post(function (req, res, next) {
        var event = new Event();

        event.title = req.body.title;
        event.startDate = req.body.startDate;
        event.endDate = req.body.endDate;
        event.description = req.body.description;
        event.location = req.body.location;
        event.rsvp = req.body.rsvp;
        event.imgs = req.body.imgs;

        event.save(function (err) {
            if (err)
                res.send(err);

            res.json({ message: 'Success' });
        });
    });

/* '/events/:id' API */
router.route('/:id')
    .get(function(req, res, next) {
        Event.findById(req.params.id, function(err, event) {
            if(err)
               res.send(err);

            res.json(event);
        });
    })

    .put(function (req, res, next) {
        Event.findById(req.params.id, function (err, event) {
            if (err)
                res.send(err);

            event.title = req.body.title;
            event.startDate = req.body.startDate;
            event.endDate = req.body.endDate;
            event.description = req.body.description;
            event.location = req.body.location;
            event.rsvp = req.body.rsvp;
            event.imgs = req.body.imgs;

            event.save(function (err) {
                if (err)
                    return err;

                res.json({ message: 'Success' });
            });
        });
    })

    .delete(function (req, res, next) {
        Event.remove({_id: req.params.id}, function(err, event) {
            if (err)
                res.send(err);

            res.json({ message: 'Success' });
        });
    });

module.exports = router;
