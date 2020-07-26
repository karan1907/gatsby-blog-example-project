import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
const HomePage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hi.</h1>
      <h2>
        I'm Jaspal Singh. I'm a fullstack web developer, living in Beautiful
        City Chandigarh.
      </h2>
      <p>
        Wanna collaborate? <Link to="/contact">Contact Me.</Link>
      </p>
    </Layout>
  )
}

export default HomePage
