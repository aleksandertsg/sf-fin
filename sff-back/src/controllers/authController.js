import User from '../models/User.js'
import { sign } from '../services/jwtService.js'
import { getName } from '../utils/names.js'
import { isSignedByAddress } from '../utils/ethValidation.js'


const login = async (request, h) => {
  try {
    const { payload: { signedMessage, walletAddress } } = request

    if (!isSignedByAddress(signedMessage, walletAddress)) {
      return { message: 'FAIL' }
    }

    let user = await User.findOne({ where: { walletAddress } })

    if (!user) {
      user = await User.create({ ...request.payload, name: getName() })
    }

    if (user) {
      const jwt = await sign(user.id)
      return { message: 'OK', jwt, name: user.name }
    }
  } catch (err) {
    console.error(err)

    return { message: 'FAIL' }
  }
}

export default { login }