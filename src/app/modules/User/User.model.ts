import { Schema } from 'mongoose'
import { TUser } from './user.interface'

const UserSchema = new Schema<TUser>({
  id: {
    type: String,
    require: true,
    unique: true
  },
  name: { type: String, required: true },
  role: { type: String, default: 'User' },
  security: { type: String }
})
