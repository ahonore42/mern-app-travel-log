import React from 'react'
import Nav from './Nav'

export default ({ children }) => (
  <div>
    <Nav />
    {children}
  </div>
)
