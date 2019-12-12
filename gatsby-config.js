module.exports = {
  siteMetadata: {
    title: `Defuture Landing Page`,
    description: `This is Defuture Tech landing page.`,
    author: `Defuture Tech Team`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ],
}
