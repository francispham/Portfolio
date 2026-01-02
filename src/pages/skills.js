import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import { skills } from '../data/skills'

const Skills = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { regex: "/^icon/.*.png|jpeg$/" } }) {
        nodes {
          relativePath
          childImageSharp {
            fixed(width: 80, height: 80) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `)

  const imageMap = data.allFile.nodes.reduce((acc, node) => {
    acc[node.relativePath] = node.childImageSharp.fixed
    return acc
  }, {})

  return (
    <Layout>
      <h2 className="animation">MY SKILL SET</h2>
      <hr className="hr" />
      <div>
        <div className="box">
          <div
            className="skill-container"
            style={{ justifyContent: 'space-around' }}
          >
            {skills.map((skill) => (
              <div key={skill.id}>
                <Img fixed={imageMap[skill.path]} alt={skill.name} />
              </div>
            ))}
          </div>
          <br />
        </div>
      </div>
    </Layout>
  )
}

export default Skills
