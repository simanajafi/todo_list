function appReducer(state, action) {
  console.log(state , action);

  switch (action.type) {
    case 'add_todo':
      return add_todo(state, action);
      break;
    case 'login_user':
      return login_user(state);
      break;
    case 'logout_user':
      return logout_user(state);
      break;
    case 'delete_todo':
      return delete_todo(state, action)
      break;
    case 'edit_todo':
      return editTodo(state, action)
      break;
    case 'toggle_todo':
      return toggle_todo(state, action);
      break;
    default:
      return state;
      break;
  }
}


let login_user = (state) => {
  return {
    ...state,
    authenticated: true
  }
}

let logout_user = (state) => {
  return {
    ...state,
    authenticated: false
  }
}

let add_todo = (state, action) => {
  let { text } = action.payload
  return {
    ...state,
    todos: [
      ...state.todos,
      { key: Date.now(), done: false, text }
    ]
  }
}

let delete_todo = (state, action) => {
  let { key } = action.payload
  return {
    ...state,
    todos: state.todos.filter(item => item.key !== key)
  }
}

export default appReducer;

let editTodo = (state, action) => {
  let { key, text } = action.payload;
  let item = state.todos.find(item => item.key === key)
  item.text = text
  let newTodos = state.todos.filter(item => item.key !== key)

  return {
      ...state,
      todos : [
          ...newTodos,
          item
      ]
  }
}

let toggle_todo = (state, action) => {
  let { key, done } = action.payload
  let item = state.todos.find(item => item.key === key)
  item.done = done
  let newTodos = state.todos.filter(item => item.key !== key)

  return {
    ...state,
    todos: [
      ...newTodos,
      item
    ]
  }
}


