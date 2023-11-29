/* eslint-disable no-console */
import mongoose from 'mongoose'
import config from '../app/config'

const main = async () => {
  try {
    if (!config.db) {
      console.log('Database Not Found')
    }
    await mongoose.connect(config.db as string)
    console.log('Database Connected')
  } catch (error) {
    console.log('Database Connect Problem')
  }
}

main()
