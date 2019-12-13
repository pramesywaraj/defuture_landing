module.exports = {
  siteMetadata: {
    title: `Defuture Landing Page`,
    description: `This is Defuture Tech landing page.`,
    author: `Defuture Tech Team`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `montserrat`,
          `sans-serif`
        ]
      }
    }
    
  ],
}
