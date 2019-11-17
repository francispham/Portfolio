import React from 'react';
import FaGithub from 'react-icons/lib/fa/github';
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';
import FaEnvelope from 'react-icons/lib/fa/envelope';

import sidebar from '../img/sidebar.jpg';


const Sidebar = (props) => (
  <div
    style={{
      border: '2px solid #e6e6e6',
      padding: '0.5rem',
      marginBottom: '25px',
      textAlign: 'center',
      background: 'white'
    }}>
      <img
        src = {sidebar}
        alt = "Avatar"
        style={{
          display: 'block',
        }}
      />
    <h3>{props.title}</h3>
    <h4>{props.description}</h4>

    <div className ='gridBox'>
      <big>
        <a target = "_blank" href = 'https://github.com/francispham'>
          <FaGithub  style = {{ marginRight: '1em' }}/>
        </a>
        <a target = "_blank" href = 'http://linkedin.com/in/francisphamca'>
          <FaLinkedinSquare  style = {{ marginRight: '1em' }}/>
        </a>
        <a href = 'mailto:fransicpham89@gmail.com'>
          <FaEnvelope  style = {{ marginRight: '1em' }}/>
        </a>
      </big>
    </div>
  </div>
);

export default Sidebar;
