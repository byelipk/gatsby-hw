import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

import { Helmet } from "react-helmet"

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <title>The Home Page</title>
        </Helmet>
        <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
        <p>
          What do I like to do? Lots of course but definitely enjoy building
          websites.
        </p>
        <Link to="/about">About</Link>
      </Layout>
    )
  }
}

export default Index
