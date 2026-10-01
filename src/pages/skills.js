import React from 'react'
import Layout from '../components/layout'
import { expertise } from '../data/skills'

const Skills = () => (
  <Layout
    title="Expertise"
    path="/skills"
    description="Francis Pham’s engineering expertise: React web interfaces, React Native mobile applications, API integration, and product delivery."
  >
    <section className="page-intro">
      <p className="eyebrow">Tools, with intention</p>
      <h1>
        The right tools.
        <br />
        <em>Thoughtfully applied.</em>
      </h1>
      <p>
        My core is frontend engineering, with the full-stack experience to
        connect an interface to the systems behind it.
      </p>
    </section>
    <div className="expertise-grid">
      {expertise.map((group, index) => (
        <section
          className="expertise-card"
          key={group.title}
          aria-labelledby={`expertise-${index}`}
        >
          <span className="item-number">0{index + 1}</span>
          <h2 id={`expertise-${index}`}>{group.title}</h2>
          <p>{group.description}</p>
          <ul className="tag-list">
            {group.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  </Layout>
)
export default Skills
