import React from 'react'
import { Link } from 'gatsby'
import { TiArrowBack } from 'react-icons/ti'
export const Footer = () => {
  return (
    <footer>
      <Link to="/">
        <TiArrowBack size={50} />
      </Link>
    </footer>
  )
}
