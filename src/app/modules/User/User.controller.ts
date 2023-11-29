import { Request, Response } from 'express'
import { userServices } from './User.service'
import { z } from 'zod'
import { UserZodSchema } from './User.validation-zod'
import { TUser } from './User.interface'

const creatUserController = async (req: Request, res: Response) => {
  const getUserData = await req.body.user
  try {
    const parseUser = UserZodSchema.safeParse(getUserData)
    if (!parseUser.success) {
      throw parseUser.error
    }
    const data = await userServices.creatUser(parseUser.data as TUser)
    res.send({
      success: true,
      message: 'New User Created',
      data
    })
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      res.send({
        success: false,
        message: 'User Not Created',
        error: error.issues
      })
    } else {
      res.send({
        success: false,
        message: 'User Not Created',
        error
      })
    }
  }
}

const getUsersController = async (req: Request, res: Response) => {
  try {
    const data = await userServices.getUsers()
    res.send({
      success: true,
      message: `${data?.length || 0} Users Reteived`,
      data
    })
  } catch (error: unknown) {
    res.send({
      success: false,
      message: 'Users Fetched Failed',
      error
    })
  }
}
const getUserByIdController = async (req: Request, res: Response) => {
  const getUserId = req.params.userId
  try {
    const data = await userServices.getUserById(+getUserId)
    if (data.length) {
      res.send({
        success: true,
        message: `User Reteived`,
        data
      })
    } else {
      throw new Error('No Such User Found')
    }
  } catch (error: unknown) {
    res.send({
      success: false,
      message: 'User Fetched Failed',
      error
    })
  }
}

export const userControllers = {
  creatUserController,
  getUsersController,
  getUserByIdController
}
