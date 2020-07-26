import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './Layouts/Header'
import FromAddTodo from './Todo/FormAddTodo'
import TodoList from './Todo/TodoList';


class App extends Component {

  state = {
    todos: []
  }
  
  AddTodo(text) {
    this.setState(prevState => {
      return {
        todos: [
          ...prevState.todos,
          { key: Date.now(), done: false, text }
        ]
      }
    })
  }

  deleteTodo(key) {
    this.setState(prevState => {
      return{
      todos: prevState.todos.filter(item => item.key !== key)
      }
    })
  }

  editTodo(key, text) {
    let { todos } = this.state
    let item = todos.find(item => item.key === key)
    item.text = text

    let newTodos = todos.filter(item => item.key !== key)

    this.setState({
      todos: [
        ...newTodos,
        item
      ]
    })
  }

  toggleTodo(key) {
    let { todos } = this.state
    let item = todos.find(item => item.key === key)
    item.done = !item.done

    let newTodos = todos.filter(item => item.key !== key)

    this.setState({
      todos: [
        ...newTodos,
        item
      ]
    })
  }

  render() {
    let { todos, statusDone } = this.state

    return (
      <div className="App">
        <Header />
        <main>
          <section className="jumbotron">
            <div className="container d-flex flex-column align-items-center">
              <h1 className="jumbotron-heading">Welcome!</h1>
              <p className="lead text-muted">To get started, add some items to your list:</p>
              <FromAddTodo add={this.AddTodo.bind(this)} / >
            </div>
          </section>
          <div className="todosList">
            <div className="container">
              <div className="d-flex flex-column align-items-center ">
                <TodoList 
                  todos = {this.state.todos}
                  delete={this.deleteTodo.bind(this)}
                  done={this.toggleTodo.bind(this)}
                  edit={this.editTodo.bind(this)} />
              </div>

            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default App;
