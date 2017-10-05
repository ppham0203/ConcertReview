var express = require("express");
var app = express();
var router = express.Router();
var handlebars = require('handlebars');
handlebars.registerHelper('date', require('helper-date'));
var sequelize = require('../config/connection.js');

app.set('models', require('../models/review.js'));
var review = app.get('models');


router.get("/api/all", function(req, res) {
    review.findAll({}).then(function(results) {
        res.json(results);
    });
});


router.get("/api/:Artist", function(req, res) {
    if (req.param('Artist')) {
        review.findAll({
            where: {
                Artist: req.param('Artist')
            }
        }).then(function(results) {
            res.json(results);
        });
    }
});

// Get method used to display the 7 latest reviews on homepage.
router.get('/', function(req, res) {

    review.findAll({
        raw: true,
        limit: 7,
        order: [
            [
                'createdAt',
                'DESC'
            ]
        ]
    }).then(x => {

        res.render('index', { x });
  });
});

router.get('/thankyou', function(req, res) {
    review.findAll({
        limit: 1,
        order: [
            ['createdAt', 'DESC']
        ]
    }).then(x => {
        // console.log(x);
        res.render('thankyou', { x });
    });
});

// Post Method used once user submits artist search. Shows reviews with highest helpful score first.
router.post("/review", function(req, res) {
    console.log(req.param('Artist'));
    var condition = req.param('Artist');
    review.findAll({
        raw: true,
    order: [['Helpful', 'DESC']],
        where: {
            Artist:  condition
            
        }
    }).then(x => {
        console.log(x);
        if (x.length == 0) {
            res.redirect('/noreview');
        } else {
            res.render('review', { x });
        }
    });
});

router.get('/noreview', function(req, res) {
    review.findAll({
        limit: 1,
        order: [
            ['createdAt', 'DESC']
        ]
    }).then(x => {
        // console.log(x);
        res.render('noReview', { x });
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

    if (a != "" && v !== "" && d !== "" && r !== "") {
        review
            .build({
                Artist: a,
                Venue: v,
                DateOfConcert: d,
                Review: r
            })
            .save()
            .catch(error => {
                console.log(error);
            });
        res.redirect("/thankyou");
    } else {
        res.render('review');
    }

});

router.get('/add', function(req, res) {

    res.render('addReview');
});

router.get('/buy', function(req, res) {

    res.render('buyTickets');
});


// Post method used when user clicks on Like Button for review, increasing the "helpful" field by 1
router.post("/helpful/:id/like", function (req, res) {
  review.update({ Helpful: sequelize.literal("Helpful + 1") },
    { where: { Artist: req.params.id } })
    .then(function (results) {
      console.log(results);
      console.log('return from update');
      res.json(results);
    });
});

// Post method used when user clicks on Dislike Button for review, decreasing the "helpful" field by 1
router.post("/helpful/:id/dislike", function (req, res) {
  review.update({ Helpful: sequelize.literal("Helpful - 1") },
    { where: { Artist: req.params.id } })
    .then(function (results) {
      console.log(results);
      console.log('return from update');
      res.json(results);
    });
});


// Export routes for server.js to use.
module.exports = router;
