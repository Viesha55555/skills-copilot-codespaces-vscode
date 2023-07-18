// Create web server
var express = require('express');
var router = express.Router();

// Load database
var db = require('../db');

// Load helper functions
var helper = require('../helpers/comments');

// GET /comments
// Route for getting all comments
router.get('/', function(req, res, next) {
    db('comments')
        .select()
        .then(function (comments) {
            res.send(comments);
        });
});

// GET /comments/:id
// Route for getting a comment by id
router.get('/:id', function(req, res, next) {
    var id = req.params.id;
    db('comments')
        .select()
        .where('id', id)
        .first()
        .then(function (comment) {
            res.send(comment);
        });
});

// POST /comments
// Route for creating a comment
router.post('/', function(req, res, next) {
    db('comments')
        .insert(req.body, 'id')
        .then(function (id) {
            db('comments')
                .select()
                .where('id', id[0])
                .first()
                .then(function (comment) {
                    res.send(comment);
                })
        });
});

// PUT /comments/:id
// Route for updating a comment
router.put('/:id', function(req, res, next) {
    var id = req.params.id;
    db('comments')
        .update(req.body)
        .where('id', id)
        .then(function () {
            db('comments')
                .select()
                .where('id', id)
                .first()
                .then(function (comment) {
                    res.send(comment);
                })
        });
});

// DELETE /comments/:id
// Route for deleting a comment
router.delete('/:id', function(req, res, next) {
    var id = req.params.id;
    db('comments')
        .del()
        .where('id', id)
        .then(function () {
            res.json({success: true});
        });
});

module.exports = router;