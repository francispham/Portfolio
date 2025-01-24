import React from 'react'

import { INTERESTS } from '../../data/resume-data'

export const Interests = () => {
  return (
    <div className="container">
      <h2>INTERESTS</h2>
      <div
        style={{
          textAlign: 'center',
        }}
      >
        {INTERESTS.map(({ icon, label }) => (
          <InterestIcon key={label} Icon={icon} />
        ))}
      </div>
    </div>
  )
}

const InterestIcon = ({ Icon }) => {
  return <Icon size={30} />
}
