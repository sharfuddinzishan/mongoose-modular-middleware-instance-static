import { Schema, model } from 'mongoose'
import { TUser } from './User.interface'

const UserSchema = new Schema<TUser>({
  id: {
    type: Number,
    require: true,
    unique: true
  },
  name: { type: String, required: true },
  role: { type: String, default: 'Normal' },
  security: { type: String }
})

// Model From Schema
export const User = model<TUser>('User', UserSchema)
