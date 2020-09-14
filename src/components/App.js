import React, { useReducer } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './Layouts/Header'

import TodosContext from './../Context/todos'
import AuthContext from './../Context/auth'
import AppReducer from './../Reducers/appReducer'
import Home from './../Routes/Home'

// class App extends Component {

//   state = {
//     todos: [],
//     authenticated: false,
//   }
  


  
// }

function App() {


  const [state , dispatch] = useReducer(AppReducer , {
    todos : [],
    authenticated : false 
})

 
  return (
    <BrowserRouter>
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
              <Route path="/">
                <Home />
              </Route>
            </main>
          </div>
        </TodosContext.Provider>
      </AuthContext.Provider>
    </BrowserRouter>
  )
}

export default App;
