import React, { useState, useContext } from 'react'
import Todo from './Todo'
import TodosContext from './../../Context/todos'


function TodoList(props) {

    const [statusDone, setDone] = useState(false)
    const todosContext = useContext(TodosContext)
    let { todos } = todosContext
    let filterTodos = todos.filter(item => item.done === statusDone)

    return (
        <>
            <nav className="col-6 mb-3">
                <div className="nav nav-tabs" id="nav-tab" role="tablist">

                    <a className={`nav-item nav-link font-weight-bold ${!statusDone ? 'active' : ''}`}
                        onClick={() => setDone(false)} id="nav-home-tab">
                        undone <span className="badge badge-secondary">
                            {todos.filter(item => item.done === false).length} </span></a>

                    <a className={`nav-item nav-link font-weight-bold ${statusDone ? 'active' : ''}`}
                        onClick={() => setDone(true)} id="nav-profile-tab">
                        done <span className="badge badge-success">
                            {todos.filter(item => item.done === true).length} </span></a>

                </div>
            </nav>
            {
                filterTodos.length === 0
                    ? <p>"There isn't any Todos"</p>
                    : filterTodos.map(item => <Todo key={item.key} item={item} />)
            }
        </>
    )
}

export default TodoList