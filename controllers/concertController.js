var express = require("express");
var app = express();
var router = express.Router();


router.get('/css/style.css', function(req, res){
  console.log(__dirname + '/../public/assets/css/style.css');
  app.use(express.static(__dirname + '/../public/assets/css/style.css'));
});


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

router.post("/s/", function(req, res) {
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
  var r = req.param('Review');
  console.log(a);
  console.log(v);
  console.log(r);


  review
    .build({
        Artist: a,
        Venue: v,
        Review: r})
    .save()
    .catch(error => {
      // Ooops, do some error-handling
    });
res.redirect("/");





});


// Export routes for server.js to use.
module.exports = router;
