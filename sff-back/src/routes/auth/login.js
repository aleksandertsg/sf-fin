import authController from '../../controllers/authController.js'
import Joi from '@hapi/joi'
import { failAction } from '../../utils/validation.js'


const routeDefinitions = [
  {
    method: 'POST',
    path: '/auth/login',
    handler: authController.login,
    options: {
      auth: false,
      validate: {
        payload: Joi.object({
          walletAddress: Joi.string().pattern(new RegExp(/^0x[a-fA-F0-9]{40}$/)).required(),
          signedMessage: Joi.string().pattern(new RegExp(/^0x[a-fA-F0-9]{130}$/)).required()
        }),
        failAction
      },
      response: {
        schema: Joi.object({
          message: Joi.string().required(),
          name: Joi.string(),
          jwt: Joi.string()
        }),
        failAction
      }
    }
  }
]

export default routeDefinitions
