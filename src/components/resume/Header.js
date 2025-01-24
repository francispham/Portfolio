import React from 'react'

export const Header = ({
  name = 'FRANCIS PHAM',
  role = 'Frontend Developer, specialized in React and React Native Development',
  motto = '"Passion to Learn & Become an Efficient Problem Solver, Seeking to Build Amazing Web Apps to Make Life Better for Everyone"',
}) => {
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
