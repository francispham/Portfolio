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
        <h4>Frontend Developer / Lifetime Learner</h4>
        <p style={{fontSize: 'smaller'}}>
          <em>
            "Passion to Learn &  Become an Efficient Problem Solver, Seeking to Build Amazing Web Apps 
            to Make Life Better for Everyone"
          </em>
        </p>
      </header>
      <div className="container divided" style={{fontWeight:'550', justifyContent:'space-around'}}>
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
          <div><GiSmartphone />1.778.991.0893</div>
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
          <h3>Frontend Developer</h3>
          <div className="container">
            <strong>Spinndle Inc.</strong>
            <em>Vancouver, BC</em>
          </div>
          <div className="container">
            <em>Achievements/Tasks</em>
            <em>11/2020 - 4/2021</em>
          </div>
          <ul>
            <li>
              Helping build a SAAS Web Application that provides a learning environment for high school teachers and students with an effective check-in system for learning remote or in person.
            </li>
            <li>
              Creating new features from scratch using ReactJS & Redux with Thunk for Frontend based on UI/UX requirements from Design & Product Owners.
            </li>
            <li>
              Working closely with co-founders in daily meetings to prioritize and assign tasks. Collaborating efficiently with other designers and developers in a small team.
            </li>
            <li>
              Fixing bugs, testing code cleaned up for efficiency to ensure better user experience and application's quality.
            </li> 
            <li>
              Working stack including {' '}
              <em>ReactJS, Redux, Redux Thunk, JavaScript, HTML5, CSS3, CSS Variables, Styled Components, Reactstrap, Python, Django, AWS, Git/GitLab.</em>
              <p> <strong>Website</strong> {' '}
                <a
                  href="https://app.spinndle.com/"
                  target="_black"
                  rel="noopener noreferrer"
                >
                  https://app.spinndle.com/
                </a>
              </p>
            </li>
          </ul>

          <h3>Fullstack Developer</h3>
          <div className="container">
            <strong>AssistList Association</strong>
            <em>Vancouver, BC</em>
          </div>
          <div className="container">
            <em>Achievements/Tasks</em>
            <em>10/2019 - now</em>
          </div>
          <ul>
            <li>
              Building new features using ReactJS & Redux for Frontend, and Rails RESTful APIs 
              Backend, based on UI/UX requirements from Design & Business teams.
            </li>
            <li>
              Participating in weekly meetings to prioritize and assign tasks to team members. 
            </li>
            <li>
              Performing code peer reviews to maintain quality standards, improve performance, and provide credibility.
            </li>
            <li>
              Working stack including <em>ReactJS, Semantic UI React, Ruby on Rails, PostgreSQL, AWS, Docker.</em>
              <p> <strong>Website</strong> {' '}
                <a
                  href="https://www.assistlist.ca"
                  target="_black"
                  rel="noopener noreferrer"
                >
                  https://www.assistlist.ca/
                </a>
              </p>
            </li>
          </ul>

          <h3>Web Developer</h3>
          <div className="container">
            <em>Achievements/Tasks</em>
            <em>2018 - 2020</em>
          </div>
          <div className="container">
            <span><strong>StMedi Laser & Skincare</strong> - WorkPress Site</span>
            <em>Vancouver, BC</em>
          </div>
          <div className="container">
            <span><strong>BeeVoke E-commerce</strong> - WorkPress Site</span>
            <em>Vancouver, BC</em>
          </div>
          <ul>
            <li>
              Providing effective diagnosing, troubleshooting and resolving issues with the website, server and 3rd party integrations 
            </li>
            <li>
              Completing and continuing Website updates and renovations based on new design requirements. 
            </li>
            <li>
              Implementing Google Analytics and SEO for better internet traffics, increasing sales and lower customers acquisition cost.
              <div className="container">
                <span> <strong>Websites</strong>&nbsp;&nbsp;&nbsp;
                  <small>
                    <a
                      href="https://stmedilaser.com/"
                      target="_black"
                      rel="noopener noreferrer"
                    >
                      https://stmedilaser.com/
                    </a>
                  </small>
                </span>
                <span>
                  <small>
                    <a
                      href="https://beevoke.ca/"
                      target="_black"
                      rel="noopener noreferrer"
                    >
                      https://beevoke.ca/
                    </a>
                  </small>
                </span>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h2>SKILLS</h2>
          <div className="container specialPadding" style={{ 
            alignContent: 'space-between'
          }}>
            <Button>JavaScript</Button><Button>ReactJS</Button>
            <Button>Redux</Button><Button>GatsbyJS</Button>
            <Button>NodeJS</Button><Button>ExpressJS</Button>
            <Button>Git</Button><Button>Ruby on Rails</Button>
            <Button>GraphQL</Button><Button>PostgreSQL</Button>
            <Button>RESTful APIs</Button><Button>Jest</Button>
            <Button>MongoDB</Button><Button>HTML5</Button>
            <Button>CSS3</Button><Button>Styled Components</Button>
          </div>
          <h2>PROJECTS</h2>
          <div className="container">
            <strong>Personal Portfolio Website</strong>
            <em>2021</em>
          </div>
          <div className="infoDetails">
            <p>
              A Professional Web Application Developer Portfolio Website with Resume, 
              served on <strong>Netlify</strong> Server, building with {' '}
              <strong>GatsbyJS</strong> site generator on top of <strong>ReactJS</strong>.
              Other tech including <em>GraphQL, Styled Components, Webpack.</em>
            </p>
            <p><strong>Website</strong> {' '}
              <a
                href="https://francispham.ca/"
                target="_black"
                rel="noopener noreferrer"
              >
                https://francispham.ca/
                </a>
            </p>
            <small>
              <a
                href="https://github.com/francispham/Portfolio"
                target="_black"
                rel="noopener noreferrer"
              >
                Https://github.com/francispham/Portfolio
              </a>
            </small>
          </div>
          <div className="container">
            <strong>E-commerce Web Applications</strong>
            <em>2019 - Present</em>
          </div>
          <div className="infoDetails">
            <p>
              Blazing fast online Stores built in <strong>NodeJS</strong> Ecosystem.
              The website owner can post products/servers online connected with Cloud
              Database for Inventory System or with Shopify Storefront API. 
              Customers can make their payments via <strong>Stripe</strong>. 
              Building stack including <em>GatsbyJS, ReactJS, Shopify API, ExpressJS, MongoDB & RESTful APIs.</em>
            </p>
            <p> <strong>Website</strong> {' '}
              <a
                href="https://www.vieteat.club/"
                target="_black"
                rel="noopener noreferrer"
              >
                https://www.vieteat.club/
                </a>
            </p>
            <small>
              <a
                href="https://github.com/francispham/gatsby-shopify-storefront"
                target="_black"
                rel="noopener noreferrer"
              >
                1. Https://github.com/francispham/gatsby-shopify-storefront
              </a><br />
              <a
                href="https://github.com/francispham/OnlineStore"
                target="_black"
                rel="noopener noreferrer"
              >
                2. Https://github.com/francispham/OnlineStore
              </a>
            </small>
          </div>

          <h2>EDUCATION</h2>
          <div className="container">
            <strong>Web Application Development Bootcamp</strong>
            <em>2018</em>
          </div>
          <div className="container specialPadding">
            <em>Fullstack: JavaScript, ReactJS, Ruby on Rails, HTML5 & CSS3</em>
            <p>CodeCore College</p>
          </div>
          <div className="container">
            <strong>Bachelor of Arts</strong>
            <em>2015</em>
          </div>
          <div className="container specialPadding">
            <em>Economics Major & Business Administration Minor</em>
            <p>Simon Fraser University</p>
          </div>

          <h2>ACHIEVEMENTS</h2>
          <div className="container">
            <strong>Drill Ninjaz Application</strong><em>2018</em>
            <em>Won Second Place for Well Overall Performance Group Project</em>
          </div>
          <div className="infoDetails">
            <p>
              Built with <em>Ruby on Rails & PostgreSQL</em>.
            </p>
            <small>
              <a
                href="https://github.com/francispham/drill-ninjaz"
                target="_black"
                rel="noopener noreferrer"
              >
                Https://github.com/francispham/drill-ninjaz
                </a>
            </small>
          </div>
          <h2>LANGUAGES</h2>
          <div className="container specialPadding">
            <div>
              <p>English</p>
              <em>Bilingual Proficiency</em>
            </div>
            <div>
              <p>Vietnamese</p>
              <em>Native</em>
            </div>
          </div>
          <div className="container">
          <h2>INTERESTS</h2>
            <div style={{
              textAlign: 'center',
              padding: '0.5rem',
            }}>
              <FaSnowboarding size={30} />
              <FaHiking size={30} />
              <GiKnifeFork size={30} />
              <GiHeadphones size={30} />
            </div>
          </div>
        </div>
      </main>
      
      <footer>
        <Link to="/">
          <TiArrowBack size={50} />
        </Link>
      </footer>
    </div>
    
  )
}

export default Resume;