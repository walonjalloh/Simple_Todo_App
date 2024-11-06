import axois from 'axios'


const axiosInstanceUser = axois.create({
    baseURL: 'http://localhost:3500/api/user',
    headers : {
        'Content-Type' : 'application/json'
    }
})

const axiosInstanceTodo = axois.create({
    baseURL: 'http://localhost:3500/api/todo',
    headers : {
        'Content-Type': 'application/json'
    }
})

export {
    axiosInstanceTodo,
    axiosInstanceUser
}
