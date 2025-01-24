import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa'

const Sidebar = (props) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "sidebar.jpg" }) {
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
  `)

  return (
    <aside
      style={{
        border: '2px solid #e6e6e6',
        borderRadius: '10px',
        padding: '0.5rem',
        marginBottom: '25px',
        textAlign: 'center',
        background: 'white',
      }}
    >
      <Img
        title="Sidebar"
        alt="Avatar"
        fluid={data.file.childImageSharp.fluid}
      />

      <h2 style={{ margin: '10px' }}>{props.title}</h2>
      <h3>{props.description}</h3>

      <div className="gridBox">
        <big>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/francispham23"
          >
            <FaGithub size={40} style={{ marginRight: '1em' }} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://linkedin.com/in/francisphamca"
          >
            <FaLinkedin size={40} style={{ marginRight: '1em' }} />
          </a>
          <a href="mailto:francis.pham.ca@gmail.com">
            <FaEnvelope size={40} style={{ marginRight: '1em' }} />
          </a>
        </big>
      </div>
    </aside>
  )
}

export default Sidebar
