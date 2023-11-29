import { TUser } from './user.interface'
import { User } from './user.model'

const creatUser = async (getData: TUser) => {
  const result = await User.create(getData)
  return result
}

export const userServices = {
  creatUser
}
