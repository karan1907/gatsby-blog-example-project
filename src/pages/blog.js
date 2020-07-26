import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Head from "../components/head"
import Layout from "../components/layout"
import PostsStyles from "./blog.module.scss"

const BlogPage = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           frontmatter {
  //             title
  //             date
  //           }
  //           fields {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Blog" />
      <h1>
        All of your blogs will be fetched here{" "}
        <span role="img" aria-label="smile">
          😃
        </span>
      </h1>
      <ol className={PostsStyles.posts}>
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li className={PostsStyles.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
      <p>
        Wanna collaborate? <Link to="/contact">Contact Me.</Link>
      </p>
    </Layout>
  )
}

export default BlogPage
