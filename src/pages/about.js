import React from 'react'
import Layout from '../components/layout'

const About = () => {
  return (
    <Layout>
      <article>
        <h2 className="animation">ABOUT</h2>
        <hr className="hr" />
        <p>
          Based in beautiful Vancouver, British Columbia, I am a React and React
          Native developer with a solid understanding of building interactive,
          high-performance web and mobile applications. I specialize in creating
          seamless user interfaces and efficient code that scales well across
          both platforms.
        </p>
        <p>
          For React, I am experienced with hooks, state management libraries
          (like Redux or Zustand), context API, and component lifecycle methods.
          On the mobile side, with React Native, I focus on building
          cross-platform apps that feel native and performant. I am familiar
          with integrating APIs, handling navigation, managing complex states,
          and optimizing app performance.
        </p>
        <p>
          I am passionate about writing clean, reusable code, maintaining good
          development practices, and staying up-to-date with the latest trends
          in the React ecosystem. Whether it is creating custom UI components,
          optimizing app performance, or integrating third-party libraries, I
          enjoy building solutions that provide great user experiences.
        </p>
        <p>
          I am a hard-working web developer with an ability for creating refined
          solutions in the least amount of time. Developed an commerce webp,
          customer web portal, documentary launch website, and donations webp
          for a local charity. Passionate about ReactJS & other FrontEnd Related
          Technologies. Regular attendee of web developer meetups.
        </p>
        <p>Graduated from CodeCore Full Stack Web Development Program.</p>
        <p>
          Specialized in
          <strong>
            {' '}
            JavaScript, ReactJS, NextJS, React Native, HTML5, CSS3, NodeJS
          </strong>
          .
        </p>
        <p>
          Since the sky is limitless, I am always ready for new challenges...
        </p>
      </article>
    </Layout>
  )
}

export default About
