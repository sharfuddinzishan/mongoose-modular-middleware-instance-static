import express from 'express'
import { userControllers } from './User.controller'

const router = express.Router()

router.post('/create-user', userControllers.creatUserController)
router.get('/', userControllers.getUsersController)
router.get('/:userId', userControllers.getUserByIdController)

export const userRouters = router
