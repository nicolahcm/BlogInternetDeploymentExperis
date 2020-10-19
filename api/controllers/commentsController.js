'use strict';


var mongoose = require('mongoose'),
    Comments = mongoose.model('Comments'),
    Posts = mongoose.model('Posts');



exports.list_all_comments = function (req, res) {
    Comments.find({}, function (err, comment) {
        if (err)
            res.send(err);
        res.json(comment);
    });
};


exports.create_a_comment = function (req, res) {
    var new_comment = new Comments(req.body);
    new_comment.save(function (err, post) {
        if (err)
            res.send(err);
        res.json(new_comment);

        console.log(new_comment)
        // id comment:
        console.log(new_comment._id) // ritorna l'_id del commento. 
        // Possiamo fare una cosa analoga per i posts????
    });
};



exports.delete_a_comment = function (req, res) {
    Comments.deleteOne({
        _id: req.params.commentId
    }, function (err, comment) {
        if (err)
            res.send(err);
        res.json({ message: 'Comment successfully deleted' });
    });
};

