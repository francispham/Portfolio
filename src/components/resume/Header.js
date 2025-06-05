import React from 'react'
import HEADER from '../header'
export const Header = () => {
  const { name, role, motto } = HEADER

  return (
    <header>
      <h1>{name}</h1>
      <h4>{role}</h4>{' '}
      <p style={{ fontSize: 'smaller' }}>
        <em>{motto}</em>
      </p>
    </header>
  )
}
