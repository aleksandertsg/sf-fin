import login from './auth/login.js'
import dai from './balance/dai.js'
import config from '../config/index.js'


const routeDefinitions = [].concat(login, dai)
  .map((route) => {
    route.path = `${config.api.prefix || ''}${route.path}`

    return route
  })

export default routeDefinitions
