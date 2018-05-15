import React from 'react'
import Link from 'gatsby-link'

import stmedispa from '../img/stmedispa.png'
import ninja from '../img/ninja.png'
import stmedi from '../img/stmedi.png'


const IndexPage = () => (
  <div>
    <h2>My Projects</h2>
    <ul style = {{
    listStyle: 'none',
    padding: '10px'
      }}>
      <li>
        <a  href = 'https://github.com/phongpt1989/drill-ninjaz' target = '_black'>
          <img src={ninja} alt='ninja'/>
          <p>➣ <strong>Drillz Ninja</strong> built with Ruby, Ruby on Rails, PostgreSQL,
            Bootstrap, HTML, CSS, JavaScript</p>
          <hr/>
        </a>
      </li>
      <li>
        <a  href = 'https://github.com/phongpt1989/Client_management_app' target = '_black'>
          <img src={stmedispa} alt='stmedispa'/>
          <p>➣ <strong>Client Management App</strong> built with Ruby on Rails, PostgreSQL, HTML,
            CSS, JavaScript</p>
          <hr/>
        </a>
      </li>
      <li>
        <a  href = 'https://github.com/phongpt1989/final-project' target = '_black'>
          <img src={stmedi} alt='stmedi'/>
          <p>➣ <strong>St Medi Web App</strong> built with React.js, Redux.js, Express.js,
            MongoDB, HTML, CSS, JavaScrip</p>
        </a>
      </li>
    </ul>
  </div>
)

export default IndexPage
