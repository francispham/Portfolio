import React from 'react';
import { Link } from 'gatsby';

import '../styles/resume.css';

const Resume = () => (
    <div>
        <div className="resume">
            <section 
                className="header"
            >
                <div>
                    <h1>FRANCIS PHAM</h1>
                    <h4>WEB DEVELOPER</h4>
                </div>
                <div>
                    <div className="infor"><small>
                        <p>VANCOUVER, BC</p>
                        <p>604.716.5452</p>
                        <p>
                            <a
                                href="https://francispham.ca/"
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
                    </small></div>
                </div>
            </section>

            <section className="main">
                <div>
                    <h2>SKILLSET</h2>
                    <ul>
                        <li>LANGUAGES: JavaScript, GraphQL, Ruby</li>
                        <li>FRONTEND: ReactJS, Redux, HTML5, CSS3/SASS, jQuery, Bootstrap4... </li>
                        <li>BACKEND: NodeJS, ExpressJS, Ruby on Rails, RESTful, APIs...</li>
                        <li>DATABASES: PostgreSQL, MongoDB, AWS, FireBase...</li>
                        <li>DEVELOPMENT & DEV TOOLS: Git/GitHub or BitBucket,Webpack, Heroku, Netlify, AWS S3...</li>
                        <li>DEVELOPMENT CONCEPTS: MVC Design Pattern, Agile/Scrum Methodology...</li>
                    </ul>
                    <h2>EDUCATION</h2>
                    <ul>
                        <li>
                            Web Application Development Bootcamp,&nbsp;
                            <a 
                                href="https://codecore.ca/" 
                                target="_black"
                                rel="noopener noreferrer"
                                >
                                    CodeCore College.
                            </a>
                            <p><small>Fullstack: JavaScript, ReactJS, Ruby on Rails, HTML & CSS</small>. 2018</p>
                        </li>
                        <li>
                            Bachelor of Arts,&nbsp;
                            <a 
                                href="https://sfu.ca/" 
                                target="_black"
                                rel="noopener noreferrer"
                            >
                                Simon Fraser University. 
                            </a>
                            <p><small>Economics Major & Business Administration Minor</small>. 2015</p>
                        </li>
                    </ul>
                    <h2>Interests</h2>
                    <div className="interests-container"></div>
                </div>
                <div className="work">
                    <h2>WORK EXPERIENCE</h2>
                    <h3>GROUP PROJECTS</h3>
                    <ul>
                        <li>
                            AssistList 2019: .Stack: <em>ReactJS, Semantic UI React, Ruby on Rails, PostgreSQL, AWS S3</em>
                            <p>
                                <a
                                    href="https://www.assistlist.ca"
                                    target="_black"
                                    rel="noopener noreferrer"
                                >Https://www.assistlist.ca/</a>

                            </p>
                        </li>
                        <li>
                            Drill Ninjaz 2018: This collaborative platform is designed to test users' coding skills and keep track of progress. The team won second place for this group project. Built with <em>Ruby on Rails & PostgreSQL</em>.
                            <p>
                                <a
                                    href="https://github.com/francispham/drill-ninjaz"
                                    target="_black"
                                    rel="noopener noreferrer"
                                >Https://github.com/francispham/drill-ninjaz</a>

                            </p>
                        </li>
                    </ul>
                    <h3>FREELANCE & PERSONAL PROJECTS</h3>
                    <ul>
                        <li>Portfolio Website 2019: .Stack: <em>GatsbyJS, ReactJS, GraphQL & Netlify</em>
                            <p>
                                <a
                                    href="https://github.com/francispham/Portfolio"
                                    target="_black"
                                    rel="noopener noreferrer"
                                >Https://github.com/francispham/Portfolio</a>
                            </p>
                        </li>
                        <li>E-commerce Web Application 2019: .Stack: <em>NodeJS, ExpressJS, MongoDB</em>
                            <p>
                                <a
                                    href="https://github.com/francispham/OnlineStore"
                                    target="_black"
                                    rel="noopener noreferrer"
                                >Https://github.com/francispham/OnlineStore</a>

                            </p>
                        </li>
                        <li>
                            Client Management Web Application 2018: This business platform allows users to store clients' database on cloud for easy assess and use. Stack: <em>NodeJS, ReactJS, Redux, reduxForm, ExpressJS, MongoDB, Heroku</em>
                            <p>
                                <a
                                    href="https://github.com/francispham/NodeWebApp"
                                    target="_black"
                                    rel="noopener noreferrer"
                                >Https://github.com/francispham/NodeWebApp</a>
                            </p>
                        </li>
                        <li>ST MEDI WordPress Site 2018: Completed Website update and renovation. Implemented Google Analytics and enhanced overall styling. Created & edited new contents from designers.
                            <p>
                                <a
                                    href="http://stmedilaser.com/"
                                    target="_black"
                                    rel="noopener noreferrer"
                                >Http://stmedilaser.com/</a>
                            </p>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
        <div>
            <Link to="/">GoBack</Link>  
            <Link to="/">Please Download</Link>
        </div>
    </div>
);

export default Resume;