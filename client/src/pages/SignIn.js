import React, { Component } from 'react'
import TextInput from '../components/TextInput'

export default class Register extends Component {
  // TODO: Integerate AUTH
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
    console.log(this.state)
  }

  handleSubmit = async (e) => {
    e.preventDefault()
  }
  render() {
    const { email, password } = this.state
    return (
      <div className="signin flex-col">
        <form className="flex-col" onSubmit={this.handleSubmit}>
          <TextInput
            placeholder="Your Email"
            name="email"
            type="email"
            value={email}
            onChange={this.handleChange}
          />
          <TextInput
            placeholder="Password"
            name="password"
            type="password"
            value={password}
            onChange={this.handleChange}
          />
          <button>Sign In</button>
        </form>
      </div>
    )
  }
}
