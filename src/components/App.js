import React, { useReducer } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './Layouts/Header'

import TodosContext from './../Context/todos'
import AuthContext from './../Context/auth'
import AppReducer from './../Reducers/appReducer'
import Home from './../Routes/Home'
import About from '../Routes/About';
import Contact from './../Routes/Contact'
import Todo from '../Routes/Todo';
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
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/:todo" component={Todo} />
                {/* //{ <Route path="/contact" render={() => <h2>Contact..</h2>} /> } */}
              </Switch>
            </main>
          </div>
        </TodosContext.Provider>
      </AuthContext.Provider>
    </BrowserRouter>
  )
}

export default App;
