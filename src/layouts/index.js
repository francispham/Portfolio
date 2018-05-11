import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Media from 'react-media'


import Header from '../components/header'
import Menu from '../components/menu'
import Sidebar from '../components/Sidebar'


import './index.css'
import "../styles/layout-overide.css";





const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Portfolio Website, Resume, Projects, Languages, Skills' },
        { name: 'keywords', content: 'Portfolio Website, Francis Pham' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} headerImage={data.headerImage}/>
    <Menu siteTitle={data.site.siteMetadata.title} />

    <div
      style={{
        margin: "0 auto",
        maxWidth: 980,
        height: "100%"
      }}
    >
      <Media query={{ maxWidth: 848 }}>
        {matches =>
          matches ? (
            <div
              style={{
                margin: "0 auto",
                maxWidth: 980,
                display: "grid",
                gridTemplateColumns: 'repeat(12, 1fr)',
                height: "100%",
                padding: "25px"
              }}
            >
              <div style= {{ gridColumn: 'span 12' }}>{children()}</div>
              <div
                style= {{
                  display: 'grid',
                  justifyTtems: 'center',
                  alignTtems: 'center',
                }}
                >
                <Sidebar
                  title="Francis Pham"
                  description="I am a Full Stack Web Developer"
                />
              </div>
            </div>
          ) : (
            <div
              style={{
                maxWidth: 980,
                display: "grid",
                gridTemplateColumns: 'repeat(12, 1fr)',
                gridGap: '1em',
                height: "100%",
                padding: "25px"
              }}
            >
              <div style= {{ gridColumn: 'span 8' }}>{children()}</div>
              <div style= {{ gridColumn: 'span 4' }}>
                <Sidebar
                  title="Francis Pham"
                  description="I am a Full Stack Web Developer"
                />
              </div>
            </div>
          )
        }
      </Media>
    </div>
  </div>
)

export default Layout

export const query = graphql`
  query headerImageQueryAndSiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
    headerImage: imageSharp(id: { regex: "/header/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
  }

`
