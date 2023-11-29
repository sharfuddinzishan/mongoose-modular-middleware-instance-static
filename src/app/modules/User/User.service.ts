import { User } from './User.model'
import { TUser } from './user.interface'

const creatUser = async (getData: TUser) => {
  const result = await User.create(getData)
  return result
}

const getUsers = async () => {
  const result = await User.find({})
  return result
}

const getUserById = async (id: number) => {
  const result = await User.find({ id })
  return result
}

export const userServices = {
  creatUser,
  getUsers,
  getUserById
}
