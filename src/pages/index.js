import * as React from "react";
import Layout from "../components/Layout/Layout"
import { Link, graphql } from "gatsby"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}


export default function IndexPage({ data }) {
  return (
    <Layout >
      <div style={{ ...pageStyles, margin: `3rem auto`, maxWidth: 600 }}>
        <title>Spencer Lepine | Full Stack Developer</title>
        <h1 style={headingStyles}>
          Hello,
          <br />
          <span style={headingAccentStyles}>I'm Spencer Lepine </span>
          <span role="img" aria-label="Party popper emojis">
            🎉🎉🎉
          </span>
        </h1>
        <p style={paragraphStyles}>
          a passionate Software Engineer
          <span role="img" aria-label="Sunglasses smiley emoji">
            😎
          </span>
        </p>

        <div>
          <h4>{data.allMdx.totalCount} Posts</h4>
          {data.allMdx.edges.map(({ node }) => (
            <div key={node.id}>
              <Link
                to={node.fields.slug}
              >
                <h3>
                  {node.frontmatter.title}{" "}
                  <span>
                    — {node.frontmatter.date}
                  </span>
                </h3>
                <p>{node.excerpt}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx (sort: { fields: [fields___publishedAt], order: DESC }) {
      edges {
        next {
          frontmatter {
            title
            date
            description
            tags
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
