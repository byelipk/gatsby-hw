module.exports = {
  plugins: [
    `gatsby-plugin-typography`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-135083219-2"
      }
    }
  ],
}