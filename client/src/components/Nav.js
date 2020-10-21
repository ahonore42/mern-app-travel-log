import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Nav.css'
export default () => {
  return (
    <header>
      <div className="icon"></div>
      <nav>
        <NavLink activeClassName="nav-active" to="/discover">
          Discover
        </NavLink>
        <NavLink activeClassName="nav-active" to="/register">
          Sign Up
        </NavLink>
        <NavLink activeClassName="nav-active" to="/login">
          Sign In
        </NavLink>
      </nav>
    </header>
  )
}
