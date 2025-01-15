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
  GiSpiderWeb,
  // GiSmartphone,
} from 'react-icons/gi'
import { TiArrowBack } from 'react-icons/ti'

import { Button } from '../components/Button'

import '../css/resume.css'

const Resume = () => {
  return (
    <div className="resume">
      <header>
        <h1>FRANCIS PHAM</h1>
        <h4>
          Frontend Developer, specialized in React and React Native Development
          & Lifetime Learner
        </h4>{' '}
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
        {/* <div>
          <GiSmartphone />
          1.778.991.0893
        </div> */}
        <div>
          <GiCrosshair />
          Vancouver, British Columbia, Canada
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
            href="https://github.com/francispham23/"
            target="_black"
            rel="noopener noreferrer"
          >
            /francispham23
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
            <h3>Software Engineer</h3>
            <div className="container">
              <strong>Betr Holdings, Inc.</strong>
              <em>Miami, Florida · Remote</em>
            </div>
            <div className="container">
              <em>Achievements/Tasks</em>
              <em>2023 - Present</em>
            </div>
            <ul>
              <li>
                Developing and launching multiple high-traffic betting platforms
                across Android, iOS and Web using React Native, supporting over
                200,000 active users.
              </li>
              <li>
                Enhancing productivity and streamlined development workflows by
                integrating AI-powered GitHub CodePilot, driving efficiency in
                daily tasks and code management.
              </li>
              <li>
                Spearheading multiple integrations with technology partners and
                3rd party services to enhance enrich the product with advanced
                features and enhanced functionality.
              </li>
              <li>
                Working stack including{' '}
                <em>
                  TypeScript, React Native, ReactJS, TanStack Query, Zustand,
                  RESTful API, Laravel, MySQL.
                </em>
                <p>
                  <small>
                    <strong>Website</strong>{' '}
                    <a
                      href="https://www.betr.app"
                      target="_black"
                      rel="noopener noreferrer"
                    >
                      https://www.betr.app
                    </a>
                  </small>
                </p>
              </li>
            </ul>
          </>
          <>
            <h3>Frontend Developer</h3>
            <div className="container">
              <strong>FansUnite Entertainment Inc.</strong>
              <em>Vancouver, BC · Remote</em>
            </div>
            <div className="container">
              <em>Achievements/Tasks</em>
              <em>2021 - 2023</em>
            </div>
            <ul>
              <li>
                Developing the front-end of a customer-facing platform, enabling
                users to manage their White Label configurations and access
                detailed reporting features.
              </li>
              <li>
                Working closely with a Product Manager and UI/UX Designers to
                refine scope and project deliverables.
              </li>
              <li>
                Ensuring code quality through unit testing as well as assist in
                investigation and resolution of support issues.
              </li>
              <li>
                Working stack including{' '}
                <em>
                  TypeScript, ReactJS, NextJS, React Native, XState, Styled
                  Components, RESTful API, Django.
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
              <strong>Spinndle Inc. and AssistList Association</strong>

              <em>Vancouver, BC · Remote</em>
            </div>
            <div className="container">
              <em>Achievements/Tasks</em>
              <em>2019 - 2021</em>
            </div>
            <ul>
              <li>
                Building a SAAS Web Application that provides a online learning
                environment for high school teachers and students with an
                effective check-in system.
              </li>
              <li>
                Creating new features from scratch using ReactJS & Redux with
                Thunk for front-end based on UI/UX requirements from Design &
                Product Owners.
              </li>
              <li>
                Fixing bugs and testing code for efficiency to ensure better
                user experience and application quality.
              </li>
              <li>
                Working stack including{' '}
                <em>
                  ReactJS, Redux, Redux Thunk, HTML5, CSS3, CSS Variables,
                  Styled Components, RESTful API, Django, Ruby on Rails,
                  PostgreSQL, Git/GitHub.
                </em>
                <p>
                  <small>
                    <strong>Website</strong>{' '}
                    <a
                      href="https://app.spinndle.com/"
                      target="_black"
                      rel="noopener noreferrer"
                    >
                      https://app.spinndle.com
                    </a>
                  </small>
                  <span> & </span>
                  <small>
                    <a
                      href="https://www.assistlist.ca"
                      target="_black"
                      rel="noopener noreferrer"
                    >
                      https://www.assistlist.ca
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
            <Button>ReactJS</Button>
            <Button>NextJS</Button>
            <Button>React Native</Button>
            <Button>TanStack Query</Button>
            <Button>Zustand</Button>
            <Button>CSS3</Button>
            <Button>HTML5</Button>
            <Button>RESTful APIs</Button>
            <Button>JavaScript</Button>
            <Button>Styled Components</Button>
            <Button>Tailwind CSS</Button>
            <Button>MySQL</Button>
            <Button>AWS</Button>
            <Button>Git/GitHub</Button>
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
                <small>
                  <strong>Website</strong>{' '}
                  <a
                    href="https://onepriceauto-development-git-main-francispham.vercel.app"
                    target="_black"
                    rel="noopener noreferrer"
                  >
                    https://www.onepriceauto.co
                  </a>
                </small>
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
                <strong>ReactJS</strong> with
                <strong> GraphQL, Styled Components.</strong>
              </p>
              <p>
                <small>
                  <strong>Website</strong>{' '}
                  <a
                    href="https://francispham.ca/"
                    target="_black"
                    rel="noopener noreferrer"
                  >
                    https://francispham.ca/
                  </a>
                </small>
              </p>
            </div>
          </>

          <h2>EDUCATION</h2>
          <div className="container">
            <strong>Web Application Development Diploma</strong>
            <em>2018</em>
          </div>
          <div className="container specialPadding">
            <em>
              Developer Bootcamp focus on full-stack development with
              JavaScript, ReactJS, React Native, Ruby on Rails, PostgreSQL,
              HTML5 & CSS3
            </em>
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
                https://github.com/francispham/drill-ninjaz
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
