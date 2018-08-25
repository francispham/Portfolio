import React from 'react'
import PropTypes from 'prop-types'

import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Media from 'react-media'

import Header from '../components/header'
import Sidebar from '../components/Sidebar'
import Toolbar from '../components/Toolbar/Toolbar'
import SideDrawer from '../components/SideDrawer/SideDrawer'
import Backdrop from '../components/Backdrop/Backdrop'

import './index.css'
import "../styles/layout-overide.css";

import { rhythm } from "../utils/typography";

const Layout = ({ children, data }) => (
  <div paddingTop={ rhythm(1) } style={{height: '100%'}}>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Portfolio Website, Resume, Projects, Languages, Skills' },
        { name: 'keywords', content: 'Portfolio Website, Francis Pham' },
      ]}/>
    <Header headerImage={data.headerImage}/>
    <Toolbar siteTitle={data.site.siteMetadata.title}/>
    {/* <Backdrop /> */}
    {/* <SideDrawer /> */}
    <div
      style={{
        margin: "0 auto",
        height: "100%",
        padding: "80px",
      }}
      >
        <Media query={{ maxWidth: 848 }}>
          {matches =>
            matches ? (
              <div
                style={{
                  margin: "0 auto",
                  display: "grid",
                  gridTemplateColumns: 'repeat(12, 1fr)',
                  height: "100%",
                  padding: "25px"
                }}>
                <div style= {{ gridColumn: 'span 12' }}>{children()}</div>

                <div style={{padding: '25px', marginLeft: '100px'}}>
                  <Sidebar
                    title="Francis Pham"
                    description="Full Stack Web Developer"
                  />
                </div>
              </div>
            ) : (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: 'repeat(12, 1fr)',
                  gridGap: '1em',
                  height: "100%",
                  padding: "25px"
                }}>
                <div style= {{ gridColumn: 'span 8' }}>{children()}</div>

                <div style= {{ gridColumn: 'span 4' }}>
                  <Sidebar
                    title="Francis Pham"
                    description="Full Stack Web Developer"
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
  }
`;
