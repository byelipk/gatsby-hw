module.exports = {
  plugins: [
    `gatsby-plugin-typography`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-135083219-2`,
        // Puts tracking script in the head instead of the body
        head: true,
        // enable ip anonymization
        anonymize: true,
      },
    }
  ],
}
