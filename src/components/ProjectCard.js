import React from 'react'
import Img from 'gatsby-image'

const ProjectCard = ({ href, fluid, title, description }) => (
  <li>
    <a href={href} target="_blank" rel="noreferrer">
      <Img fluid={fluid} />
      <p style={{ listStyle: 'none', padding: '10px' }}>
        ➣ <strong>{title}</strong> {description}
      </p>
      <hr />
    </a>
  </li>
)

export default ProjectCard
