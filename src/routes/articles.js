var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Announcement = require('../models/articles');

var app = express();

// Configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* '/announcement' API */
router.route('/')
    .get(function (req, res, next) {
        Announcement.find(function(err, articles) {
            if (err)
                res.send(err);

            res.json(articles);
        });
    })

/* '/announcement/:id' API */
router.route('/:id')
    .get(function (req, res, next) {
        Announcement.findById(req.params.id, function (err, articles) {
            if (err)
                res.send(err);

            res.json(articles);
        });
});

module.exports = router;