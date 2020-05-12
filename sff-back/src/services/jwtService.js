import User from '../models/User.js'
import JWT from 'jsonwebtoken'
import config from '../config/index.js'


const validate = async (decoded, request, h) => {
  if (decoded.id) {
    const user = await User.findByPk(decoded.id)
    return { isValid: !!user }
  }

  return { isValid: false }
}

const sign = async (userId) => {
  return JWT.sign({ id: userId }, config.api.jwtSecret)
}

export { validate, sign }