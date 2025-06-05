import React from 'react'
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
          Icon={link.icon}
          href={link.href}
          text={link.text}
        />
      ))}
      <LocationInfo />
    </div>
  )
}

const ContactLink = ({ Icon, href, text }) => (
  <div>
    <Icon style={{ position: 'relative', top: '2px' }} />
    <a href={href} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  </div>
)

const LocationInfo = () => (
  <div>
    <GiCrosshair style={{ position: 'relative', top: '2px' }} />
    Vancouver, British Columbia, Canada
  </div>
)
