var express = require('express');
var router = express.Router();
var Events = require('../models/EventDB');
var Comments = require('../models/comments');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('eventDetailes');
});

router.post('/',(req,res,next) => {
  //save to db
  Events.create(req.body,(err,createEvent) => {
    if(err) return next(err);
    res.render('eventForm');
  })
})

module.exports = router;
