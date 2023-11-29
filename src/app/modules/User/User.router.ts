import express from 'express'
import { userControllers } from './User.controller'

const router = express.Router()

router.post('/create-user', userControllers.creatUserController)
router.post('/', userControllers.getUsersController)

export const userRouters = router
