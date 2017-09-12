var express = require("express");
var app = express();
var router = express.Router();



app.set('models', require('../models/reviews.js'));
var review = app.get('models');
// console.log(review);

router.get("/api/all", function(req, res) {
    review.findAll({}).then(function(results) {
      res.json(results);
    });
  });

// Create all our routes and set up logic within those routes where required.
router.get('/', function(req, res) {
  // console.log(review);
  review.findAll({raw: true, limit: 5}).then(x => {
  // console.log(x);
res.render('index', {x});
});
});

router.post("/review/", function(req, res) {
  console.log(req.param('Artist'));
  var condition = req.param('Artist');
  review.findAll({
    raw: true,
    where: {
      Artist: condition
    }
  }).then(x => {
  console.log(x);
  res.render('index', {x});
  });

});




router.post("/api/", function(req, res) {
  var a = req.param('Artist');
  var v = req.param('Venue');
  var d = req.param('Date');
  var r = req.param('Review');
  console.log(a);
  console.log(v);
  console.log(d);
  console.log(r);


  review
    .build({
        Artist: a,
        Venue: v,
        DateOfConcert: d,
        Review: r})
    .save()
    .catch(error => {
      // Ooops, do some error-handling
    });
res.redirect("/");

});

router.get('/add', function(req, res) {

res.render('addReview');
});





// Export routes for server.js to use.
module.exports = router;
