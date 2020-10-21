import React from 'react'

export default (props) => (
  <input
    type={props.type}
    name={props.name}
    value={props.value}
    onChange={(e) => props.onChange(e)}
    placeholder={props.placeholder}
    autoComplete="false"
  />
)
