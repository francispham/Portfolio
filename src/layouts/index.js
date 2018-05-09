import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Menu from '../components/menu'
import './index.css'

const FooterLinks = [
  {
    name: 'Github',
    link: 'https://github.com/phongpt1989'
  },{
    name: 'LinkedIn',
    link: 'http://linkedin.com/in/francispham89'
  },{
    name: 'Gmail',
    link: 'fransicpham89@gmail.com'
  }
]

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
    <Menu />
    <h3>Where to find me</h3>
    <ul className="social">
      {FooterLinks.map(link => (
        <li>
          <a target = "_blank" rel = "nofollow" className = {link.name.toLowerCase()} href = {link.link}>
            <i className = "text">{link.name}</i>
          </a>
        </li>
      ))}
    </ul>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

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
