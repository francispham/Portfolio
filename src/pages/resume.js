import React from 'react';
import { Link, useStaticQuery } from 'gatsby';
import { FaSnowboarding, FaHiking } from 'react-icons/fa'
import { GiKnifeFork, GiHeadphones } from 'react-icons/gi'
import Img from 'gatsby-image';

import '../css/resume.css';

const Resume = () => {
  const data = useStaticQuery(graphql`
    query MyImage {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: {eq: "keyboard.jpg"}) {
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

  return (
    <div className="resume-container">
      <Img
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
        }}
        fluid={data.file.childImageSharp.fluid}
        alt="Keyboard"
      />
      <div className="resume">
        <section className="header">
          <div className="title">
            <div>
              <h1 style={{ marginBottom: '0px' }}>FRANCIS PHAM</h1>
              <h3>WEB APPLICATION DEVELOPER</h3>
            </div>
          </div>
          <div className="infor">
            <p>VANCOUVER, BC</p>
            <p>604.716.5452</p>
            <p>
              <a
                href="https://www.francispham.ca/"
                target="_black"
                rel="noopener noreferrer"
              >
                WWW.FRANCISPHAM.CA
              </a>
            </p>
            <p>
              <a
                href="mailto:francis.pham.ca@gmail.com"
                target="_black"
                rel="noopener noreferrer"
              >
                FRANCIS.PHAM.CA@GMAIL.COM
              </a>
            </p>
            <p>
              <a
                href="https://github.com/francispham/"
                target="_black"
                rel="noopener noreferrer"
              >
                GITHUB.COM/FRANCISPHAM
              </a>
            </p>
            <p>
              <a
                href="https://linkedin.com/in/francisphamca/"
                target="_black"
                rel="noopener noreferrer"
              >
                LINKEDIN.COM/IN/FRANCISPHAMCA
              </a>
            </p>
          </div>
        </section>

        <section className="main">
          <div>
            <h4>SKILLSET</h4>
            <ul>
              <li>LANGUAGES: JavaScript, GraphQL, Ruby</li>
              <li>
                FRONTEND: ReactJS, Redux, HTML5, CSS3/SASS, jQuery,
                Bootstrap4...{' '}
              </li>
              <li>
                BACKEND: NodeJS, ExpressJS, Ruby on Rails, RESTful, APIs...
              </li>
              <li>DATABASES: PostgreSQL, MongoDB, AWS, FireBase...</li>
              <li>
                DEVELOPMENT & DEV TOOLS: Git/GitHub or BitBucket,Webpack,
                Heroku, Netlify, AWS S3...
              </li>
              <li>
                DEVELOPMENT CONCEPTS: MVC Design Pattern, Agile/Scrum
                Methodology...
              </li>
            </ul>
            <h4>EDUCATION</h4>
            <ul style={{ listStyleType: 'none', marginLeft: '10px' }}>
              <li>
                Web Application Development Bootcamp, &nbsp;
                <a
                  href="https://codecore.ca/"
                  target="_black"
                  rel="noopener noreferrer"
                >
                  CodeCore College - 2018
                </a>
                <p>
                  <small>
                    Fullstack: JavaScript, ReactJS, Ruby on Rails, HTML & CSS
                  </small>
                </p>
              </li>
              <li>
                Bachelor of Arts, &nbsp;
                <a
                  href="https://sfu.ca/"
                  target="_black"
                  rel="noopener noreferrer"
                >
                  Simon Fraser University - 2015
                </a>
                <p>
                  <small>Economics Major & Business Administration Minor</small>
                  .
                </p>
              </li>
            </ul>
            <h4>INTERESTS</h4>
            <div style={{ padding: '1em', textAlign: 'center' }}>
              <FaSnowboarding size={55} />
              <FaHiking size={55} />
              <GiKnifeFork size={55} />
              <GiHeadphones size={55} />
            </div>
            <div className="interests-container"></div>
          </div>
          <div className="work">
            <h4>WORK EXPERIENCE</h4>
            <h5>GROUP PROJECTS</h5>
            <ul>
              <li>
                AssistList 2019: Web Application Volunteer. Key Responsibilities
                - Weekly meetup with other team members, fixed bugs &
                contributed to the website code base. Stack:{' '}
                <em>
                  ReactJS, Semantic UI React, Ruby on Rails, PostgreSQL, AWS S3
                </em>
                <p>
                  <a
                    href="https://www.assistlist.ca"
                    target="_black"
                    rel="noopener noreferrer"
                  >
                    Https://www.assistlist.ca/
                  </a>
                </p>
              </li>
              <li>
                Drill Ninjaz 2018: Key Responsibilities - Collaborated with
                other team members, Designed, developed, tested some of the
                app's features. The team won second place for this group
                project. Built with <em>Ruby on Rails & PostgreSQL</em>.
                <p>
                  <a
                    href="https://github.com/francispham/drill-ninjaz"
                    target="_black"
                    rel="noopener noreferrer"
                  >
                    Https://github.com/francispham/drill-ninjaz
                  </a>
                </p>
              </li>
            </ul>
            <h5>FREELANCE & PERSONAL PROJECTS</h5>
            <ul>
              <li>
                Portfolio Website 2019: .Stack:{' '}
                <em>GatsbyJS, ReactJS, GraphQL & Netlify</em>
                <p>
                  <a
                    href="https://github.com/francispham/Portfolio"
                    target="_black"
                    rel="noopener noreferrer"
                  >
                    Https://github.com/francispham/Portfolio
                  </a>
                </p>
              </li>
              <li>
                E-commerce Web Application 2019: .Stack:{' '}
                <em>NodeJS, ExpressJS, MongoDB</em>
                <p>
                  <a
                    href="https://github.com/francispham/OnlineStore"
                    target="_black"
                    rel="noopener noreferrer"
                  >
                    Https://github.com/francispham/OnlineStore
                  </a>
                </p>
              </li>
              <li>
                Client Management Web Application 2018: This business platform
                allows users to store clients' database on cloud for easy assess
                and use. Stack:{' '}
                <em>
                  NodeJS, ReactJS, Redux, reduxForm, ExpressJS, MongoDB, Heroku
                </em>
                <p>
                  <a
                    href="https://github.com/francispham/NodeWebApp"
                    target="_black"
                    rel="noopener noreferrer"
                  >
                    Https://github.com/francispham/NodeWebApp
                  </a>
                </p>
              </li>
              <li>
                ST MEDI WordPress Site 2018: Completed Website update and
                renovation. Implemented Google Analytics and enhanced overall
                styling. Created & edited new contents from designers.
                <p>
                  <a
                    href="http://stmedilaser.com/"
                    target="_black"
                    rel="noopener noreferrer"
                  >
                    Http://stmedilaser.com/
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div className="link">
        <Link to="/">GoBack</Link>
        <Link to="/">Please Download</Link>
      </div>
    </div>
  )
}

export default Resume;