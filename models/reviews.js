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

  Review.create({
    Artist: 'Bob',
    Venue: 'Ross',
    Review:"Painted a picture."
  });

  return Review.create({
    Artist: 'John',
    Venue: 'Hancock',
    Review:"A signature event."
  });
});

module.exports = Review;
