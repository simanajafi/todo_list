import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './Header'
import FromAddTodo from './FormAddTodo'
import Todo from './Todo'


class App extends Component {

  state = {
    todos: [],
    statusDone: false
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

  render() {
    let { todos, statusDone } = this.state
    let filterTodos = todos.filter(item => item.done == statusDone)

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
                <nav className="col-6 mb-3">
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    
                    <a className={`nav-item nav-link font-weight-bold ${!statusDone ? 'active' : ''}`} 
                    onClick={() => this.setState({statusDone: false})} id="nav-home-tab"> 
                    undone <span className="badge badge-secondary">{ todos.filter(item => item.done == false).length } </span></a>
                    
                    <a className={`nav-item nav-link font-weight-bold ${statusDone ? 'active' : ''}`} 
                    onClick={() => this.setState({statusDone: true})} id="nav-profile-tab"> 
                    done <span className="badge badge-success">{ todos.filter(item => item.done == true).length } </span></a>
                  
                  </div>
                </nav>
                { filterTodos.length == 0 
                  ? "There isn't any Todos"
                  : filterTodos.map(item => <Todo key={item.key} text={item.text} /> )
                }  
              </div>

            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default App;
