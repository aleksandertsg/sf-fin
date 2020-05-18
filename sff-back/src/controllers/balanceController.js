import Wreck from '@hapi/wreck'
import ethUnits from 'ethereumjs-units'
import config from '../config/index.js'


const getDaiBalance = async (request) => {
  try {
    const { payload: { walletAddress } } = request

    const response = await Wreck.get(
      'https://api.etherscan.io/api?module=account&action=tokenbalance&tag=latest' +
      '&contractaddress=' + config.etherScan.daiContractAddress +
      '&address=' + walletAddress +
      '&apikey=' + config.etherScan.apiKey
    ).then(r => JSON.parse(r.payload.toString()))

    if (response.status === '1') {
      const value = ethUnits.convert(response.result, 'wei', 'eth')

      return { value, message: 'OK' }
    }

    return { message: 'FAIL' }
  } catch (err) {
    console.error(err)

    return { message: 'FAIL' }
  }
}

export default { getDaiBalance }