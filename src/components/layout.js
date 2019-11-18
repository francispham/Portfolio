import React from 'react'
import Media from 'react-media'

import Header from './header'
import Sidebar from './Sidebar'
import Toolbar from './toolbar'
import SideDrawer from './side-drawer'
import Backdrop from './backdrop'

import '../styles/layout.css'

class Layout extends React.Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    })
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.drawerToggleClickHandler}/>
    }
    return (
      <div style={{height: '100%'}} className="body">
        <Header />
        <Toolbar
          drawerClickHandler={this.drawerToggleClickHandler}
        />
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
        <main
          style={{
            height: "100%",
            padding: "60px",
          }}
          >
            <Media query={{ maxWidth: 848 }}>
              {matches =>
                matches ? (
                  <div
                    style={{
                      margin: "0 auto",
                      display: "grid",
                      gridTemplateColumns: 'repeat(12, 1fr)',
                      height: "100%",
                      padding: "25px"
                    }}>
                    <div style= {{ gridColumn: 'span 12' }}>
                      {this.props.children}
                    </div>

                    <div style={{
                      gridColumn: "span 12",
                    }}>
                      <Sidebar
                        title="Francis Pham"
                        description="Full Stack Web Developer"
                      />
                    </div>
                  </div>
                ) : (
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: 'repeat(12, 1fr)',
                      gridGap: '5em',
                      height: "100%",
                      padding: "25px"
                    }}>
                    <div style= {{ gridColumn: 'span 8' }}>
                      {this.props.children}
                    </div>

                    <div style= {{ 
                      gridColumn: 'span 4',
                      maxWidth: 680
                    }}>
                      <Sidebar
                        title="Francis Pham"
                        description="Full Stack Web Developer"
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
}

export default Layout;
