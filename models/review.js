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

module.exports = Review;
