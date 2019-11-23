import React from 'react';

import stmedi from '../img/stmedi.png';
import ninja from '../img/ninja.png';
import store from '../img/store.jpg';
import portfolio from '../img/portfolio.png';
import Layout from '../components/layout'


const IndexPage = () => (
  <Layout>
    <h2 className="animation">PROJECTS</h2>
    <hr className="hr" />
    <ul style={{ listStyle: 'none', padding: '10px' }}>
      <li>
        <a href="https://github.com/francispham/OnlineStore" target="_black">
          <img src={store} alt="store" />
          <p>
            ➣ <strong>E-Commerce Web Application </strong> built with NodeJS
            ExpressJS & MongoDB
          </p>
          <hr />
        </a>
      </li>
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
        <a href="https://github.com/francispham/Portfolio" target="_black">
          <img src={portfolio} alt="portfolio" />
          <p>
            ➣ <strong>This Portfolio</strong> built with ReactJS, GatsbyJS
            MongoDB, HTML, CSS, JavaScript, Netlify
          </p>
          <hr />
        </a>
      </li>
      <li>
        <a href="https://github.com/francispham/NodeWebApp" target="_black">
          <img src={stmedi} alt="stmedi" />
          <p>
            ➣ <strong>St Medi Website & Client Management App</strong> built
            with ReactJS, Ruby on Rails, PostgreSQL, HTML, CSS, JavaScript
          </p>
        </a>
      </li>
    </ul>
    <hr />
    <hr />
    <h3 className="animation">Other Projects</h3>
    <hr className="hr" />
    <h4>React FrontEnd:</h4>
    <a href="https://github.com/francispham/StMedi-CRA" target="_black">
      <p>
        ➣ <strong>React Business Website</strong> built with NodeJS,
        ReactJS & Netlify
      </p>
    </a>
    <hr />
    <h4>React Authentication:</h4>
    <a
      href="https://github.com/francispham/React-Authentication-Client"
      target="_black"
    >
      <p>
        ➣ <strong>React Authentication Client</strong> built with NodeJS,
        ReactJS, Redux, Redux Form, Redux Thunk
      </p>
    </a>
    <a
      href="https://github.com/francispham/React-Authentication-Server"
      target="_black"
    >
      <p>
        ➣ <strong>Authentication Server</strong> built with NodeJS, ExpressJS
      </p>
    </a>
    <hr />
    <h4>Web Dev Volunteer @ Assistlist:</h4>
    <a
      href="https://github.com/francispham/React-Authentication-Client"
      target="_black"
    >
      <p>
        ➣ <strong>AssistList Website</strong> built with ReactJS, Ruby on Rails, PostgreSQL, AWS
      </p>
    </a>
  </Layout>
)

export default IndexPage;
