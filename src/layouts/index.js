import React from 'react'
import PropTypes from 'prop-types'

import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Media from 'react-media'

import Header from '../components/header'
import Sidebar from '../components/sidebar'
import Toolbar from '../components/toolbar'
import SideDrawer from '../components/side-drawer'
import Backdrop from '../components/backdrop'

import './index.css'
import "../styles/layout-overide.css";

class Layout extends React.Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    })
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.drawerToggleClickHandler}/>
    }
    return (
      <div style={{height: '100%'}}>
        <Helmet
          title={this.props.data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Portfolio Website, Resume, Projects, Languages, Skills' },
            { name: 'keywords', content: 'Portfolio Website, Francis Pham' },
          ]}/>
        <Header headerImage={this.props.data.headerImage}/>
        <Toolbar
          siteTitle={this.props.data.site.siteMetadata.title}
          drawerClickHandler={this.drawerToggleClickHandler}
        />
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
        <main
          style={{
            marginTop: "64px",
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
                    <div style= {{ gridColumn: 'span 12' }}>{this.props.children()}</div>

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
                    <div style= {{ gridColumn: 'span 8' }}>{this.props.children()}</div>

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
          </main>
        </div>

    )
      }
}

export default Layout;

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
