import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import BackgroundImage from "gatsby-background-image"
import { Helmet } from "react-helmet"
import styles from "./about.module.css"

export default props => (
  <React.Fragment>
    <Layout>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <p>We do like pie.</p>
      <Link to="/">Go Home</Link>
    </Layout>

    <BackgroundImage
      Tag="section"
      className={styles.banner}
      fluid={props.data.banner.childImageSharp.fluid}
      classId="kso"
    >
      <h1>What do you want to know about us?</h1>
      <button type="button" className={styles.button}>
        Click me
      </button>
    </BackgroundImage>
  </React.Fragment>
)

export const bannerQuery = graphql`
  query {
    banner: file(relativePath: { eq: "banner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440, maxHeight: 300, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
