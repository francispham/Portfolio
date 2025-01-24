import React from 'react'

import { WORK_EXPERIENCE } from '../../data/resume-data'

export const WorkExperience = () => {
  return (
    <div>
      <h2>WORK EXPERIENCE</h2>
      {WORK_EXPERIENCE.map((experience, index) => (
        <ExperienceItem key={index} {...experience} />
      ))}
    </div>
  )
}

const ExperienceItem = ({
  title,
  company,
  location,
  period,
  achievements,
  stack,
  website,
}) => (
  <>
    <h3>{title}</h3>
    <div className="container">
      <strong>{company}</strong>
      <em>{location}</em>
    </div>
    <div className="container">
      <em>Achievements/Tasks</em>
      <em>{period}</em>
    </div>
    <ul>
      {achievements.map((achievement, index) => (
        <li key={index}>{achievement}</li>
      ))}
      <li>
        Working stack including <em>{stack}</em>
        <p>
          <small>
            <strong>Website </strong>
            {Array.isArray(website) ? (
              <>
                <WebLink website={website[0]} /> <strong>& </strong>
                <WebLink website={website[1]} />
              </>
            ) : (
              <WebLink website={website} />
            )}
          </small>
        </p>
      </li>
    </ul>
  </>
)

const WebLink = ({ website }) => (
  <a href={website} target="_blank" rel="noopener noreferrer">
    {website}
  </a>
)
