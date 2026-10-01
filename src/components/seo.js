import React from 'react'
import { Helmet } from 'react-helmet'

const siteUrl = 'https://www.francispham.ca'
const defaultDescription =
  'Francis Pham is a Vancouver-based software engineer building web and mobile products with React, React Native, Next.js, and TypeScript.'

const Seo = ({
  title = 'Software Engineer',
  description = defaultDescription,
  path = '/',
}) => {
  const pageTitle = `${title} | Francis Pham`
  const canonical = `${siteUrl}${
    path === '/' ? '/' : `${path.replace(/\/$/, '')}/`
  }`
  return (
    <Helmet htmlAttributes={{ lang: 'en' }}>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="theme-color" content="#f7f6f2" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      {(path === '/404' || path === '/thankyou') && (
        <meta name="robots" content="noindex, follow" />
      )}
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Francis Pham" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}
export default Seo
