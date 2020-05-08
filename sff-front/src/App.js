import React from 'react'
import logo from './logo.svg'
import './App.css'
import web3Modal from './util/web3Modal'


class App extends React.Component {

  componentDidMount = async () => {
    const web3 = await web3Modal.loadProvider()
    const accounts = await web3.eth.getAccounts()
    console.log({ accounts })
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App
