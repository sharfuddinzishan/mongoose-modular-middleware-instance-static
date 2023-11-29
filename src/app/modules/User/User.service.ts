import { User } from './User.model'
import { TUser } from './User.interface'

const creatUser = async (getData: TUser) => {
  const id = await User.generateId()
  const result = await User.create({ ...getData, id })
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
