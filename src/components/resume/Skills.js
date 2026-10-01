import React from 'react'

import { SKILLS } from '../../data/resume-data'

export const Skills = () => {
  return (
    <>
      <h2>SKILLS</h2>
      <div
        className="container specialPadding"
        style={{
          alignContent: 'space-between',
        }}
      >
        {SKILLS.map((skill) => (
          <span className="resume-skill" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </>
  )
}
