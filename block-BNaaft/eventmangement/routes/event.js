var express = require('express');
var router = express.Router();
var Events = require('../models/EventDB');
var Comments = require('../models/comments');
const { events } = require('../models/EventDB');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Events.find({},(err,events) => {
    if(err) return next(err);
  res.render('Allevents',{events});
});
});

//creating events form
router.get('/new',(req,res) => {
  res.render('eventForm')
})

//creating events
router.post('/',(req,res,next) => {
  //save to db
  Events.create(req.body,(err,createEvent) => {
    if(err) return next(err);
    res.redirect('/event');
  })
});

//fatch singel event
router.get('/:id',(req,res,next) => {
  var id = req.params.id;
  Events.findById(id,(err,events) => {
    // console.log(events);
    if(err) return next(err);
    Comments.find({eventId:id},(err,comments) => {
      console.log(comments,'hello');
      res.render('eventDetailes',{events:events,comments:comments})
    })
  })
});

//edit event
router.get('/:id/edit',(req,res) => {
  var id = req.params.id;
 Events.findById(id,(err,events) => {
    if(err) return next(err);
    res.render('editEventForm',{events});
  })
});


router.post('/:id',(req,res) => {
  var id = req.params.id;
   Events.findByIdAndUpdate(id,req.body,(err,updateData) => {
    events.tags = events.tags.join(" ")
    if(err) return next(err,updateData);
    res.redirect(`/eventDetailes/` + id);
   })
});


router.get('/:id/delete',(req,res,next) => {
  var id = req.params.id;
  Events.findByIdAndDelete(id,(err,events) =>{
    if(err) return next(err);
    res.redirect('/event');
  })
});

//inc likes
router.get('/:id/likes',(req,res) => {
  var id = req.params.id;
  Events.findByIdAndUpdate(id,{$inc:{likes: 1}},(err,events) => {
    res.redirect('/event/' + id)
  })
});

//remarks
router.post("/:id/remarks",(req,res,next) => {
  var id = req.params.id;
  req.body.eventId = id;
  console.log(req.body);
  let comment = {
    content:req.body.content,
    eventId:req.body.eventId
  }
  Comments.create(comment,(err,events) => {
    
    if(err) return next(err,events);
    res.redirect(`/event/`+id);
  })
})

module.exports = router;
