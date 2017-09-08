const Sequelize = require('sequelize');
const sequelize = require('../config/connection.js');

const Review = sequelize.define('user', {
  Artist: {
    type: Sequelize.STRING
  },
  Venue: {
    type: Sequelize.STRING
  },
  DateOfReview: {
    type: Sequelize.DATE
  },
  DateOfConcert: {
    type: Sequelize.DATE
  },
  Review: {
    type: Sequelize.STRING
  },
  Helpful: {
    type: Sequelize.INTEGER
  }
});

// force: true will drop the table if it already exists
Review.sync({force: true}).then(() => {
  // Table created
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
});

module.exports = Review;
