module.exports = {
    siteMetadata: {
        title: `IDS Environnement`,
    },
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/src/content`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`,
        },
      },
      `gatsby-transformer-remark`,
      `gatsby-plugin-emotion`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
    ],
  }