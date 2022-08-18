var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
    title:{type:String,requerd:true},
    description:String,
    host:String,
    start:Date,
    end:Date,
    category:[String],
    location:String,
    likes:Number
},{timestamps:true});

var EventDB = mongoose.model('EventDB',eventSchema);

module.exports = EventDB;