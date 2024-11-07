import express from 'express'
import { refreshToken } from "../controllers/refreshTokenController.js"

export const refreshTokenRouter  = express.Router()

refreshTokenRouter.route('/').post(refreshToken)