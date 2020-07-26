import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact Me</h1>
      <p>
        Best way to catch up is twitter, So catch me up{" "}
        <a href="https://twitter.com/coder_mj" target="_blank" rel="noreferrer">
          @coder_mj
        </a>{" "}
        on twitter.
      </p>
    </Layout>
  )
}

export default ContactPage
