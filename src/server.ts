import app from './app'
import config from './app/config'

async function bootstrap() {
  try {
    await app.listen((await config.port) || 4000, () => {
      console.log(`Port Listened: ${config.port || 4000}`)
    })
  } catch (error) {
    console.log('Server Failed To Start')
  }
}

bootstrap()
