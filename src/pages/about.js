import React from 'react';
import Layout from '../components/layout'

const About = () => {
  return (
    <Layout>
      <h2 className="animation">ABOUT</h2>
      <hr className="hr" />
      <p>
        Hard-working web developer with an ability for creating refined
        solutions in the least amount of time. Developed an commerce webp,
        customer web portal, documentary launch website, and donations webp for
        a local charity. Passionate about ReactJS & other FrontEnd Related
        Technologies. Regular attendee of web developer meetups.
      </p>
      <p>Graduated from CodeCore Full Stack Web Development Program.</p>
      <p>Currently working as a freelancer, and also available for hire.</p>
      <p>
        Specialized in{' '}
        <strong>
          {' '}
          React.js, NodeJS, HTML5, CSS3, Boostrap4, ExpressJS, Ruby on Rails and
          PostgreSQL{' '}
        </strong>{' '}
      </p>
      <p>Since the sky is limitless, I am always ready for new challenges...</p>
    </Layout>
  )
};

export default About;
