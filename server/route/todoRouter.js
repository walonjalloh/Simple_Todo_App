import express from 'express'
import { getTodo,updateTodo,deleteTodo,createTodo } from '../controllers/todoController.js'
import auth from '../middleware/authMiddleware.js'

const todoRouter = express.Router()

todoRouter.route('/').post(auth, createTodo)
todoRouter.route('/:userId').get(getTodo)
todoRouter.route('/:id').patch(auth, updateTodo).delete(auth, deleteTodo)

export default todoRouter