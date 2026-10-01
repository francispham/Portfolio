import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const Thankyou = () => (
  <Layout title="Thank You" path="/thankyou">
    <section className="page-intro simple-page">
      <p className="eyebrow">Message received</p>
      <h1>Thanks for reaching out.</h1>
      <p>Your message has been sent. I’ll get back to you as soon as I can.</p>
      <Link className="button-primary" to="/">
        Explore my work <span aria-hidden="true">↗</span>
      </Link>
    </section>
  </Layout>
)
export default Thankyou
