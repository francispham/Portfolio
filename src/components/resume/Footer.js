import React from 'react'
import { Link } from 'gatsby'
import { TiArrowBack } from 'react-icons/ti'
export const Footer = () => {
  return (
    <footer>
      <Link to="/" aria-label="Back to portfolio">
        <TiArrowBack size={50} aria-hidden="true" />
      </Link>
    </footer>
  )
}
