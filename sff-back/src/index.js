import Hapi from '@hapi/hapi'
import Database from './sequelize.js'
import routes from './routes/index.js'
import { validate } from './services/jwtService.js'
import config from './config/index.js'
import hapiAuthJwt2 from 'hapi-auth-jwt2'


const init = async () => {
  const server = Hapi.server({
    port: 3001,
    host: '0.0.0.0'
  })

  await Database.initAll()
  await server.register(hapiAuthJwt2)

  server.auth.strategy('jwt', 'jwt', { key: config.api.jwtSecret, validate })
  server.auth.default('jwt')

  server.route(routes)

  await server.start()
  console.log('Server running on %s', server.info.uri)
}

process.on('unhandledRejection', (err) => {

  console.log(err)
  process.exit(1)
})

init()