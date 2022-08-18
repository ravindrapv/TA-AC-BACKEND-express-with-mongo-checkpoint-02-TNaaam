var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var commentSchema = new Schema({
    content:{type:String, required:true},
    eventId:{type:Schema.Types.ObjectId,ref:"EventDB",required:true}
},{timestamps:true});
var Comments = mongoose.model('Comments',commentSchema);
module.exports = Comments;