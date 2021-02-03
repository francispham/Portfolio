import React, { lazy, Suspense } from 'react';
import Img from 'gatsby-image';
import { HourGlass } from 'react-awesome-spinners'
import styled from 'styled-components';

import { useStaticQuery, graphql } from 'gatsby';

const Layout = lazy(() => import('../components/layout'));
const StyledLoading = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  div {
    :after {
      width: 20rem;
      height: 20rem;
    }
  }
`
const renderLoader = () => <StyledLoading><HourGlass color='#C39F6D' size='20' sizeUnit='rem' /></StyledLoading>;

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      store: file(relativePath: { eq: "store.jpg" }) {
        childImageSharp {
          fluid {
            srcWebp
            aspectRatio
            base64
            sizes
            src
            srcSet
          }
        }
      },
      stmedi: file(relativePath: { eq: "stmedi.png" }) {
        childImageSharp {
          fluid {
            srcWebp
            aspectRatio
            base64
            sizes
            src
            srcSet
          }
        }
      },
      ninja: file(relativePath: { eq: "ninja.png" }) {
        childImageSharp {
          fluid {
            srcWebp
            aspectRatio
            base64
            sizes
            src
            srcSet
          }
        }
      },
      assistlist: file(relativePath: { eq: "assistlist.png" }) {
        childImageSharp {
          fluid {
            srcWebp
            aspectRatio
            base64
            sizes
            src
            srcSet
          }
        }
      },
      portfolio: file(relativePath: { eq: "portfolio.png" }) {
        childImageSharp {
          fluid {
            srcWebp
            aspectRatio
            base64
            sizes
            src
            srcSet
          }
        }
      },
      spinndle: file(relativePath: { eq: "spinndle.png" }) {
        childImageSharp {
          fluid {
            srcWebp
            aspectRatio
            base64
            sizes
            src
            srcSet
          }
        }
      }
    }
  `)

  const isSSR = typeof window === "undefined"

  return !isSSR && (
    <Suspense fallback={renderLoader()}>
      <Layout>
      <h2 className="animation">PROJECTS</h2>
        <hr className="hr" />
        <ul style={{ listStyle: 'none', padding: '10px' }}>
          <li>
            <a href="https://spinndle.com/" target="_black">
              <Img
                fluid={data.spinndle.childImageSharp.fluid}
              />
              <p>
                ➣ <strong>Spinndle Inc.</strong> built with ReactJS, Redux, Django,
                PostgreSQL, AWS, Docker
              </p>
              <hr />
            </a>
          </li>
          <li>
            <a href="https://www.assistlist.ca/" target="_black">
              <Img
                fluid={data.assistlist.childImageSharp.fluid}
              />
              <p>
                ➣ <strong>AssistList Association</strong> built with ReactJS, Redux, Ruby on Rails,
                PostgreSQL, AWS, Docker
              </p>
              <hr />
            </a>
          </li>
          <li>
            <a href="https://ecstatic-booth-641e46.netlify.app/" target="_black">
              <Img
                fluid={data.store.childImageSharp.fluid}
              />
              <p>
                ➣ <strong>Gatsby Store </strong> built with ReactJS, Gatsby, Netlify
                Shopify Storefront
              </p>
              <hr />
            </a>
          </li>
          <li>
            <a href="https://quirky-shockley-921b7f.netlify.app/" target="_black">
              <Img
                fluid={data.stmedi.childImageSharp.fluid}
              />
              <p>
                ➣ <strong>ST MEDI Business Website</strong> built
                with ReactJS, GatsbyJS and Netlify
              </p>
              <hr />
            </a>
          </li>
          <li>
            <a href="https://github.com/francispham/drill-ninjaz" target="_black">
              <Img
                fluid={data.ninja.childImageSharp.fluid}
              />
              <p>
                ➣ <strong>Drillz Ninja</strong> built with Ruby, Ruby on Rails,
                PostgreSQL, Bootstrap, HTML, CSS, JavaScript
              </p>
              <hr />
            </a>
          </li>
          <li>
            <a href="https://github.com/francispham/Portfolio" target="_black">
            <Img
                fluid={data.portfolio.childImageSharp.fluid}
              />
              <p>
                ➣ <strong>This Portfolio</strong> built with ReactJS, GatsbyJS
                HTML, CSS, JavaScript, Netlify
              </p>
              <hr />
            </a>
          </li>
        </ul>
        <hr />
        <hr />
        <h3 className="animation">More ReactJS Projects</h3>
        <hr className="hr" />
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
        <h4>Advance ReactJS:</h4>
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
    </Suspense>
  )
}

export default IndexPage;
