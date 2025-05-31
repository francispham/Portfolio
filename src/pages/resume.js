import React from 'react'

import { Header } from '../components/resume/Header'
import { Banner } from '../components/resume/Banner'
import { Skills } from '../components/resume/Skills'
import { Footer } from '../components/resume/Footer'
import { Projects } from '../components/resume/Projects'
import { Education } from '../components/resume/Education'
import { Languages } from '../components/resume/Languages'
import { Interests } from '../components/resume/Interests'
import { Achievements } from '../components/resume/Achievements'
import { WorkExperience } from '../components/resume/WorkExperience'

import '../css/resume.css'

const Resume = () => {
  return (
    <div className="resume">
      <Header />
      <Banner />
      <main className="resumeGridBox">
        <div>
          <WorkExperience />
          <Achievements />
        </div>
        <div>
          <Skills />
          <Projects />
          <Education />
          <Languages />
          <Interests />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Resume
