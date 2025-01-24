import React from 'react'
import { LANGUAGES } from '../../data/resume-data'
export const Languages = () => {
  return (
    <>
      <h2>LANGUAGES</h2>
      <div className="container specialPadding">
        {LANGUAGES.map(({ name, proficiency }) => (
          <div>
            <p>{name}</p>
            <em>{proficiency}</em>
          </div>
        ))}
      </div>
    </>
  )
}
