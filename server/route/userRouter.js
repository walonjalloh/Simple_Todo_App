import express from 'express'
import { signIn,signUp } from '../controllers/userController.js'


const userRouter = express.Router()

userRouter.route('/register').post(signUp)
userRouter.route('/login').post(signIn)

export default userRouter