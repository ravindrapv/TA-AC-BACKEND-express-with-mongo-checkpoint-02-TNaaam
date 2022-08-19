var express = require('express');
var router = express.Router();

var Comments = require('../models/comments');

router.get('/:commentId/edit',(req,res,next) => {
    var commentId = req.params.commentId;
    console.log(commentId);
    Comments.findById({_id:commentId},(err,comment) => {
        if(err) return next(err);
        res.render('editComment',{ comment })
    })
});

router.post('/:id',(req,res,next) => {
    var id = req.params.id;
    Comments.findByIdAndUpdate(id,req.body,(err,comment) => {
        if(err) return next(err);
        res.redirect('/event/' + comment.eventId);
    })
});



//delet a comment
router.get('/:id/delete',(req,res,next) => {
    var id = req.params.id;
    Comments.findByIdAndDelete(id,(err,comment) => {
        if(err) return next(err);
        res.redirect('/event/'+ comment.eventId);
    })
})

module.exports = router;
