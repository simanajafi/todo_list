import React, { useState, useContext } from 'react'
import EditTodo from './EditTodo'
import TodosContext from './../../Context/todos'


function Todo(props) {

    const { item } = props;
    const [ edit, setEdit ] = useState(false);
    const todosContext = useContext(TodosContext);
    
    let editHandler = text => {
        todosContext.dispatch({ type: 'edit_todo' , payload: { key: item.key , text: text }})
        setEdit(false);
    }

    let deleteHandler = e => {
        //ajax
        todosContext.dispatch({ type: 'delete_todo', payload: { key: item.key }})
    }

    return (
        <>
            {
                !edit ? (
                    <div className="col-6 mb-2">
                        <div className="d-flex justify-content-between align-items-center border rounded p-3">
                            <div>
                                {item.text}
                            </div>
                            <div>
                                <button type="button" className={`btn btn-sm mr-1 ${item.done ? "btn-warning" : "btn-success"}`}
                                    onClick={() => todosContext.dispatch({ type: 'toggle_todo', payload: { key: item.key , done: !item.done }})}>{item.done ? "undone" : "done"}</button>
                                <button type="button" className="btn btn-info btn-sm mr-1" 
                                    onClick={() => setEdit(true)}>edit</button>
                                <button type="button" className="btn btn-danger btn-sm"
                                    onClick={deleteHandler}>delete</button>
                            </div>
                        </div>
                    </div>
                )
                    :
                    <EditTodo text={item.text} edit={editHandler}/>
            }
        </>
    )
}

export default Todo;