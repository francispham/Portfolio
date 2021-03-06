import React from 'react';
import { Link } from 'gatsby';

import DrawerToggleButton from './drawer-toggle-button';
import '../css/toolbar.css';

const toolbar = (props) => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo">
        <Link to="/">FRANCIS</Link>
      </div>
      <div className="spacer" />
      <div className="toolbar__navigation-items">
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
      </div>
    </nav>
  </header>
)

export default toolbar;
