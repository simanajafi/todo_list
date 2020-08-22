import React, { useState, useContext } from 'react'
import TodosContext from './../../Context/todos'


function FormAddTodo(props) {

    const [text, setText] = useState('')
    const todosContext = useContext(TodosContext)

    let formHandler = e => {
        e.preventDefault();
        todosContext.add(text)
        setText('')
      }
    
    let inputHandler = e => setText(e.target.value) 

    return(
        <form className="form-inline" onSubmit={formHandler}>
            <div className="form-group">
                <input type="text" className="form-control mx-sm-3" placeholder="i want to do ..."
                    onChange={inputHandler} value={text} />
                <button type="submit" className="btn btn-primary">add</button>
            </div>
        </form>
    )
}

export default FormAddTodo;