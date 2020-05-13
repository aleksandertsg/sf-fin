import React from 'react'
import { Grommet, Box, Button } from 'grommet'
import web3Modal from './util/web3Modal'

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px'
    }
  }
}

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
)

class App extends React.Component {
  async login () {
    const web3 = await web3Modal.loadProvider()
    const accounts = await web3.eth.getAccounts()
    console.log({ accounts })
  }

  render () {
    return (
      <Grommet theme={theme}>
        <AppBar>Hello!</AppBar>
        <Box
          align='center'
          margin='10pt auto'
        >
          <Button primary label="Login" onClick={this.login} />
        </Box>

      </Grommet>
    )
  }
}

export default App
