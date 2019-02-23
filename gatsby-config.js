module.exports = {
  plugins: [
    `gatsby-plugin-typography`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: "UA-135083219-2",
        head: false
      }
    }
  ],
}