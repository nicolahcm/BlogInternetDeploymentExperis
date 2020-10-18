'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CommentSchema = new Schema({
    commentuser: {
        type: String,
        required: 'Kindly enter the name of the post'
    },
    body: {
        type: String,
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    belongingPostID: {
        type: ObjectId
    },
    invisible: {
        type: Boolean
        default: false
    }
});





module.exports = mongoose.model('Comments', CommentSchema);