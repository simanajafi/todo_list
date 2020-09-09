import axios from 'axios'

const instance = axios.create({
    baseURL : 'https://react-todo-ffb5f.firebaseio.com/',
    timeout : 5000
})

export default instance;