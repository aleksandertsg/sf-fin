import Joi from '@hapi/joi'
import { failAction } from '../../utils/validation.js'
import balanceController from '../../controllers/balanceController.js'


const routeDefinitions = [
  {
    method: 'POST',
    path: '/balance/dai',
    handler: balanceController.getDaiBalance,
    options: {
      auth: 'jwt',
      validate: {
        payload: Joi.object({
          walletAddress: Joi.string().pattern(new RegExp(/^0x[a-fA-F0-9]{40}$/)).required()
        }),
        failAction
      },
      response: {
        schema: Joi.object({
          value: Joi.number(),
          message: Joi.string().required()
        }),
        failAction
      }
    }
  }
]

export default routeDefinitions