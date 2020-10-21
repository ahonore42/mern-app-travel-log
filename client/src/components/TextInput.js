import React from 'react'

export default (props) => (
  <input
    type={props.type}
    name={props.name}
    value={props.value}
    onChange={props.onChange}
    placeholder={props.placeholder}
    autoComplete="false"
  />
)
