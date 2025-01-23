import React from 'react'
import Img from 'gatsby-image'

import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'

const Skills = () => {
  const data = useStaticQuery(graphql`
    query {
      javascript: file(relativePath: { eq: "icon/javascript.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      ReactJS: file(relativePath: { eq: "icon/react.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      nextjs: file(relativePath: { eq: "icon/nextjs.jpeg" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      zustand: file(relativePath: { eq: "icon/zustand.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      redux: file(relativePath: { eq: "icon/redux.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      ReactQuery: file(relativePath: { eq: "icon/react-query.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      ReactNative: file(relativePath: { eq: "icon/react-native.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      css3: file(relativePath: { eq: "icon/css3.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      html5: file(relativePath: { eq: "icon/html5.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      graphqlIcon: file(relativePath: { eq: "icon/graphql.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      graphqlIcon: file(relativePath: { eq: "icon/graphql.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      GatsbyJS: file(relativePath: { eq: "icon/gatsbyjs.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      NodeJS: file(relativePath: { eq: "icon/nodejs.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      ExpressJS: file(relativePath: { eq: "icon/express.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      style: file(relativePath: { eq: "icon/style.jpeg" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      sass: file(relativePath: { eq: "icon/newsass.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      tailwind: file(relativePath: { eq: "icon/tailwind.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      Bootstrap: file(relativePath: { eq: "icon/bootstrap.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      ruby: file(relativePath: { eq: "icon/ruby.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      Rails: file(relativePath: { eq: "icon/rails.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      Jquery: file(relativePath: { eq: "icon/jquery.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      webpack: file(relativePath: { eq: "icon/webpack.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      PostgreSQL: file(relativePath: { eq: "icon/postgresql.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      netlify: file(relativePath: { eq: "icon/netlify.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      wordpress: file(relativePath: { eq: "icon/wordpress.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      github: file(relativePath: { eq: "icon/github.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

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
            {Object.entries(data).map((key, index) => (
              <div key={index}>
                <Img fixed={key[1].childImageSharp.fixed} />
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
