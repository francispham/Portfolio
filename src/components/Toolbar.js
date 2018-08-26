import React from 'react';
import Link from 'gatsby-link';

import DrawerToggleButton from './DrawerToggleButton';
import '../styles/Toolbar.css';

const toolbar = (props, {siteTitle}) => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo">
        <Link to="/">Francis Pham</Link>
      </div>
      <div className="spacer" />
      <div className="toolbar__navigation-items">
        <ul>
          <li><Link  to="/about">ABOUT</Link></li>
          <li><Link  to="/">PORTFOLIO</Link></li>
          <li><Link  to="/skills">SKILLS</Link></li>
          <li><Link  to="/contact">CONTACT</Link></li>
          <li>
            <a
              href = 'https://www.dropbox.com/s/oxw8sez7hv389zq/FrancisResume.pdf?dl=0'
              target = "_blank">RESUME
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
