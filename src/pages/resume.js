import React from 'react';
import { Link } from 'gatsby';

import '../styles/resume.css';

const Resume = () => (
    <div>
        <div className="resume">
            <section className="section">
                <div>
                    <h1>Resume</h1>
                </div>
                <div>
                    <h3>Contact</h3>
                </div>
            </section>
            <section className="section">
                <div>
                    <h2>Skills</h2>
                    <h2>Education</h2>
                </div>
                <div>
                    <h2>Work Experience</h2>
                </div>
            </section>
            <section
                className="section"
                style={{ borderTop:"1px solid lightgrey" }}
            >
                <h2>Interests</h2>
            </section>
            <Link to="/">go back</Link>
        </div>
    </div>
);

export default Resume;