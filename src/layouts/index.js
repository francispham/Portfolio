import React from 'react'
import PropTypes from 'prop-types'
import g from "glamorous"
import { css } from "glamor"

import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Media from 'react-media'

import Header from '../components/header'
import Menu from '../components/menu'
import Sidebar from '../components/Sidebar'

import './index.css'
import "../styles/layout-overide.css";

import { rhythm } from "../utils/typography";



const Layout = ({ children, data }) => (
  <g.Div
    paddingTop={rhythm(1)}
    >
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Portfolio Website, Resume, Projects, Languages, Skills' },
        { name: 'keywords', content: 'Portfolio Website, Francis Pham' },
      ]}
    />
    <Header headerImage={data.headerImage}/>

    <Menu siteTitle={data.site.siteMetadata.title} />

    <g.Div
      style={{
        margin: "0 auto",
        maxWidth: 980,
        height: "100%"
      }}
    >
      <Media query={{ maxWidth: 848 }}>
        {matches =>
          matches ? (
            <g.Div
              style={{
                margin: "0 auto",
                maxWidth: 980,
                display: "grid",
                gridTemplateColumns: 'repeat(12, 1fr)',
                height: "100%",
                padding: "25px"
              }}
            >
              <g.Div style= {{ gridColumn: 'span 12' }}>{children()}</g.Div>

              <g.Div
                style= {{
                  display: 'grid',
                  justifyTtems: 'center',
                  alignTtems: 'center',
                }}
                >
                <Sidebar
                  title="Francis Pham"
                  description="Full Stack Web Developer"
                />
              </g.Div>
            </g.Div>
          ) : (
            <g.Div
              style={{
                maxWidth: 980,
                display: "grid",
                gridTemplateColumns: 'repeat(12, 1fr)',
                gridGap: '1em',
                height: "100%",
                padding: "25px"
              }}
            >
              <g.Div style= {{ gridColumn: 'span 8' }}>{children()}</g.Div>

              <g.Div style= {{ gridColumn: 'span 4' }}>
                <Sidebar
                  title="Francis Pham"
                  description="Full Stack Web Developer"
                />
              </g.Div>
            </g.Div>
          )
        }
      </Media>
    </g.Div>

  </g.Div>
)

export default Layout

export const query = graphql`
  query headerImageQueryAndSiteTitleQueryAndLayoutQuery {
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
    site {
      siteMetadata {
        title
      }
    }
  }
`
