import { Request, Response } from 'express'
import { userServices } from './User.service'
import { z } from 'zod'
import { UserZodSchema } from './User.validation-zod'

const creatUserController = async (req: Request, res: Response) => {
  const getUserData = await req.body.user
  try {
    const parseUser = UserZodSchema.safeParse(getUserData)
    if (!parseUser.success) {
      throw parseUser.error
    }
    const data = await userServices.creatUser(parseUser.data)
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

export const userControllers = { creatUserController }
