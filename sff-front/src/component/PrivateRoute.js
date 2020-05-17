import { Redirect, Route } from 'react-router-dom'
import React from 'react'
import getAppContext from '../contexts/appContext'


const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = getAppContext()

  return (
    <Route {...rest} render={(props) => (
      user
        ? <Component {...props} />
        : <Redirect to='/' />
    )} />
  )
}

export default PrivateRoute