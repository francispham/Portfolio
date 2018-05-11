import React from 'react'
import Link from 'gatsby-link'

import g from "glamorous"
import { css } from "glamor"
const linkStyle = css({ float: `right` });

const Menu = ({ siteTitle }) => (
  <g.Div
    style={{
      background: 'transparent',
      marginBottom: '3rem',
      borderBottom: '2px solid #e6e6e6',
      display: 'grid',
      gridTemplateColumns: 'auto auto',
      marginRight: 'auto',
    }}
  >
    <g.Div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        paddingLeft: '0'
      }}
      >

        <g.H1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: 'black',
              textDecoration: 'none',
            }}
            >
              {siteTitle}
            </Link>
          </g.H1>
        </g.Div>
    <g.Div style={{
      background: '#f4f4f4',
      paddingTop:30,
      maxWidth: 980,
    }}
    >
      <ul className='container' style = {{
      listStyle: 'none',
      justifyContent: 'space-evenly'
        }}>
        <li><Link  to="/about">About</Link></li>
        <li><Link  to="/skills">My Skills</Link></li>
        <li><Link  to="/work">My Work</Link></li>
        <li><Link  to="/contact">Contact</Link></li>
        <li> <a  href = 'https://www.dropbox.com/s/x6j6d7baxrtwdna/FrancisResume.pdf?dl=0' target = "_blank">Resume</a></li>
      </ul>
    </g.Div>
  </g.Div>
)

export default Menu
