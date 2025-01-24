import React from 'react'
import PropTypes from 'prop-types'
import { GiCrosshair } from 'react-icons/gi'
import { LINKS } from '../../data/resume-data'

export const Banner = () => {
  return (
    <div
      className="container divided"
      style={{ fontWeight: '550', justifyContent: 'space-around' }}
    >
      {LINKS.map((link, index) => (
        <ContactLink
          key={index}
          icon={link.icon}
          href={link.href}
          text={link.text}
        />
      ))}
      <LocationInfo />
    </div>
  )
}

const ContactLink = ({ icon: Icon, href, text }) => (
  <div>
    <Icon />
    <a href={href} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  </div>
)

const LocationInfo = () => (
  <div>
    <GiCrosshair />
    Vancouver, British Columbia, Canada
  </div>
)

ContactLink.propTypes = {
  icon: PropTypes.elementType.isRequired,
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}
