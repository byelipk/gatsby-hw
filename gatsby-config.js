const path = require("path");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    `gatsby-plugin-typography`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [`${process.env.GOOGLE_ANALYTICS_ID}`],
        gtagConfig: {
          optimize_id: `${process.env.GOOGLE_OPTIMIZE_ID}`,
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
      },
    },
    {
      resolve: `gatsby-anti-flicker-snippet`,
      options: {
        optimizeIds: [`${process.env.GOOGLE_OPTIMIZE_ID}`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`
  ],
}
