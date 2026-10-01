import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import ResponsiveImage from '../components/ResponsiveImage'
import Layout from '../components/layout'
import { WORK_EXPERIENCE } from '../data/resume-data'

const About = () => {
  const data = useStaticQuery(graphql`
    query AboutPortrait {
      file(relativePath: { eq: "francis-snow.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 85) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Layout
      title="About"
      path="/about"
      description="Meet Francis Pham, a Vancouver software engineer with experience in consumer platforms, React Native apps, and business technology."
    >
      <section className="page-intro">
        <p className="eyebrow">A little about me</p>
        <h1>
          An engineer.
          <br />A <em>business perspective.</em>
        </h1>
      </section>
      <section className="about-grid" aria-labelledby="about-title">
        <figure className="portrait-wrap">
          <ResponsiveImage
            loading="eager"
            className="portrait"
            fluid={data.file.childImageSharp.fluid}
            alt="Francis Pham outdoors on a snowy day"
          />
          <figcaption className="portrait-caption">
            <span>Francis Pham</span>
            <span>Vancouver, BC</span>
          </figcaption>
        </figure>
        <div className="about-copy">
          <h2 id="about-title">
            Good software starts with understanding people.
          </h2>
          <p>
            I’m a software engineer based in Vancouver. My work spans web and
            mobile applications, from betting platforms and e-commerce to
            education technology and community marketplaces.
          </p>
          <p>
            I work primarily with React, React Native, Next.js, and TypeScript.
            I enjoy turning product ideas into clear interfaces, connecting them
            to the right data, and building components that make a codebase
            easier to work with.
          </p>
          <p>
            As Head of Technology & Co-Founder at Glossé Nails, I also work on
            the technology behind a local business: its public website, internal
            applications, and digital presence. That experience gives me a
            practical view of how software supports the people who use it every
            day.
          </p>
          <p>
            I studied Economics at Simon Fraser University and completed
            CodeCore’s full-stack web development program. Outside of work,
            you’ll find me hiking, snowboarding, cooking, or listening to music.
          </p>
          <Link className="text-link" to="/resume">
            View my full résumé <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
      <section className="section" aria-labelledby="experience-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">The path so far</p>
            <h2 id="experience-title">Experience.</h2>
          </div>
        </div>
        <div className="experience-list">
          {WORK_EXPERIENCE.map((experience) => (
            <article className="experience-item" key={experience.company}>
              <span className="experience-period">{experience.period}</span>
              <div>
                <h3>{experience.company}</h3>
                <p className="experience-role">
                  {[experience.title, experience.location]
                    .filter(Boolean)
                    .join(' · ')}
                </p>
                {experience.descriptions.length > 0 && (
                  <p className="experience-summary">
                    {experience.descriptions[0]}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  )
}
export default About
