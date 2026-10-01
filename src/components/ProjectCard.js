import React from 'react'
import ResponsiveImage from './ResponsiveImage'

const ProjectCard = ({ project, fluid, index }) => (
  <article className={`project-card project-${project.id}`}>
    <a
      className="project-image-link"
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${project.title} (opens in a new tab)`}
    >
      <div className="project-image-frame">
        <div className="browser-bar" aria-hidden="true">
          <span />
          <span />
          <span />
          <span className="browser-address">{project.domain}</span>
        </div>
        {fluid && (
          <ResponsiveImage
            fluid={fluid}
            alt={`${project.title} website`}
            className="project-image"
          />
        )}
      </div>
      <span className="project-visit" aria-hidden="true">
        ↗
      </span>
    </a>
    <div className="project-heading">
      <div>
        <p className="project-category">
          {String(index + 1).padStart(2, '0')} / {project.category}
        </p>
        <h3>
          <a href={project.href} target="_blank" rel="noopener noreferrer">
            {project.title} <span aria-hidden="true">↗</span>
          </a>
        </h3>
      </div>
      <span className="project-year">{project.year}</span>
    </div>
    <p className="project-description">{project.description}</p>
    <ul className="tag-list" aria-label={`${project.title} technologies`}>
      {project.stack.map((technology) => (
        <li key={technology}>{technology}</li>
      ))}
    </ul>
  </article>
)
export default ProjectCard
