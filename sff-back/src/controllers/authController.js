import User from '../models/User.js'
import { sign } from '../services/jwtService.js'


const login = async (request, h) => {
  try {
    const [user, created] = await User.findOrCreate({ where: { ...request.payload } })

    if (user) {
      const jwt = await sign(user.id)
      return { message: 'OK', jwt }
    }
  } catch (err) {
    console.error(err)

    return { message: 'FAIL' }
  }
}

export default { login }