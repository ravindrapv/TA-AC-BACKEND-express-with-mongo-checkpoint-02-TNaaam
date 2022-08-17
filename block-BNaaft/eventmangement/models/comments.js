var mongoose = require('mongoose');
const { schema } = require('./EventDB');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    text:String,
    author:String,
    created:Date,
    eventId:schema.types.objectId
});

var Comments = mongoose.model('Comments',{commentSchema});
module.exports = Comments;