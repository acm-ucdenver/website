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

    .post(function(req, res, next) {
        var article = new Announcement();

        article.createdDate = req.body.createdDate;
        article.modifiedDate = req.body.modifiedDate;
        article.author = req.body.author;
        article.subject = req.body.subject;
        article.body = req.body.body;
        article.imgs = req.body.imgs;

        article.save(function (err) {
            if (err)
                res.send(err);

            res.send(err);

        res.json({ messages: 'Success' });
        });
    });

/* '/announcement/:id' API */
router.route('/:id')
    .get(function (req, res, next) {
        Announcement.findById(req.params.id, function (err, articles) {
            if (err)
                res.send(err);

            res.json(articles);
        });
});

    .put(function (req, res, next) {
        Announcement.findById(req.params.id, function (err, articles) {
            if(err)
                res.send(err);

            articles.createdDate = req.body.createdDate;
            articles.modifiedDate = req.body.modifiedDate;
            articles.author = req.body.author;
            articles.subject = req.body.subject;
            articles.body = req.body.body;
            articles.imgs = req.body.imgs;

            articles.save(function (err)
            {
                if (err)
                    return err;

                res.json({ message: 'Success'});
            });
        });
    })

    .delete(function (req, res, next) {
        Announcement.remove({_id: req.params.id}, function(err, user) {
            if (err)
                res.send(err);

            res.json({ message: 'Success' });
        });

    });
    
module.exports = router;