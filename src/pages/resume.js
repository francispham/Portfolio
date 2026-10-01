import React from 'react'
import { Helmet } from 'react-helmet'
import Seo from '../components/seo'

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

import '../css/layout.css'
import '../css/resume.css'

const Resume = () => {
  return (
    <div className="resume-page">
      <Seo
        title="Résumé"
        path="/resume"
        description="Francis Pham’s printable résumé: React and React Native engineering, full-stack experience, and technology leadership."
      />
      <Helmet>
        <style>{`@media print { @page { margin: 0; } }`}</style>
      </Helmet>
      <div className="resume">
        <Header />
        <Banner />
        <main className="resumeGridBox">
          <div>
            <WorkExperience />
          </div>
          <div>
            <Skills />
            <Projects />
            <Achievements />
            <Education />
            <Languages />
            <Interests />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Resume
