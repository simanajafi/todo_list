import React, { useState, useContext } from 'react'
import TodosContext from './../../Context/todos'
import AuthContext from './../../Context/auth'


// function FormAddTodo(props) {

//     const [text, setText] = useState('')
//     const todosContext = useContext(TodosContext)

//     let formHandler = e => {
//         e.preventDefault();
//         todosContext.add(text)
//         setText('')
//       }
    
//     let inputHandler = e => setText(e.target.value) 

//     return(
//         <form className="form-inline" onSubmit={formHandler}>
//             <div className="form-group">
//                 <input type="text" className="form-control mx-sm-3" placeholder="i want to do ..."
//                     onChange={inputHandler} value={text} />
//                 <button type="submit" className="btn btn-primary">add</button>
//             </div>
//         </form>
//     )
// }


class FormAddTodo extends React.Component {

    state = { text: '' }
    static contextType = TodosContext;

    formHandler(e) {
        e.preventDefault();
        this.context.add(this.state.text)
        this.setState({ text: ''})
    }
    
    inputHandler(e) { this.setState({ text: e.target.value }) }

    render() {
        return (
            <AuthContext.Consumer>
                {context => ( // chon mkhaim shart dakhelesh bezarim bayad az yek tag biroi estefade konim <></>
                    <> 
                        {context.authenticated
                                ? (
                                    <form className="form-inline" onSubmit={this.formHandler.bind(this)}>
                                        <div className="form-group">
                                            <input type="text" className="form-control mx-sm-3" placeholder="i want to do ..."
                                                onChange={this.inputHandler.bind(this)} value={this.state.text} />
                                            <button type="submit" className="btn btn-primary">add</button>
                                        </div>
                                    </form>
                                )
                                : <p>You must be login</p>
                        }
                    </>
                )
                }
            </AuthContext.Consumer>
        )
    }
}


export default FormAddTodo;