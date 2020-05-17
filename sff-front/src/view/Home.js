import React from 'react'
import getAppContext from '../contexts/appContext'
import { Button, Heading, Main, Paragraph } from 'grommet'
import useAuthentication from '../hooks/useAuthentication'


const Home = () => {
  const { user } = getAppContext()
  const { setAuth } = useAuthentication()

  return (
    <Main pad="xlarge">
      <Heading size='xlarge'>{`Hi ${user} !`}</Heading>
      <Paragraph>Something about something</Paragraph>
      <Paragraph>
        <Button primary label="Logout" onClick={() => setAuth()} />
      </Paragraph>
    </Main>
  )
}

export default Home