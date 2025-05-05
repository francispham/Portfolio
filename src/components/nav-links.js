import React from 'react'
import { Link } from 'gatsby'

import { LINKS } from '../data/constant'

const NavLinks = () => (
  <ul>
    {LINKS.map(({ link, title }) => (
      <li key={link}>
        <Link to={link}>{title}</Link>
      </li>
    ))}
  </ul>
)

export default NavLinks
