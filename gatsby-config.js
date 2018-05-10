module.exports = {
  siteMetadata: {
    title: `PORTFOLIO`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`
      }
    },{
      resolve: `gatsby-source-filesystem`,
      options: {
      name: `img`,
      path: `${__dirname}/src/img/`
      }
    },
    'gatsby-transformer-remark',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ],
}
