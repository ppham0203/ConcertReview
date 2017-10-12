const Sequelize = require('sequelize');

// const sequelize = new Sequelize('postgres://zokizcuocorcfk:b11e184bfbfcc802004e99d38121b63941f30270b91da6fd9046f5c0159826ae@ec2-54-225-88-199.compute-1.amazonaws.com:5432/d5u3c0qj2tom3r');
// // const sequelize = new Sequelize('postgres', 'mpleier@gmail.com', null, {
// //     host: 'localhost',
// //     dialect: 'postgres',
// //
// //     pool: {
// //         max: 5,
// //         min: 0,
// //         idle: 1000
// //     },
// //
// // });





var sequelize = new Sequelize("concert_reviews", "root", "guppies1", {
    host: "localhost",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });
  
 function connect() {
    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
}

connect();



module.exports = sequelize;




