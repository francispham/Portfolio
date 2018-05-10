import React from 'react'
import Link from 'gatsby-link'



const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#f4f4f4',
      marginBottom: '3rem',
      borderBottom: '2px solid #e6e6e6',
      display: 'grid',
      gridTemplateColumns: 'auto auto',
      marginRight: 'auto'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        paddingLeft: '0'
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
    <div style={{
      background: '#f4f4f4',
      paddingTop:30,
      maxWidth: 980,
    }}>
      <ul style = {{
      listStyle: 'none',
      display: 'flex',
      justifyContent: 'space-evenly'
        }}>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/skills">My Skills</Link></li>
        <li> <a href = 'https://www.dropbox.com/s/x6j6d7baxrtwdna/FrancisResume.pdf?dl=0' target = "_blank">Resume</a></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  </div>
)

export default Header
