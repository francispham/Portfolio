import React from 'react';
import Link from 'gatsby-link';

import g from 'glamorous';
import { css } from 'glamor';

const linkStyle = css({ float: `right` });

const Menu = ({ siteTitle }) => (
  <g.Div
    style={{
      background: 'transparent',
      marginBottom: '2rem',
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
              Francis Pham
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
        <li><Link  to="/about">ABOUT</Link></li>
        <li><Link  to="/">PORTFOLIO</Link></li>
        <li><Link  to="/skills">SKILLS</Link></li>
        <li><Link  to="/contact">CONTACT</Link></li>
        <li> <a
          href = 'https://www.dropbox.com/s/oxw8sez7hv389zq/FrancisResume.pdf?dl=0'
          target = "_blank">RESUME
            </a>
        </li>
      </ul>
    </g.Div>
  </g.Div>
);

export default Menu;
