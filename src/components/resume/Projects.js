import React, { Fragment } from 'react'

import { PROJECTS } from '../../data/resume-data'

export const Projects = () => {
  return (
    <>
      <h2>PRODUCTION PROJECTS</h2>
      {PROJECTS.map(({ title, year, description, website }) => (
        <Fragment key={title}>
          <div className="container">
            <strong>{title}</strong>
            <em className="year">{year}</em>
          </div>
          <div className="infoDetails">
            <p>{description}</p>
            <p>
              <small>
                <strong>Website </strong>
                <a href={website} target="_blank" rel="noopener noreferrer">
                  {website}
                </a>
              </small>
            </p>
          </div>
        </Fragment>
      ))}
    </>
  )
}
