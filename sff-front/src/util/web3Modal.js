import Web3 from 'web3'
import Web3Modal from 'web3modal'
import Portis from '@portis/web3'
import config from '../config'


const loadProvider = async () => {
  const providerOptions = {
    portis: {
      package: Portis,
      options: {
        id: config.portisId
      }
    }
  }

  const web3Modal = new Web3Modal({
    network: 'mainnet', // optional
    cacheProvider: false, // optional
    providerOptions // required
  })

  const provider = await web3Modal.connect()

  return new Web3(provider)
}

export { loadProvider }
