import { Button, Heading, Main, Paragraph } from 'grommet'
import React, { useCallback } from 'react'
import { loadProvider } from '../util/web3Modal'
import useAPI from '../hooks/useAPI'
import { withRouter } from 'react-router-dom'
import useAppContext from '../contexts/appContext'


const Login = ({ history }) => {
  const { setWeb3 } = useAppContext()
  const { login, loading } = useAPI()

  const callLogin = useCallback(async () => {
    const web3 = await loadProvider()

    setWeb3(web3)

    const accounts = await web3.eth.getAccounts()

    if (loading) return

    if (accounts[0]) await login(accounts[0])

    history.push('/home')
  }, [setWeb3, history, loading, login])

  return (
    <Main pad="xlarge">
      <Heading>Something</Heading>
      <Paragraph>Something about something</Paragraph>
      <Paragraph>
        <Button primary label="Login" disabled={loading} onClick={callLogin} />
      </Paragraph>
    </Main>
  )
}

export default withRouter(Login)