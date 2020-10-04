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
        <a href="https://ecstatic-booth-641e46.netlify.app/" target="_black">
          <img src={store} alt="store" />
          <p>
            ➣ <strong>Gatsby Store </strong> built with ReactJS, Gatsby, Netlify
            Shopify Storefront
          </p>
          <hr />
        </a>
      </li>
      <li>
        <a href="https://quirky-shockley-921b7f.netlify.app/" target="_black">
          <img src={stmedi} alt="stmedi" />
          <p>
            ➣ <strong>ST MEDI Business Website</strong> built
            with ReactJS, GatsbyJS and Netlify
          </p>
        </a>
      </li>
      <li>
        <a href="https://github.com/francispham/drill-ninjaz" target="_black">
          <img src={ninja} alt="ninja"/>
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
    </ul>
    <hr />
    <hr />
    <h3 className="animation">ReactJS Projects</h3>
    <hr className="hr" />
    <h4>Assistlist Associate:</h4>
    <a
      href="https://www.assistlist.ca"
      target="_black"
    >
      <p>
        ➣ <strong>AssistList Website</strong> built with ReactJS, Ruby on Rails, PostgreSQL, AWS, Docker
      </p>
    </a>
    <hr />
    <h4>E-commerce Full Stack</h4>
    <a href="https://github.com/francispham/fullstack-online-store-fe" target="_black">
      <p>
        ➣ <strong>E-Commerce Web Application</strong> Frontend built with ReactJS, 
        NextJS, GraphQL, Apollo Client
      </p>
    </a>
    <a href="https://github.com/francispham/OnlineStore" target="_black">
      <p>
        ➣ <strong>E-Commerce Web Application</strong> Backend built with GraphQL, 
        GraphQL Yoga, Prisma, Stripe
      </p>
    </a>
    <hr />
    <h4>Advance React:</h4>
    <a href="https://github.com/francispham/FramerMotionAdvance" target="_black">
      <p>
        ➣ <strong>React Animation</strong> built with Framer Motion
      </p>
    </a>
    <a href="https://github.com/francispham/advance-react" target="_black">
      <p>
        ➣ <strong>React Animation</strong> built with React Spring
      </p>
    </a>
    <a href="https://github.com/francispham/React3D" target="_black">
      <p>
        ➣ <strong>React 3D</strong> built with React Spring, ThreeJS, React Three Fiber 
      </p>
    </a>
    <a
      href="https://github.com/francispham/React-Authentication-Client"
      target="_black"
    >
      <p>
        ➣ <strong>React Authentication Client</strong> built with NodeJS,
        ReactJS, Redux, Redux Form, Redux Thunk
      </p>
    </a>
    <hr />
  </Layout>
)

export default IndexPage;
