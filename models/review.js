var Sequelize = require('sequelize');
var sequelize = require('../config/connection.js'); //sequelize instance


const Review = sequelize.define('review', {
    Artist: Sequelize.STRING,
    Venue: Sequelize.STRING,
    DateOfReview: Sequelize.DATE,
    DateOfConcert: Sequelize.STRING,
    Review: Sequelize.STRING(5000),
    Helpful: Sequelize.INTEGER
});


Review.sync({
    force: true
}).then(() => {
    // Table created


    Review.create({
        Artist: 'Michael Jackson',
        Venue: 'O2 Arena',
        Review: "Awesome Show!!!!"
    });

    Review.create({
        Artist: 'Cher',
        Venue: 'Forum',
        Review: "Left after one song"
    });

    return Review.create({
        Artist: 'Kendrick Lamar',
        Venue: 'United Center',
        Review: "testing"
    });
});

module.exports = Review;

