import React from 'react'
import Link from 'gatsby-link'
import FaGithub from 'react-icons/lib/fa/github'
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square'
import FaEnvelope from 'react-icons/lib/fa/envelope'



const Sidebar = (props) => (
  <div
    style={{
      border: '2px solid #e6e6e6',
      maxWidth: 960,
      minWidth: 250,
      padding: '0.5rem',
      marginBottom: '25px'
    }}>
    <strong>{props.title}</strong>
    <hr></hr>
    {props.description}
    <div style = {{ display: 'flex' }}>
      <big>
        <a target = "_blank" href = 'https://github.com/phongpt1989'>
          <FaGithub  style = {{ marginRight: '1em' }}/>
        </a>
        <a target = "_blank" href = 'http://linkedin.com/in/francispham89'>
          <FaLinkedinSquare  style = {{ marginRight: '1em' }}/>
        </a>
        <a href = 'mailto:fransicpham89@gmail.com'>
          <FaEnvelope  style = {{ marginRight: '1em' }}/>
        </a>
      </big>
    </div>
  </div>
)

export default Sidebar
