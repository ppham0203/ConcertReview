<<<<<<< HEAD
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
    Venue: 'Hancock'
=======
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
>>>>>>> f702bf992b55f3651a51fc3a12fb14ede10a5351
  });
});

module.exports = Review;
