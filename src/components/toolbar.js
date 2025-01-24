import React from 'react'
import { Link } from 'gatsby'

import DrawerToggleButton from './drawer-toggle-button'
import NavLinks from './nav-links'
import '../css/toolbar.css'

const toolbar = (props) => (
  <div className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo">
        <Link to="/">FRANCIS</Link>
      </div>
      <div className="spacer" />
      <div className="toolbar__navigation-items">
        <NavLinks />
      </div>
    </nav>
  </div>
)

export default toolbar
