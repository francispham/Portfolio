import React from 'react'
import Link from 'gatsby-link'



const Sidebar = (props) => (
  <div
    style={{
      border: '2px solid #e6e6e6',
      maxWidth: 960,
      minWidth: 250,
      padding: '0.5rem',
      marginBottom: '25px'
    }}>
    <strong>{props.title}.</strong>
    <hr></hr>
    {props.description}
  </div>
)

export default Sidebar
