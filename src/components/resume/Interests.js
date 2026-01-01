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
          <InterestIcon key={label} Icon={icon} />
        ))}
      </div>
    </>
  )
}

const InterestIcon = ({ Icon }) => {
  return <Icon size={25} />
}
