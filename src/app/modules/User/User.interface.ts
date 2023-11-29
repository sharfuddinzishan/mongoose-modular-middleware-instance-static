import { Model } from 'mongoose'

export type TRole = 'Admin' | 'User' | 'Normal'
export type TUser = {
  id: number
  name: string
  role: TRole
  security?: string
}

export interface UserModel extends Model<TUser> {
  generateId(): Promise<void>
}
