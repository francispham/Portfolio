import React from 'react'
import { Link } from 'gatsby'

import {
  FaSnowboarding,
  FaHiking,
  FaGithub,
  FaEnvelope,
  FaLinkedin,
} from 'react-icons/fa'
import {
  GiKnifeFork,
  GiHeadphones,
  GiCrosshair,
  GiSmartphone,
  GiSpiderWeb,
} from 'react-icons/gi'
import { TiArrowBack } from 'react-icons/ti'

import { Button } from '../components/Button'

import '../css/resume.css'

const Resume = () => {
  return (
    <div className="resume">
      <header>
        <h1>FRANCIS PHAM</h1>
        <h4>Frontend Developer / Lifetime Learner</h4>
        <p style={{ fontSize: 'smaller' }}>
          <em>
            "Passion to Learn & Become an Efficient Problem Solver, Seeking to
            Build Amazing Web Apps to Make Life Better for Everyone"
          </em>
        </p>
      </header>
      <div
        className="container divided"
        style={{ fontWeight: '550', justifyContent: 'space-around' }}
      >
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
        <div>
          <GiSmartphone />
          1.778.991.0893
        </div>
        <div>
          <GiCrosshair />
          British Columbia, Canada
        </div>
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
          <>
            <h3>Frontend Developer</h3>
            <div className="container">
              <strong>FansUnite Entertainment Inc.</strong>
              <em>Vancouver, BC</em>
            </div>
            <div className="container">
              <em>Achievements/Tasks</em>
              <em>2021 - Present</em>
            </div>
            <ul>
              <li>
                Building the front end of a customer-facing product that allows
                them to manage aspects of their own White Label as well as
                access to reporting.
              </li>
              <li>
                Working closely with a Product Manager and UI/UX Designers to
                refine scope and project deliverables.
              </li>
              <li>
                Ensure code quality through unit testing as well as assist in
                investigation and resolution of support issues.
              </li>
              <li>
                Working stack including{' '}
                <em>
                  ReactJS, TypeScript, HTML5, CSS3, CSS Variables, Styled
                  Components, Python, Django, AWS, Git/GitHub.
                </em>
                <p>
                  <small>
                    <strong>Website</strong>{' '}
                    <a
                      href="https://www.fansunite.com/"
                      target="_black"
                      rel="noopener noreferrer"
                    >
                      https://www.fansunite.com
                    </a>
                  </small>
                </p>
              </li>
            </ul>
          </>
          <>
            <h3>Frontend Developer</h3>
            <div className="container">
              <strong>Spinndle Inc.</strong>
              <em>Vancouver, BC</em>
            </div>
            <div className="container">
              <em>Achievements/Tasks</em>
              <em>2020 - 2021</em>
            </div>
            <ul>
              <li>
                Building a SAAS Web Application that provides a learning
                environment for high school teachers and students with an
                effective check-in system for learning remotely.
              </li>
              <li>
                Creating new features from scratch using ReactJS & Redux with
                Thunk for Frontend based on UI/UX requirements from Design &
                Product Owners.
              </li>
              <li>
                Fixing bugs and testing code cleaned up for efficiency to ensure
                better user experience and application quality.
              </li>
              <li>
                Working closely with co-founders in daily meetings to prioritize
                and assign tasks. Collaborating efficiently with other designers
                and developers in a small team.
              </li>
              <li>
                Working stack including{' '}
                <em>
                  ReactJS, Redux, Redux Thunk, JavaScript, HTML5, CSS3, CSS
                  Variables, Styled Components, Reactstrap, Python, Django, AWS,
                  Git/GitLab.
                </em>
                <p>
                  <small>
                    <strong>Website</strong>{' '}
                    <a
                      href="https://app.spinndle.com/"
                      target="_black"
                      rel="noopener noreferrer"
                    >
                      https://app.spinndle.com/
                    </a>
                  </small>
                </p>
              </li>
            </ul>
          </>
          <>
            <h3>Fullstack Developer</h3>
            <div className="container">
              <strong>AssistList Association</strong>
              <em>Vancouver, BC</em>
            </div>
            <div className="container">
              <em>Achievements/Tasks</em>
              <em>2019 - 2020</em>
            </div>
            <ul>
              <li>
                Building new features using ReactJS & Redux for Frontend, and
                Rails RESTful APIs Backend, based on UI/UX requirements from
                Design & Business teams.
              </li>
              <li>
                Participating in weekly meetings to prioritize and assign tasks
                to team members.
              </li>
              <li>
                Performing code peer reviews to maintain quality standards,
                improve performance, and provide credibility.
              </li>
              <li>
                Working stack including{' '}
                <em>
                  ReactJS, Semantic UI React, Ruby on Rails, PostgreSQL, AWS,
                  Docker.
                </em>
                <p>
                  <small>
                    <strong>Website</strong>{' '}
                    <a
                      href="https://www.assistlist.ca"
                      target="_black"
                      rel="noopener noreferrer"
                    >
                      https://www.assistlist.ca/
                    </a>
                  </small>
                </p>
              </li>
            </ul>
          </>
        </div>

        <div>
          <h2>SKILLS</h2>
          <div
            className="container specialPadding"
            style={{
              alignContent: 'space-between',
            }}
          >
            <Button>TypesScript</Button>
            <Button>JavaScript</Button>
            <Button>ReactJS</Button>
            <Button>Redux</Button>
            <Button>GatsbyJS</Button>
            <Button>NextJS</Button>
            <Button>Jest</Button>
            <Button>Styled Components</Button>
            <Button>CSS3</Button>
            <Button>HTML5</Button>
            <Button>NodeJS</Button>
            <Button>GraphQL</Button>
            <Button>RESTful APIs</Button>
          </div>
          <h2>PROJECTS</h2>
          <>
            <div className="container">
              <strong>E-commerce Web Applications</strong>
              <em>2022</em>
            </div>
            <div className="infoDetails">
              <p>
                A Blazing fast online store built in <strong>NodeJS</strong>{' '}
                Ecosystem. The website owner can post products/servers online
                connected with Cloud Database for Inventory System with Shopify
                Storefront API. Building stack including{' '}
                <em>NextJS, ReactJS, Shopify API, Vercel</em>
              </p>
              <p>
                <strong>Website</strong>{' '}
                <a
                  href="https://onepriceauto-development-git-main-francispham.vercel.app"
                  target="_black"
                  rel="noopener noreferrer"
                >
                  https://www.onepriceauto.co
                </a>
              </p>
            </div>
          </>
          <>
            <div className="container">
              <strong>Personal Portfolio Website</strong>
              <em>2021</em>
            </div>
            <div className="infoDetails">
              <p>
                A Professional Web Application Developer Portfolio Website with
                Resume, served on <strong>Netlify</strong> Server, building with{' '}
                <strong>GatsbyJS</strong> site generator on top of{' '}
                <strong>ReactJS</strong>. Other technologies including{' '}
                <em>GraphQL, Styled Components.</em>
              </p>
              <p>
                <strong>Website</strong>{' '}
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
          </>

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
            <strong>Drill Ninjaz Application</strong>
            <em>2018</em>
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
            <div
              style={{
                textAlign: 'center',
                padding: '0.5rem',
              }}
            >
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

export default Resume
