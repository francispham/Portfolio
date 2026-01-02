import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import ProjectCard from '../components/ProjectCard'
import { mainProjects, additionalProjects } from '../data/projects'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          relativePath: {
            in: [
              "assistlist.png"
              "portfolio.png"
              "spinndle.png"
              "onepriceauto.png"
              "glossenails.png"
              "betr.png"
            ]
          }
        }
      ) {
        nodes {
          relativePath
          childImageSharp {
            fluid {
              srcWebp
              aspectRatio
              base64
              sizes
              src
              srcSet
            }
          }
        }
      }
    }
  `)

  const imageMap = data.allFile.nodes.reduce((acc, node) => {
    const key = node.relativePath.split('.')[0]
    acc[key] = node.childImageSharp.fluid
    return acc
  }, {})

  return (
    <Layout>
      <h2 className="animation">PROJECTS</h2>
      <hr className="hr" />
      <ul style={{ listStyle: 'none', padding: '10px' }}>
        {mainProjects.map((project) => (
          <ProjectCard
            key={project.id}
            href={project.href}
            fluid={imageMap[project.id]}
            title={project.title}
            description={project.description}
          />
        ))}
      </ul>
      <hr />
      <section>
        <h3 className="animation">More ReactJS Projects</h3>
        <hr className="hr" />
        {additionalProjects.map((category, idx) => (
          <div key={idx}>
            <h4>{category.title}</h4>
            {category.links.map((link, linkIdx) => (
              <a
                key={linkIdx}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                <p>
                  ➣ <strong>{link.title}</strong> {link.description}
                </p>
              </a>
            ))}
            <hr />
          </div>
        ))}
      </section>
    </Layout>
  )
}

export default IndexPage
