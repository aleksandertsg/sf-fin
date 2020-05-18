import React, { useEffect, useState } from 'react'
import getAppContext from '../contexts/appContext'
import { Button, Heading, Main, Paragraph } from 'grommet'
import useAuthentication from '../hooks/useAuthentication'
import useAPI from '../hooks/useAPI'
import NeoBox from '../component/NeoBox'


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
  }, [])

  return (
    <Main pad="xlarge">
      <NeoBox>
        <Heading>{`Hi,`}</Heading>
        <Heading>{`${user}!`}</Heading>
        <Paragraph>Here are your balances:</Paragraph>
        <Paragraph>{eth} ETH</Paragraph>
        <Paragraph>{dai} DAI</Paragraph>
        <Paragraph>
          <Button primary label="Logout" onClick={() => setAuth()} />
        </Paragraph>
      </NeoBox>
    </Main>
  )
}

export default Home