// Import the mock library
var SequelizeMock = require('sequelize-mock');

// Setup the mock database connection
var DBConnectionMock = new SequelizeMock();

// Define our Model
var Review = DBConnectionMock.define('review', {
    'Artist': 'Cher',
    'Venue': 'Cher',
    'Review': 'Cher',
});

// You can also associate mock models as well
var GroupMock = DBConnectionMock.define('groups', {
    'name': 'My Awesome Group',
});

Review.belongsTo(GroupMock);

// From there we can start using it like a normal model
Review.findOne({
    where: {
        Artist: 'Cher',
    },
}).then(function(user) {
    // `user` is a Sequelize Model-like object
    user.get('Artist'); // Auto-Incrementing ID available on all Models
    user.get('Venue'); // 'email@example.com'; Pulled from default values
    user.get('Review'); // 'my-user'; Pulled from the `where` in the query


    user.getGroup(); // Will return a `GroupMock` object
});




module.exports = Review;
