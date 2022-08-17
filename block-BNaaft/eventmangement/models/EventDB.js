var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
    titel:{type:String,requerd:true},
    description:String,
    age:Number,
    phoneNumber:Number,
    email:{type:String,requerd:true}
},{timestamps:true});

var EventDB = mongoose.model('EventDB',eventSchema);

module.exports = EventDB;