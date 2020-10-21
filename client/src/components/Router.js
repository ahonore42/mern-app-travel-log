import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import Signup from '../pages/Signup'

export default () => {
  return (
    <main>
      <Route exact path="/" component={LandingPage} />
      <Route path="/register" component={Signup} />
    </main>
  )
}
