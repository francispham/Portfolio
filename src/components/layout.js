import React, { useState } from 'react'
import Media from 'react-media'

import Header from './header'
import Sidebar from './Sidebar'
import Toolbar from './toolbar'
import SideDrawer from './side-drawer'
import Backdrop from './backdrop'

import '../css/layout.css'

const Layout = ({ children }) => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen((prevState) => !prevState)
  }

  let backdrop
  if (sideDrawerOpen) {
    backdrop = <Backdrop click={drawerToggleClickHandler} />
  }

  return (
    <div style={{ height: '100%' }} className="body">
      <Header />
      <Toolbar drawerClickHandler={drawerToggleClickHandler} />
      <SideDrawer show={sideDrawerOpen} />
      {backdrop}
      <main
        style={{
          height: '100%',
          padding: '60px',
        }}
      >
        <Media query={{ maxWidth: 1050 }}>
          {(matches) =>
            matches ? (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(12, 1fr)',
                  height: '100%',
                }}
              >
                <main style={{ gridColumn: 'span 12' }}>{children}</main>
              </div>
            ) : (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(12, 1fr)',
                  gridGap: '5em',
                  height: '100%',
                }}
              >
                <main style={{ gridColumn: 'span 8' }}>{children}</main>

                <div
                  style={{
                    gridColumn: 'span 4',
                    maxWidth: 680,
                  }}
                >
                  <Sidebar
                    title="Francis Pham"
                    description="Software Engineer"
                  />
                </div>
              </div>
            )
          }
        </Media>
      </main>
    </div>
  )
}

export default Layout
