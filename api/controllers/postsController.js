'use strict';


var mongoose = require('mongoose'),
    Posts = mongoose.model('Posts');



exports.list_all_posts = function (req, res) {
    Posts.find({}, function (err, post) {
        if (err)
            res.send(err);
        res.json(post);
    });
};



exports.create_a_post = function (req, res) {
    // To grant access
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET,POST');



    var new_post = new Posts(req.body);
    new_post.save(function (err, post) {
        if (err)
            res.send(err);
        res.json(post);

        // And return the id of the post

        console.log(post)

    });
};





