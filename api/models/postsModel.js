'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PostSchema = new Schema({
    title: {
        type: String,
        required: 'Kindly enter the title of the post'
    },
    subtitle: {
        type: String,
    },
    body: {
        type: String
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    author: {
        type: String
    },
    featured: {
        type: Boolean,
        default: false
    },
    image: {
        type: String
    },
    tags: {
        type: [{
            type: String
        }]
    },
    archived: {
        type: Boolean
    }
});





module.exports = mongoose.model('Posts', PostSchema);
