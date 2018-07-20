import React from 'react'
import Link from 'gatsby-link'

import stmedispa from '../img/stmedispa.png'
import ninja from '../img/ninja.png'
import stmedi from '../img/stmedi.png'
import portfolio from '../img/portfolio.png'


const IndexPage = () => (
  <div>
    <h2>MY PROJECTS</h2>
    <ul style = {{ listStyle: 'none', padding: '10px'}} >
      <li>
        <a  href = 'https://github.com/phongpt1989/drill-ninjaz' target = '_black'>
          <img src={ninja} alt='ninja'/>
          <p>➣ <strong>Drillz Ninja</strong> built with Ruby, Ruby on Rails, PostgreSQL,
            Bootstrap, HTML, CSS, JavaScript</p>
          <hr/>
        </a>
      </li>
      <li>
        <a  href = 'https://stmed42018.herokuapp.com/' target = '_black'>
          <img src={stmedispa} alt='stmedispa'/>
          <p>➣ <strong>St Medi Website & Client Management App</strong> built
          with React.js, Ruby on Rails, PostgreSQL, HTML, CSS, JavaScript</p>
          <hr/>
        </a>
      </li>
      <li>
        <a  href = 'https://github.com/phongpt1989/St-MediSpa' target = '_black'>
          <img src={stmedi} alt='stmedi'/>
          <p>➣ <strong>St Medi Web App Version 2</strong> built with React.js, Redux.js, Express.js,
            MongoDB, HTML, CSS, JavaScrip</p>
        </a>
      </li>
      <li>
        <a  href = 'https://github.com/phongpt1989/Portfolio' target = '_black'>
          <img src={portfolio} alt='portfolio'/>
          <p>➣ <strong>This Portfolio</strong> built with React.js, Gatsby.js
            MongoDB, HTML, CSS, JavaScrip, Netlify</p>
          <hr/>
        </a>
      </li>
    </ul>
  </div>
)

export default IndexPage
