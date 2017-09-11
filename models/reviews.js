var Sequelize = require('sequelize');
var sequelize = require('../config/connection.js'); //sequelize instance


const Review = sequelize.define('review', {
  Artist: Sequelize.STRING,
  Venue: Sequelize.STRING,
  DateOfReview: Sequelize.DATE,
  DateOfConcert: Sequelize.DATE,
  Review: Sequelize.STRING,
  Helpful: Sequelize.INTEGER
});

Review.sync({force: true}).then(() => {
  // Table created
  return Review.create({
    Artist: 'John',
    Venue: 'Hancock',
    Review:"A signiture event."
  });
});

module.exports = Review;
