import React, { Component } from 'react'
import Layout from '../components/Layout'
import TextInput from '../components/TextInput'
import '../styles/Signup.css'
export default class Signup extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }
  render() {
    return (
      <Layout>
        <div className="signup flex-col">
          <form className="flex-col">
            <TextInput placeholder="Your Email" />
            <TextInput />
            <TextInput />
            <button>Sign Up</button>
          </form>
        </div>
      </Layout>
    )
  }
}
