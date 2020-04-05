import React from 'react';

import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa'

import sidebar from '../img/sidebar.jpg';


const Sidebar = props => (
  <div
    style={{
      border: '2px solid #e6e6e6',
      borderRadius: '10px',
      padding: '0.5rem',
      marginBottom: '25px',
      textAlign: 'center',
      background: 'white',
    }}
  >
    <img
      src={sidebar}
      alt="Avatar"
      style={{
        display: 'block',
        borderRadius: '10px',
      }}
    />
    <h3>{props.title}</h3>
    <h4>{props.description}</h4>

    <div className="gridBox">
      <big>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/francispham"
        >
          <FaGithub size={40} style={{ marginRight: '1em' }} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://linkedin.com/in/francisphamca"
        >
          <FaLinkedin size={40} style={{ marginRight: '1em' }} />
        </a>
        <a href="mailto:francis.pham.ca@gmail.com">
          <FaEnvelope size={40} style={{ marginRight: '1em' }} />
        </a>
      </big>
    </div>
  </div>
)

export default Sidebar;
