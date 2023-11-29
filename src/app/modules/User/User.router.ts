import express from 'express'
import { userControllers } from './User.controller'

const router = express.Router()

router.post('/create-user', userControllers.creatUserController)

export const userRouters = router
