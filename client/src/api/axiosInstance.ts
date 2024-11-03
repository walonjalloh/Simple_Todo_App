import axois from 'axios'

const axiosInstanceUser = axois.create({
    baseURL: 'http://localhost:3500/api/user'
})

const axiosInstanceTodo = axois.create({
    baseURL: 'http://localhost:3500/api/todo'
})

export {
    axiosInstanceTodo,
    axiosInstanceUser
}
