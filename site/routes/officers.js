var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Officer = require('../models/officer');

var app = express();

// Configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* '/officers' API */
router.route('/')
    .get(function (req, res, next) {
        Officer.find(function(err, officers) {
            if (err)
                res.send(err);

            res.json(officers);
        });
    })

    .post(function (req, res, next) {
        var officer = new Officer();

        officer.name = req.body.name;
        officer.position = req.body.position;
        officer.email = req.body.email;
        officer.photo = req.body.photo;
        officer.year = req.body.year;
        officer.bio = req.body.bio;

        officer.save(function (err) {
            if (err)
                res.send(err);

            res.json({ message: 'Success' });
        });
    });

/* '/officers/:id' API */
router.route('/:id')
    .get(function (req, res, next) {
        Officer.findById(req.params.id, function (err, officer) {
            if (err)
                res.send(err);

            res.json(officer);
        });
    })

    .put(function (req, res, next) {
        Officer.findById(req.params.id, function (err, officer) {
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
        Officer.remove({_id: req.params.id}, function(err, user) {
            if (err)
                res.send(err);

            res.json({ message: 'Success' });
        });
    });

module.exports = router;