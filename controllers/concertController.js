var express = require("express");
var app = express();
var router = express.Router();

app.set('models', require('../models/review.js'));
var review = app.get('models');



router.get("/api/all", function(req, res) {
    review.findAll({}).then(function(results) {
      res.json(results);
    });
  });

// Create all our routes and set up logic within those routes where required.
router.get('/', function(req, res) {

  review.findAll({
    raw: true,
    limit: 5,
    order: [[
      'createdAt',
      'DESC'
    ]]
  }).then(x => {

res.render('index', {x});
});
});

router.get('/thankyou', function(req, res) {
review.findAll({
  limit: 1,
  order: [ [ 'createdAt', 'DESC' ]]
}).then(x => {
  // console.log(x);
res.render('thankyou', {x});
});
});

router.post("/review", function(req, res) {
  console.log(req.param('Artist'));
  var condition = req.param('Artist');
    review.findAll({
      raw: true,
      where: {
        Artist: condition
      }
    }).then(x => {
    console.log(x);
    res.render('review', {x});
  });
});


router.post("/api", function(req, res) {
  var a = req.param('Artist');
  var v = req.param('Venue');
  var d = req.param('Date');
  var r = req.param('Review');
  console.log(a);
  console.log(v);
  console.log(d);
  console.log(r);

if (a != "" && v !== "" && d !== "" && r !==""){
    review
      .build({
          Artist: a,
          Venue: v,
          DateOfConcert: d,
          Review: r})
      .save()
      .catch(error => {
        console.log(error);
      });
  res.redirect("/thankyou");
}else{
  res.render('review');
}

});

router.get('/add', function(req, res) {

res.render('addReview');
});

router.get('/buy', function(req, res) {

  res.render('buyTickets');
  });


// Export routes for server.js to use.
module.exports = router;
