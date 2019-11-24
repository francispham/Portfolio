import React from 'react';
import { Link } from 'gatsby';

import '../css/side-drawer.css';

const SideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/">PORTFOLIO</Link>
        </li>
        <li>
          <Link to="/skills">SKILLS</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
        <li>
          <Link to="/resume">RESUME</Link>
        </li>
      </ul>
    </nav>
  )
}

export default SideDrawer;
