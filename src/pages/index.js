import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import ProjectCard from '../components/ProjectCard'
import { mainProjects, additionalProjects } from '../data/projects'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query PortfolioProjects {
      allFile(
        filter: {
          relativePath: {
            in: [
              "assistlist.png"
              "betr.png"
              "onepriceauto.png"
              "glossenails.png"
            ]
          }
        }
      ) {
        nodes {
          relativePath
          childImageSharp {
            fluid(maxWidth: 1100, quality: 85) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `)
  const imageMap = data.allFile.nodes.reduce((images, node) => {
    images[node.relativePath.split('.')[0]] = node.childImageSharp.fluid
    return images
  }, {})
  return (
    <Layout title="Software Engineer — Web & Mobile">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-topline">
          <p className="eyebrow">Software engineer · Vancouver, BC</p>
          <span className="hero-index">Currently at DelGate</span>
        </div>
        <h1 id="hero-title">
          Thoughtful software.
          <br />
          <span>Built for real life.</span>
        </h1>
        <div className="hero-bottom">
          <p className="hero-intro">
            I’m Francis, a software engineer building web and mobile products. I
            bring care to the interface, clarity to the code, and a practical
            understanding of the business behind it.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="#selected-work">
              Explore my work <span aria-hidden="true">↘</span>
            </a>
            <Link className="text-link" to="/resume">
              View résumé <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
        <div className="hero-stack">
          <span>My core toolkit</span>
          <p>
            React <span aria-hidden="true">/</span> React Native{' '}
            <span aria-hidden="true">/</span> Next.js{' '}
            <span aria-hidden="true">/</span> TypeScript
          </p>
        </div>
      </section>
      <section
        id="selected-work"
        className="selected-work section"
        aria-labelledby="work-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">A selection of things I’ve built</p>
            <h2 id="work-title">
              Work with a purpose<span>.</span>
            </h2>
          </div>
          <p>
            From consumer platforms to local businesses.
            <br />
            Different problems. The same attention to detail.
          </p>
        </div>
        <div className="project-grid">
          {mainProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              fluid={imageMap[project.id]}
              index={index}
            />
          ))}
        </div>
      </section>
      <section
        className="approach-section section"
        aria-labelledby="approach-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">How I work</p>
            <h2 id="approach-title">The whole picture.</h2>
          </div>
          <Link className="text-link" to="/about">
            More about me <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="approach-grid">
          <article>
            <span className="item-number">01</span>
            <h3>Interfaces that feel right</h3>
            <p>
              Responsive web experiences and cross-platform mobile apps, built
              with attention to usability and the details people notice.
            </p>
          </article>
          <article>
            <span className="item-number">02</span>
            <h3>Engineering that holds up</h3>
            <p>
              Reusable components, clear state management, thoughtful API
              integrations, and code that teammates can build on.
            </p>
          </article>
          <article>
            <span className="item-number">03</span>
            <h3>A business perspective</h3>
            <p>
              Experience working with product and design teams, alongside
              firsthand ownership of a business and its technology.
            </p>
          </article>
        </div>
      </section>
      <section
        className="other-work section"
        aria-labelledby="other-work-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">More work & exploration</p>
            <h2 id="other-work-title">Beyond the highlights.</h2>
          </div>
        </div>
        {additionalProjects.map((project) => (
          <a
            key={project.title}
            className="work-row"
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <span className="project-category">{project.category}</span>
              <h3>{project.title}</h3>
            </div>
            <p>{project.description}</p>
            <span className="row-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        ))}
      </section>
    </Layout>
  )
}
export default IndexPage
