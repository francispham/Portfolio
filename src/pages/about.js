import React from 'react';
import Layout from '../components/layout'

const About = () => {
  return (
    <Layout>
      <h2 className="animation">ABOUT</h2>
      <hr className="hr" />
      <p>
        Currently working as a FrontEnd Developer at Spinndle Inc (ReactJS & Redux), where we create 
        environment to help teachers effectively engage their students in deeper learning.  
      </p>
      <p>
        Former Full Stack Developer at AssistList Association. Working on ReactJS & Redux
        Frontend, and Ruby on Rails Backend
      </p>
      <p>
        Seeking for building Amazing Web Application to make life better for every
        human being.  
      </p>
      <p> 
        Hard-working web developer with an ability for creating refined
        solutions in the least amount of time. Developed an commerce webp,
        customer web portal, documentary launch website, and donations webp for
        a local charity. Passionate about ReactJS & other FrontEnd Related
        Technologies. Regular attendee of web developer meetups.
      </p>
      <p>Graduated from CodeCore Full Stack Web Development Program.</p>
      <p>
        Specialized in{' '}
        <strong>
          {' '}
          ReactJS, NextJS, GatsbyJS, NodeJS, GraphQL, HTML5, CSS3, Boostrap4, ExpressJS, 
          Ruby on Rails and PostgreSQL{' '}
        </strong>{' '}
      </p>
      <p>Since the sky is limitless, I am always ready for new challenges...</p>
    </Layout>
  )
};

export default About;
