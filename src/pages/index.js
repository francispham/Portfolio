import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
    <div>
        <h1>Hi Human</h1>
        <p>Welcome to my website</p>
        <p>This is my Portfolio Website build with Gatsby, powered by React!</p>
        <Link to="/page-2/">Go to page 2</Link> 
    </div>
)

export default IndexPage
