import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '../pages/Home'
import LandingPage from '../pages/LandingPage'
import SignIn from '../pages/SignIn'
import Signup from '../pages/Signup'

export default class Router extends Component {
  constructor() {
    super()
    this.state = {
      authenticated: false,
      currentUser: null
    }
  }

  componentDidMount() {
    //invoke verifyTokenValid request
  }

  verifyTokenValid = async () => {
    const token = localStorage.getItem('token')
    if (token) {
      // Send Api request to verify token
      // if token valid should set a user to state
    }
  }

  render() {
    if (this.state.authenticated) {
      return <Redirect to="/" />
    }
    return (
      <main>
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <LandingPage>
                <Home />
              </LandingPage>
            )}
          />
          <Route
            path="/register"
            component={() => (
              <LandingPage>
                <Signup />
              </LandingPage>
            )}
          />
          <Route
            path="/login"
            component={() => (
              <LandingPage>
                <SignIn />
              </LandingPage>
            )}
          />
        </Switch>
      </main>
    )
  }
}
