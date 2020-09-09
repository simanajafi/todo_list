import axios from 'axios'

const instance = axios.create({
    baseURL : 'https://react-todo-ffb5f.firebaseio.com/',
    timeout : 5000
})

instance.interceptors.request.use(function (config) {
    console.log(config)
    return config
}, function (err) {
    console.log(err)
    return Promise.reject(err)
})

instance.interceptors.response.use(function (response) {
    console.log(response)
    return response
}, function (err) {
    console.log(err)
    return Promise.reject(err)
})


export default instance;