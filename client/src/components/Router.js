import React, { Component } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import CreatePost from '../pages/CreatePost'
import Home from '../pages/Home'
import LandingPage from '../pages/LandingPage'
import Profile from '../pages/Profile'
import SignIn from '../pages/SignIn'
import Signup from '../pages/Signup'
import UpdatePost from '../pages/UpdatePost'
import { __CheckSession } from '../services/UserServices'
import Layout from './Layout'
import Nav from './Nav'
import ProtectedRoute from './ProtectedRoute'

class Router extends Component {
  constructor() {
    super()
    this.state = {
      authenticated: false,
      currentUser: null,
      pageLoading: true
    }
  }

  componentDidMount() {
    //invoke verifyTokenValid request
    this.verifyTokenValid()
    this.setState({ pageLoading: false })
  }

  verifyTokenValid = async () => {
    const token = localStorage.getItem('token')
    if (token) {
      try {
        const session = await __CheckSession()
        this.setState(
          {
            currentUser: session,
            authenticated: true
          },
          () => this.props.history.push('/profile')
        )
      } catch (error) {
        this.setState({ currentUser: null, authenticated: false })
      }
      // Send Api request to verify token
      // if token valid should set a user to state
    }
  }

  toggleAuthenticated = (value, user, done) => {
    this.setState({ authenticated: value, currentUser: user }, () => done())
  }

  render() {
    return (
      <main>
        {this.state.pageLoading ? (
          <h3>Loading...</h3>
        ) : (
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
              component={(props) => (
                <LandingPage>
                  <Signup {...props} />
                </LandingPage>
              )}
            />
            <Route
              path="/login"
              component={(props) => (
                <LandingPage>
                  <SignIn
                    toggleAuthenticated={this.toggleAuthenticated}
                    {...props}
                  />
                </LandingPage>
              )}
            />
            <ProtectedRoute
              authenticated={this.state.authenticated}
              path="/profile"
              component={(props) => (
                <Layout
                  currentUser={this.state.currentUser}
                  authenticated={this.state.authenticated}
                >
                  <Profile {...props} currentUser={this.state.currentUser} />
                </Layout>
              )}
            />
            <ProtectedRoute
              authenticated={this.state.authenticated}
              path="/upload"
              component={(props) => (
                <Layout
                  currentUser={this.state.currentUser}
                  authenticated={this.state.authenticated}
                >
                  <CreatePost {...props} currentUser={this.state.currentUser} />
                </Layout>
              )}
            />
            <ProtectedRoute
              authenticated={this.state.authenticated}
              path="/edit/:post_id"
              component={(props) => (
                <Layout
                  currentUser={this.state.currentUser}
                  authenticated={this.state.authenticated}
                >
                  <UpdatePost {...props} currentUser={this.state.currentUser} />
                </Layout>
              )}
            />
          </Switch>
        )}
      </main>
    )
  }
}

export default withRouter(Router)
