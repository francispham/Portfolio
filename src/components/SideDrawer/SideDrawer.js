import React from 'react';
import Link from 'gatsby-link';

import './SideDrawer.css';

const SideDrawer = props => (
  <nav className="side-drawer">
    <ul>
      <li><Link  to="/about">ABOUT</Link></li>
      <li><Link  to="/">PORTFOLIO</Link></li>
      <li><Link  to="/skills">SKILLS</Link></li>
      <li><Link  to="/contact">CONTACT</Link></li>
    </ul>
  </nav>
)

export default SideDrawer;
