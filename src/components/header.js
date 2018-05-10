import React from 'react'
import Link from 'gatsby-link'



const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#f4f4f4',
      marginBottom: '0',
      display: 'grid',
      gridTemplateColumns: 'auto auto',
    }}
  >
    <div style={{
      background: '#f4f4f4',
      paddingTop:30,
    }}>
    <ul style={{
      listStyle: 'none',
      display: 'flex',
      justifyContent: 'space-evenly'
    }}>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/skills">My Skills</Link></li>
    <li><Link to="/contact">Contact</Link></li>
    <li><Link to="/resume">Resume</Link></li>
  </ul>
</div>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h3 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h3>
    </div>
  </div>
)

export default Header
