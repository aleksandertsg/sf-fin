import React from 'react'
import { Grommet } from 'grommet'
import { AppContextProvider } from './contexts/appContext'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './view/Login'
import Home from './view/Home'
import PrivateRoute from './component/PrivateRoute'


const theme = {
  global: {
    themeMode: 'dark',
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px'
    }
  }
}

const App = () => {
  return (
    <Router>
      <AppContextProvider>
        <Grommet theme={theme}>
          <Switch>
            <PrivateRoute path="/home" component={Home} />
            <Route path="/" component={Login} />
          </Switch>
        </Grommet>
      </AppContextProvider>
    </Router>
  )
}

export default App
