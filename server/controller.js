
//using sequalize 

const db = require('../database-mysql/models');

module.exports = {
  fetch: (req, res) => {
      const { listName } = req.query; //destructuring 
      db.todo.findAll({ //findAll is a sequalize methods
        where: {list_name: listName}
      })
      .then(todos => { 
        if (todos) { //if you 
          res.status(200).send(todos)
        }
      })
  },
  post: (req, res) => {
      const { todo, listName } = req.body; // destructuring
      db.todo.create({
        name: todo,
        list_name: listName
      })
      .then(todo => {
        res.status(201).send(todo)
      });
  },
  delete: (req, res) => {
      const { todo } = req.query; //destructuring
      db.todo.destory({
        where: { name: todo }
      })
      .then(() => {
        res.status(202).send('Entry deleted')
      })
  }
}