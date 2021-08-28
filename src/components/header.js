import React from 'react';
import Img from 'gatsby-image';
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

export default function Header() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: { eq: "header.jpg" }) {
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
    <header>
      <Helmet
        titleTemplate={`%s | ${data.site.siteMetadata.title}`}
        defaultTitle={data.site.siteMetadata.title}
        meta={[
          {
            name: 'description',
            content: 'Portfolio Website, Resume, Projects, Languages, Skills',
          },
          { name: 'keywords', content: 'Portfolio Website, Francis Pham' },
        ]}
      />
      <div
        style={{
          background: '#f4f4f4',
          marginRight: 'auto',
        }}
      >
        <Img
          title="Header Image"
          alt="header"
          fluid={data.file.childImageSharp.fluid}
          style={{
            height: '15vh',
          }}
        />
      </div>
    </header>
  )
}