import React from 'react'

import { WORK_EXPERIENCE } from '../../data/resume-data'

export const WorkExperience = () => {
  return (
    <>
      <h2>WORK EXPERIENCE</h2>
      {WORK_EXPERIENCE.map((experience, index) => (
        <ExperienceItem key={index} {...experience} />
      ))}
    </>
  )
}

const ExperienceItem = ({
  title,
  type,
  company,
  location,
  period,
  descriptions,
  website,
  stack,
}) => (
  <>
    {title && (
      <div className="container">
        <h3 className="title">{title}</h3>
        <h5 className="type">
          <em>{type}</em>
        </h5>
      </div>
    )}

    <div className="container">
      <strong>{company}</strong>
      <em className="location">{location}</em>
    </div>
    <div className="container">
      <em>Achievements/Tasks</em>
      <em>{period}</em>
    </div>
    <ul className="list">
      {descriptions.map((description, index) => (
        <li key={index}>{description}</li>
      ))}
      <p>
        <small>
          <strong>Website </strong>
          <WebLink website={website} />
        </small>
      </p>
    </ul>
    {stack && (
      <h6>
        <em>Working stack including {stack}.</em>
      </h6>
    )}
  </>
)

const WebLink = ({ website }) => (
  <a href={website} target="_blank" rel="noopener noreferrer">
    {website}
  </a>
)
