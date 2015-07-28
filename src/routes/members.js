var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Member = require('../models/members');

var app = express();

// Configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* '/members' API */
router.route('/')
    .get(function (req, res, next) {
        Member.find(function(err, members) {
            if (err)
                res.send(err);

            res.json(members);
        });
    })

    .post(function (req, res, next) {
        var member = new Member();

        member.email = req.body.email;
        member.name = req.body.name;
        member.email_verified = req.body.email_verified;

        member.save(function (err) {
            if (err)
                res.send(err);

            res.json({ message: 'Success' });
        });
    });

/* '/members/:id' API */
router.route('/:id')
    .get(function (req, res, next) {
        Member.findById(req.params.id, function (err, member) {
            if (err)
                res.send(err);

            res.json(member);
        });
    })

    .put(function (req, res, next) {
        Member.findById(req.params.id, function (err, member) {
            if (err)
                res.send(err);

            if (typeof req.body.email !== 'undefined') {
                member.email = req.body.email;
            }

            if (typeof req.body.name !== 'undefined') {
                member.name = req.body.name;
            }

            if (typeof req.body.email_verified !== 'undefined') {
                member.email_verified = req.body.email_verified;
            }

            member.save(function (err) {
                if (err)
                    return err;

                res.json({ message: 'Success' });
            });
        });
    })

    .delete(function (req, res, next) {
        Member.remove({_id: req.params.id}, function(err, member) {
            if (err)
                res.send(err);

            res.json({ message: 'Success' });
        });
    });

module.exports = router;
