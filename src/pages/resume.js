import React from 'react';
import { Link } from 'gatsby';

import { FaSnowboarding, FaHiking, FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { GiKnifeFork, GiHeadphones, GiCrosshair, GiSmartphone, GiSpiderWeb } from 'react-icons/gi';
import { TiArrowBack } from 'react-icons/ti';

import { Button } from '../components/Button'

import '../css/resume.css';

const Resume = () => {
  return (
    <div className="resume">
      <header>
        <h1>FRANCIS PHAM</h1>
        <h4>Junior Web Developer</h4>
        <p>
          Passion to learn & efficient problem solver 
          seeking to build Web App to make life better for everyone
        </p>
      </header>
      <div className="container divided" style={{fontSize:'small', justifyContent:'space-around'}}>
          <div>
            <FaEnvelope />
            <a
              href="mailto:francis.pham.ca@gmail.com"
              target="_black"
              rel="noopener noreferrer"
            >
              francis.pham.ca@gmail.com
            </a>
          </div>
          <div><GiSmartphone />1.604.716.5452</div>
          <div><GiCrosshair />British Columbia, Canada</div>
          <div>
            <GiSpiderWeb />
            <a
              href="https://www.francispham.ca/"
              target="_black"
              rel="noopener noreferrer"
            >
              francispham.ca
            </a>
          </div>
          <div>
            <FaGithub />
            <a
              href="https://github.com/francispham/"
              target="_black"
              rel="noopener noreferrer"
            >
              /francispham
            </a>
          </div>
          <div>
            <FaLinkedin />
            <a
              href="https://linkedin.com/in/francisphamca/"
              target="_black"
              rel="noopener noreferrer"
            >
              /in/francisphamca
            </a>
          </div>
        </div>

      <main className="resumeGridBox">
        <div>
          <h2>WORK EXPERIENCE</h2>
          <h3>Fullstack Developer</h3>
          <div className="container">
            <strong>AssistList</strong>
            <em>Vancouver, BC</em>
          </div>
          <div className="container">
            <em>Achievements/Tasks</em>
            <em>10/2019 - Present</em>
          </div>
          <ul>
            <li>
              Weekly meetup with other team members, fixed bugs &
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
          </ul>
          <h3>Freelance Web Developer</h3>
          <div className="container">
            <strong>St Medi Spa</strong>
            <em>Vancouver, BC</em>
          </div>
          <div className="container">
            <em>Achievements/Tasks</em>
            <em>1/2019 - 8/2019</em>
          </div>
          <ul>
            WordPress Site 2018: 
            <li>
              Completed Website update and
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
              Client Management Web Application 2019. 
              <li>
              Stack: <em>NodeJS, ReactJS, Redux, reduxForm, ExpressJS, MongoDB, Heroku</em>{' '}
                <a
                  href="https://github.com/francispham/NodeWebApp"
                  target="_black"
                  rel="noopener noreferrer"
                >
                  Https://github.com/francispham/NodeWebApp
                </a>
              </li>
            </li>
          </ul>
          <h2>ACHIEVEMENTS</h2>
          <div className="container">
            <strong>Drill Ninjaz Application</strong>
            <em>2018</em>
          </div>
          <div className="infoDetails">
            <p>
              Built with <em>Ruby on Rails & PostgreSQL</em>.
            </p>
            <p>
              <a
                href="https://github.com/francispham/drill-ninjaz"
                target="_black"
                rel="noopener noreferrer"
              >
                Https://github.com/francispham/drill-ninjaz
                </a>
            </p>
          </div>
          <h2>INTERESTS</h2>
          <div style={{
            textAlign: 'center',
            padding: '1.5rem',
          }}>
            <FaSnowboarding size={45} />
            <FaHiking size={45} />
            <GiKnifeFork size={45} />
            <GiHeadphones size={45} />
          </div>
        </div>
        
        <div>
          <h2>SKILLS</h2>
          <div className="container" style={{ 
            paddingBottom: '1rem',
            alignContent: 'space-between'
          }}>
            <Button>JavaScript</Button><Button>ReactJS</Button>
            <Button>Redux</Button><Button>GatsbyJS</Button>
            <Button>NodeJS</Button><Button>ExpressJS</Button>
            <Button>Git</Button><Button>Ruby on Rails</Button>
            <Button>GraphQL</Button><Button>PostgreSQL</Button>
            <Button>MongoDB</Button><Button>HTML5</Button>
            <Button>CSS3</Button><Button>Styled Components</Button>
          </div>
          <h2>PERSONAL PROJECTS</h2>
          <div className="container">
            <strong>Personal Portfolio Website</strong>
            <em>2019 - Present</em>
          </div>
          <div className="infoDetails">
            <p>
              A Professional Web Application Developer Portfolio Website with
              Resume, served on Netlify Server, built with GatsbyJS on top of React Framework.
              Stack: <em>ReactJS, GatsbyJS, GraphQL & Netlify</em>
            </p>
            <p>
              <a
                href="https://github.com/francispham/Portfolio"
                target="_black"
                rel="noopener noreferrer"
              >
                Https://github.com/francispham/Portfolio
              </a>
            </p>
          </div>
          <div className="container">
            <strong>E-commerce Web Application</strong>
            <em>2019</em>
          </div>
          <div className="infoDetails">
            <p>
              Stack: <em>NodeJS, ExpressJS, MongoDB</em>
            </p>
            <p>
              <a
                href="https://github.com/francispham/OnlineStore"
                target="_black"
                rel="noopener noreferrer"
              >
                Https://github.com/francispham/OnlineStore
              </a>
            </p>
          </div>
          <h2>EDUCATION</h2>
          <div className="container">
            <strong>Web Application Development Bootcamp</strong>
            <em>2018</em>
          </div>
          <div className="container" style={{ paddingBottom: '1rem' }}>
            <em>Fullstack: JavaScript, ReactJS, Ruby on Rails, HTML5 & CSS3</em>
            <p>CodeCore College</p>
          </div>
          <div className="container">
            <strong>Bachelor of Arts</strong>
            <em>2015</em>
          </div>
          <div className="container" style={{ paddingBottom: '1rem'}}>
            <em>Economics Major & Business Administration Minor</em>
            <p>Simon Fraser University</p>
          </div>
          <h2>LANGUAGES</h2>
          <div className="container">
            <div>
              <p>English</p>
              <em>Bilingual Proficiency</em>
            </div>
            <div>
              <p>Vietnamese</p>
              <em>Native</em>
            </div>
          </div>
        </div>
      </main>
      
      <footer>
        <Link to="/">
          <TiArrowBack size={40} />
        </Link>
      </footer>
    </div>
    
  )
}

export default Resume;