var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Project = require('../models/project');

var app  = express();

// Configure body body-parser
app.use(bodyParser.urlencoded( {extended: true} ));
app.use(bodyParser.json());

// '/projects' API
router.route('/')
    .get(function(req, res, next) {
        Project.find(function(err, projects) {
            if(err)
                res.send(err);

            res.json(projects);
        });
    })

    .post(function(req, res, next) {
        var project = new Project();

        project.title = req.body.title;
        project.desc = req.body.desc;
        project.date = req.body.date;
        project.contr = req.body.contr;
        project.links = req.body.links;
        project.tags = req.body.tags;

        project.save(function(err) {
            if(err)
                res.send(err);

            res.json({message: 'Success'});
        });
    });

// 'projects/:id' API
router.route('/:id')
    .get(function(req, res, next) {
        Project.findById(req.params.id, function(err, project) {
            if(err)
                res.send(err);

            res.json(project);
        });
    })

    .put(function(req, res, next) {
        Project.findById(req.params.id, function(err, project) {
            if(err)
                res.send(err);

            if(project != null) {
                project.title = req.body.title;
                project.desc = req.body.desc;
                project.date = req.body.date;
                project.contr = req.body.contr;
                project.links = req.body.links;
                project.tags = req.body.tags;

                project.save(function(err) {
                    if(err)
                        res.send(err);

                    res.json({message: 'Success'});
                });
            }
            else{
                res.json({error:"Project does not exist"});
            }
        });
    })

    .delete(function(req, res, next) {
        Project
            .findByIdAndRemove({_id: req.params.id}, function(err, project) {
                if(err)
                    res.send(err);

                if (project == null)
                    res.json({error : "Project does not exist"});

                else
                    res.json({message: 'Success'});
            });
    });

module.exports = router;
