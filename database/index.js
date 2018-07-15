const mysql = require('mysql');
const Sequelize = require('sequelize');

const connection = new Sequelize('todo_list', 'root', '', {
    host: 'localhost',
    dialect: 'mysql' //defines which dialet you will use with sequelize
});

connection.authenticate() //.authenticate is testing the mysql database connection
  .then(() => console.log('successfully authentication connected'))
  .catch(err => console.log('error authenticating connection'));

  module.exports = connection;