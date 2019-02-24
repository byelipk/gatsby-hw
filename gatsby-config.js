const path = require("path");

module.exports = {
  plugins: [
    `gatsby-plugin-typography`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["UA-135083219-2"],
        gtagConfig: {
          optimize_id: "GTM-PK5KLCL",
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
        optimizeIds: ["GTM-PK5KLCL"],
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
