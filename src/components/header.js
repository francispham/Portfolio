import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

import g from 'glamorous';
import { css } from 'glamor';

const Header = ({ headerImage }) => (
  <g.Div
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
        height: '15vh'
      }}
    />
  </g.Div>
)

export default Header
