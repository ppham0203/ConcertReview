var express = require("express");
var app = express();
var router = express.Router();

app.set('models', require('../models/reviews.js'));
var review = app.get('models');
// console.log(review);


// Create all our routes and set up logic within those routes where required.
router.get('/', function(req, res) {
  // console.log(review);
  review.findAll({raw: true}).then(x => {
  // console.log(x);
res.render('index', {x});
});
});



router.post("/:Artist", function(req, res) {
  var condition = req.params.Artist;
  console.log(condition);
  review.findAll({
    raw: true,
    where: {
      Artist: condition
    }}).then(x => {
  console.log(x);
  res.render('index', {x});
  });

});


router.post("/api/:Artist:Venue:Review", function(req, res) {
  var a = req.body.Artist;
  var v = req.body.Venue;
  var r = req.body.Review;
  console.log(a);
  console.log(v);
  console.log(r);


  review
    .build({
        Artist: 'Arnold',
        Venue: 'Palmer',
        Review:"Golf."})
    .save()
    .catch(error => {
      // Ooops, do some error-handling
    });
res.redirect("/");





});



router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  cat.delete(condition, function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
