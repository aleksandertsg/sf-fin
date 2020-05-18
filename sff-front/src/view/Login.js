import { Button, Heading, Main, Paragraph } from 'grommet'
import React, { useCallback } from 'react'
import { getLoginSignature, loadProvider } from '../util/web3Util'
import useAPI from '../hooks/useAPI'
import { withRouter } from 'react-router-dom'
import useAppContext from '../contexts/appContext'
import NeoBox from '../component/NeoBox'


const Login = ({ history }) => {
  const { setWeb3, setAccount } = useAppContext()
  const { login, loading } = useAPI()

  const callLogin = useCallback(async () => {
    const web3 = await loadProvider()

    setWeb3(web3)

    const accounts = await web3.eth.getAccounts()

    if (loading) return

    if (accounts[0]) {
      setAccount(accounts[0])
      const signature = await getLoginSignature(web3, accounts[0])

      await login(accounts[0], signature)
    }

    history.push('/home')
  }, [setWeb3, history, loading, login, setAccount])

  return (
    <Main pad='xlarge'>
      <NeoBox>
        <Heading>Hi!</Heading>
        <Paragraph>Lets try to connect your wallet</Paragraph>
        <Paragraph>
          <Button primary label={'Connect'} disabled={loading} onClick={callLogin} />
        </Paragraph>
      </NeoBox>
    </Main>
  )
}

export default withRouter(Login)