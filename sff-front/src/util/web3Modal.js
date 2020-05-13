import Web3 from 'web3'
import Web3Modal from 'web3modal'
import Portis from '@portis/web3'


console.log(process.env.REACT_APP_PORTIS_ID)

const loadProvider = async () => {
  const providerOptions = {
    portis: {
      package: Portis,
      options: {
        id: process.env.REACT_APP_PORTIS_ID || 'PORTIS_ID'
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



export default { loadProvider }