import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout title="Page Not Found" path="/404">
    <section className="page-intro simple-page">
      <p className="eyebrow">404 / Page not found</p>
      <h1>A small detour.</h1>
      <p>This page doesn’t exist. Let’s get you back to the work.</p>
      <Link className="button-primary" to="/">
        Back to my work <span aria-hidden="true">↗</span>
      </Link>
    </section>
  </Layout>
)
export default NotFoundPage
