import React from 'react'
import { Redirect } from 'react-router-dom'
// Integrate this with auth
export default ({ authenticated, user, component, path, ...rest }) =>
  authenticated && user ? (
    <Route {...rest} component={component} />
  ) : (
    <Redirect to="/" />
  )
