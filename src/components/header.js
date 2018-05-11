import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'


const Header = ({ headerImage }) => (
  <div
    style={{
      background: '#f4f4f4',
      marginRight: 'auto',
    }}
  >
    <Img
      title="Header image"
      alt="Greek food laid out on table"
      sizes={headerImage.sizes}
      style={{

      }}
    />
  </div>
)

export default Header
