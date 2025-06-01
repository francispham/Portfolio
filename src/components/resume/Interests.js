import React from 'react'

import { INTERESTS } from '../../data/resume-data'

export const Interests = () => {
  return (
    <>
      <h2>INTERESTS</h2>
      <div
        className="container"
        style={{ justifyContent: 'center', marginTop: '0.5rem' }}
      >
        {INTERESTS.map(({ icon, label }) => (
          <InterestIcon key={label} Icon={icon} />
        ))}
      </div>
    </>
  )
}

const InterestIcon = ({ Icon }) => {
  return <Icon size={30} />
}
