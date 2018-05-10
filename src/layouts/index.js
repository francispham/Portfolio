import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Media from 'react-media'

import Header from '../components/header'
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
    <Header siteTitle={data.site.siteMetadata.title} />

    <div
      style={{
        margin: "0 auto",
        maxWidth: 980,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
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
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height: "100%",
                padding: "25px"
              }}
            >
              <div style={{ flex: 1 }}>{children()}</div>
            </div>
          ) : (
            <div
              style={{
                margin: "0 auto",
                maxWidth: 980,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height: "100%",
                padding: "25px"
              }}
            >
              <div style={{ flex: 2.5, paddingRight: "30px" }}>
                {children()}
              </div>
<div style={{ flex: 1 }}>
                <Sidebar
                  title="Codestack"
                  description="Articles on React and Node.js. All articles are written by Me. Fullstack Web Development."
                />
                <Sidebar
                  title="About author"
                  description="I am a Full-stack Web Developer specializing in React and Node.js based in Nigeria."
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
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
