var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Announcement = require('../models/announcement');

var app = express();

// Configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* '/announcement' API */
router.route('/')
    .get(function (req, res, next) {
        Announcement.find(function(err, announcement) {
            if (err)
                res.send(err);

            res.json(announcement);
        });
    })

/* '/announcement/:id' API */
router.route('/:id')
    .get(function (req, res, next) {
        Announcement.findById(req.params.id, function (err, announcement) {
            if (err)
                res.send(err);

            res.json(announcement);
        });
});

module.exports = router;