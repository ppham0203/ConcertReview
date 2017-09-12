const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://otfbzppwqgautv:92788e3d4a3f056c3674ddd8299b6e7a7dbda21a8645777c21623ac556290d71@ec2-184-72-248-8.compute-1.amazonaws.com:5432/ddas5d1bba36av');
// const sequelize = new Sequelize('postgres', 'mpleier@gmail.com', null, {
//   host: 'localhost',
//   dialect: 'postgres',
//
//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   },
//
// });

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
module.exports = sequelize;
