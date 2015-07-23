var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Prototype = require('../models/prototypes');

var app = express();

// Configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* '/prototype' API */
router.route('/')
    .get(function (req, res, next) {
        Prototype.find(function(err, prototypes) {
            if (err)
                res.send(err);

            res.json(prototypes);
        });
    })

    .post(function (req, res, next) {
        var prototype = new Prototype();

        prototype.event = req.body.event;
        prototype.img = req.body.img;
        prototype.description = req.body.description;
        prototype.activites = req.body.activities;
        prototype.expenses = req.body.expenses;
        prototype.cost = req.body.cost;

        prototype.save(function (err) {
            if (err)
                res.send(err);

            res.json({ message: 'Success' });
        });
    });

/* '/prototypes/:id' API */
router.route('/:id')
    .get(function (req, res, next) {
        Prototype.findById(req.params.id, function (err, prototype) {
            if (err)
                res.send(err);

            res.json(prototype);
        });
    })

    .put(function (req, res, next) {
        Prototype.findById(req.params.id, function (err, prototype) {
            if (err)
                res.send(err);

            if (typeof req.body.event !== 'undefined') {
                prototype.event = req.body.event;
            }

            if (typeof req.body.img !== 'undefined') {
                prototype.img = req.body.img;
            }

            if (typeof req.body.description !== 'undefined') {
                prototype.description = req.body.description;
            }

            if (typeof req.body.activities !== 'undefined') {
                prototype.activites = req.body.activities;
            }

            if (typeof req.body.expenses !== 'undefined') {
                prototype.expenses = req.body.expenses;
            }

            if (typeof req.body.cost !== 'undefined') {
                prototype.cost = req.body.cost;
            }

            prototype.save(function (err) {
                if (err)
                    return err;

                res.json({ message: 'Success' });
            });
        });
    })

    .delete(function (req, res, next) {
        Prototype.remove({_id: req.params.id}, function(err, user) {
            if (err)
                res.send(err);

            res.json({ message: 'Success' });
        });
    });

module.exports = router;
