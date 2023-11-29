import { Schema, model } from 'mongoose'
import { TUser, UserModel } from './User.interface'

const UserSchema = new Schema<TUser, UserModel>({
  id: {
    type: Number,
    require: true,
    unique: true
  },
  name: { type: String, required: true },
  role: { type: String, default: 'Normal' },
  security: { type: String }
})

// Custom Static Method
UserSchema.statics.generateId = async () => {
  try {
    //   let lastId = User.find().sort({ id: -1 }).limit(1).exec()
    const lastId = await User.findOne().sort({ _id: -1 }).exec()
    if (!lastId) return 1
    return lastId.id + 1
  } catch (error) {
    return new Error('Can Not Generated ID')
  }
}

// Model From Schema
export const User = model<TUser, UserModel>('User', UserSchema)
