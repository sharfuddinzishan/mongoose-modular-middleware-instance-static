import { User } from './User.model'
import { TUser } from './user.interface'

const creatUser = async (getData: TUser) => {
  const result = await User.create(getData)
  return result
}

export const userServices = {
  creatUser
}
