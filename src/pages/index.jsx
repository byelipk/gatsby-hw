import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "gatsby-image";
import { Helmet } from "react-helmet"

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <title>The Home Page</title>
        </Helmet>
        <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
        <div style={{position: "relative", marginBottom: "1rem"}}>
          <Image fluid={this.props.data.banner.childImageSharp.fluid} />
          <button style={{position: "absolute", top: "50%", left: "5%"}}>Click me</button>
        </div>
        <p>
          What do I like to do? Lots of course but definitely enjoy building
          websites.
        </p>
        <Link to="/about">About</Link>
      </Layout>
    )
  }
}

export const bannerQuery = graphql`
query {
  banner: file(relativePath: {eq: "banner.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 1440) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;

export default Index
