//models.js builds the tables for the db

const Sequelize = require('sequelize');

const connection = require('./'); //connection is sequalize object

const list = connection.define('list', { //.define creates a table for the db
  name: { //attributes
    type: Sequelize.STRING(50),
    allowNull: false
  }, timestamps: false 
});

const todo = connection.define('todo', {
  name : { type: Sequelize.STRING, allowNull: false } ,
  list_name: { type: Sequelize.STRING(50) , allowNull: false},
  timestamps: false
})

connection.sync({ force: false })
  .then(() => console.log('successfully synced database'))
  .catch(err => console.log('error syncing database', err))

module.exports = list;
module.exports = todo;
