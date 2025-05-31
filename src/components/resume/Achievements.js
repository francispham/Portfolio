import React from 'react'

export const Achievements = () => {
  return (
    <>
      <h2>ACHIEVEMENTS</h2>
      <div className="container">
        <strong>Drill Ninjaz Application</strong>
        <em>2018</em>
        <em>
          Won Second Place for Well Overall Performance{' '}
          <a
            href="https://github.com/francispham/drill-ninjaz"
            target="_black"
            rel="noopener noreferrer"
            className="groupLink"
          >
            Group Project
          </a>{' '}
        </em>
      </div>
      <div className="infoDetails">
        <p>
          Built with <em>Ruby on Rails & PostgreSQL</em>.
        </p>
      </div>
    </>
  )
}
