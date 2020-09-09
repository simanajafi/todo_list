import React, { useReducer, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './Layouts/Header'
import FromAddTodo from './Todo/FormAddTodo'
import TodoList from './Todo/TodoList';
import TodosContext from './../Context/todos'
import AuthContext from './../Context/auth'
import AppReducer from './../Reducers/appReducer'
import todoApi from './../Api/todos'
// class App extends Component {

//   state = {
//     todos: [],
//     authenticated: false,
//   }
  


  
// }

function App() {

  const [ loading, setLoading ] = useState()

  const [state , dispatch] = useReducer(AppReducer , {
    todos : [],
    authenticated : false 
})

  useEffect(() => {
    setLoading(true)
    todoApi.get('/todos.json')
      .then(response => jsonHandler(response.data))
      .catch(err => console.log(err))
  }, [])

  let jsonHandler = (data) => {
    setLoading(false)
    let todos = Object.entries(data)
      .map(([key, value]) => {  //map khodesh ye func ke vorodi list migire 2 a value dare
        return {
          ...value,
          key
        }
      });
    dispatch({ type: 'init_todo', payload: { todos } })
  }

  return (
    <AuthContext.Provider value={{
      authenticated: state.authenticated,
      dispatch
    }}>
      <TodosContext.Provider value={{
        todos: state.todos,
        dispatch
      }}>
        <div className="App">
          <Header />
          <main>
            <section className="jumbotron">
              <div className="container d-flex flex-column align-items-center">
                <h1 className="jumbotron-heading">Welcome!</h1>
                <p className="lead text-muted">To get started, add some items to your list:</p>
                <FromAddTodo />
              </div>
            </section>
            <div className="todosList">
              <div className="container">
                <div className="d-flex flex-column align-items-center ">
                  {
                    loading
                    ? <h2>loading data...</h2>
                    : <TodoList />
                  }
                </div>

              </div>
            </div>
          </main>
        </div>
      </TodosContext.Provider>
    </AuthContext.Provider>
  )
}

export default App;
