import { config } from 'dotenv'
import path from 'path'

config({ path: path.join(process.cwd(), '.env') })

export default {
  db: process.env.DATABASE_URL,
  port: process.env.PORT,
  salt_rounds: process.env.SALT_ROUNDS
}
