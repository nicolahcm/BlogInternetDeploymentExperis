'use strict';
module.exports = function (app) {
    var blog = require('../controllers/blogController');

    // blog Routes
    app.route('/posts')
        .get(blog.list_all_posts)
        .post(blog.create_a_post);


};