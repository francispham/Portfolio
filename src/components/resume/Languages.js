import React from 'react'
import { LANGUAGES } from '../../data/resume-data'
export const Languages = () => {
  return (
    <>
      <h2>LANGUAGES</h2>
      <div className="container specialPadding">
        {LANGUAGES.map(({ name, proficiency }) => (
          <div key={name}>
            <p>{name}</p>
            <em>{proficiency}</em>
          </div>
        ))}
      </div>
    </>
  )
}
