import React from "react";
import axios from 'axios';

import TodoEntry from "./TodoEntry.jsx";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      todos: [],
      listName: 'To Do List'
    };
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  componentDidMount() {
    axios.get('/api/todolist', { params: { listName: this.state.listName } })
    .then(result => this.setState({todos: result.data}))
    .catch(err => console.log(error));
  }

  handleInput(e) {
    this.setState({ todo: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { todo, todos } = this.state;
    axios.post('/api/todolist', { todo, listName: this.state.listName })
    .catch(err => console.log(err));
    this.setState({ todos: [...todos, todo] });
    e.target.reset();
  }

  deleteTodo(index) {
    axios.delete('/api/todolist', { params: { index, listName: this.state.listName } })
    .then(result => this.setState({ todos: result.data }))
    .catch(err => console.log(err));
  }


  render() {
    return (
      <div>
        <h1>{this.state.listName}</h1>
        <form onSubmit={e => this.handleSubmit(e)}>
          Add todo: <input onKeyUp={e => this.handleInput(e)} required />
          <button>&#10010;</button>
        </form>
        <br />
        <div>
          {this.state.todos && this.state.todos.map((todo, index) => (
            <TodoEntry
              key={index}
              todo={todo}
              index={index}
              deleteTodo={this.deleteTodo}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default TodoList;
