import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Me</h1>
      <p>
        I am always coding if not then you can find me in Erangle (Pubg{" "}
        <span role="img" aria-label="tongue">
          😝
        </span>
        )
      </p>
      <p>
        Wanna collaborate? <Link to="/contact">Contact Me.</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
