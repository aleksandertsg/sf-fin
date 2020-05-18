import React, { useEffect, useState } from 'react'
import getAppContext from '../contexts/appContext'
import { Button, Heading, Main, Paragraph } from 'grommet'
import useAuthentication from '../hooks/useAuthentication'
import useAPI from '../hooks/useAPI'


const Home = () => {
  const { user, web3, account } = getAppContext()
  const { setAuth } = useAuthentication()
  const { getDaiBalance } = useAPI()
  const [eth, setETH] = useState(null)
  const [dai, setDAI] = useState(null)

  useEffect(() => {
    const loadBalances = async () => {
      const balanceWei = await web3.eth.getBalance(account)
      const balanceEth = web3.utils.fromWei(balanceWei, 'ether')
      const balanceDai = await getDaiBalance(account)

      setETH(balanceEth)
      setDAI(balanceDai)
    }

    loadBalances()
  }, [account, getDaiBalance, web3.eth, web3.utils])

  return (
    <Main pad="xlarge">
      <Heading size='xlarge'>{`Hi ${user} !`}</Heading>
      <Paragraph>Something about something</Paragraph>
      <Paragraph>{eth} ETH</Paragraph>
      <Paragraph>{dai} DAI</Paragraph>
      <Paragraph>
        <Button primary label="Logout" onClick={() => setAuth()} />
      </Paragraph>
    </Main>
  )
}

export default Home