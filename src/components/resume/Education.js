import React, { Fragment } from 'react'
import { EDUCATION } from '../../data/resume-data'

export const Education = () => {
  return (
    <>
      <h2>EDUCATION</h2>
      {EDUCATION.map(({ title, year, description, school }) => (
        <Fragment key={title}>
          <div className="container">
            <strong>{title}</strong>
            <em className="year">{year}</em>
          </div>
          <div className="container infoDetails">
            <strong>
              <small>{school}</small>
            </strong>
            <p>{description}</p>
          </div>
        </Fragment>
      ))}
    </>
  )
}
