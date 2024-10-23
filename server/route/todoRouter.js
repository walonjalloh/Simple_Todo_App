import express from 'express'
import { getTodo,updateTodo,deleteTodo,createTodo } from '../controllers/todoController.js'

const todoRouter = express.Router()

todoRouter.route('/').post(createTodo).get(getTodo)
todoRouter.route('/:id').patch(updateTodo).delete(deleteTodo)

export default todoRouter