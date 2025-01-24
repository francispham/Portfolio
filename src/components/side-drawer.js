import React from 'react'

import NavLinks from './nav-links'
import '../css/side-drawer.css'

const SideDrawer = (props) => {
  let drawerClasses = 'side-drawer'
  if (props.show) {
    drawerClasses = 'side-drawer open'
  }

  return (
    <nav className={drawerClasses}>
      <NavLinks />
    </nav>
  )
}

export default SideDrawer
