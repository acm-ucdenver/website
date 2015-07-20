var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Event = require('../models/event');

var app = express();

// Configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* '/events' API */
router.route('/')
    .post(function (req, res, next) {
        var event = new Event();

        officer.name = req.body.name;
        officer.position = req.body.position;
        officer.email = req.body.email;
        officer.photo = req.body.photo;
        officer.year = req.body.year;
        officer.bio = req.body.bio;

        event.save(function (err) {
            if (err)
                res.send(err);

            res.json({ message: 'Success' });
        });
    });

/* '/events/:id' API */
router.route('/:id')
    .put(function (req, res, next) {
        Event.findById(req.params.id, function (err, event) {
            if (err)
                res.send(err);

            officer.name = req.body.name;
            officer.position = req.body.position;
            officer.email = req.body.email;
            officer.photo = req.body.photo;
            officer.year = req.body.year;
            officer.bio = req.body.bio;

            officer.save(function (err) {
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
