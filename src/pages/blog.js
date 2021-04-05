import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout/Layout'
import Posts from '../components/Posts/Posts'

const Blog = ({ data }) => (
  <Layout>
    <h1>Blog</h1>
    <br />
    <Posts
      posts={data.allMdx.edges}
    />
  </Layout>
)

export const query = graphql`
  query {
    allMdx (sort: { fields: [fields___publishedAt], order: DESC }) {
      edges {
        next {
          frontmatter {
            title
            date
          }
        }
        previous {
          frontmatter {
            title
            date
          }
        }
        node {
          id
          frontmatter {
            title
            date
          }
          fields {
            publishedAt
            slug
          }
        }
      }
    }
  }
`

export default Blog