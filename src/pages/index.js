import React from 'react';

import stmedispa from '../img/stmedispa.png';
import ninja from '../img/ninja.png';
import store from '../img/store.jpg';
import portfolio from '../img/portfolio.png';
import Layout from '../components/layout'


const IndexPage = () => (
  <Layout>
    <h2 className="animation">MY PROJECTS</h2>
    <hr className="hr" />
    <ul style={{ listStyle: 'none', padding: '10px' }}>
      <li>
        <a href="https://github.com/francispham/drill-ninjaz" target="_black">
          <img src={ninja} alt="ninja" />
          <p>
            ➣ <strong>Drillz Ninja</strong> built with Ruby, Ruby on Rails,
            PostgreSQL, Bootstrap, HTML, CSS, JavaScript
          </p>
          <hr />
        </a>
      </li>
      <li>
        <a href="https://stmed42018.herokuapp.com/" target="_black">
          <img src={stmedispa} alt="stmedispa" />
          <p>
            ➣ <strong>St Medi Website & Client Management App</strong> built
            with React.js, Ruby on Rails, PostgreSQL, HTML, CSS, JavaScript
          </p>
          <hr />
        </a>
      </li>
      <li>
        <a href="https://github.com/francispham/OnlineStore" target="_black">
          <img src={store} alt="store" />
          <p>
            ➣ <strong>E-Commerce Web Application </strong> built with Node.Js Express.JS & MongoDB
          </p>
          <hr />
        </a>
      </li>
      <li>
        <a href="https://github.com/francispham/Portfolio" target="_black">
          <img src={portfolio} alt="portfolio" />
          <p>
            ➣ <strong>This Portfolio</strong> built with React.js, Gatsby.js
            MongoDB, HTML, CSS, JavaScript, Netlify
          </p>
          <hr />
        </a>
      </li>
    </ul>
  </Layout>
)

export default IndexPage;
