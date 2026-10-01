import React from 'react'

import { INTERESTS } from '../../data/resume-data'

export const Interests = () => {
  return (
    <>
      <h2>INTERESTS</h2>
      <div
        className="container infoDetails"
        style={{ justifyContent: 'center' }}
      >
        {INTERESTS.map(({ icon, label }) => (
          <InterestIcon key={label} Icon={icon} label={label} />
        ))}
      </div>
    </>
  )
}

const InterestIcon = ({ Icon, label }) => {
  return (
    <span role="img" aria-label={label}>
      <Icon size={25} aria-hidden="true" />
    </span>
  )
}
