import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import FooterStyles from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer className={FooterStyles.footer}>
      Made With{" "}
      <span role="img" aria-label="love">
        ❤️
      </span>
      &nbsp;
      {"  "}
      by {data.site.siteMetadata.author}. &copy; {new Date().getFullYear()}
    </footer>
  )
}

export default Footer
