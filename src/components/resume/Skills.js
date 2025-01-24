import React from 'react'

import { Button } from '../../components/Button'
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
          <Button key={skill}>{skill}</Button>
        ))}
      </div>
    </>
  )
}
