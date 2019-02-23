module.exports = {
  plugins: [
    `gatsby-plugin-typography`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "UA-135083219-2"
        ],
        gtagConfig: {
          optimize_id: "GTM-PK5KLCL",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // pluginConfig: {
        //   head: true,
        //   respectDNT: true,
        // }
      },
    }
  ],
}
