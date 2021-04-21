import * as React from "react";
import Layout from "../components/Layout/Layout"
import { Link, graphql } from "gatsby"

export default function IndexPage({ data }) {
  return (
    <Layout >
      <div>
        <title>Spencer Lepine | Full Stack Developer</title>
        <h1>
          Hello,
          <br />
          <span>I'm Spencer Lepine </span>
          <span role="img" aria-label="Party popper emojis">
            🎉🎉🎉
          </span>
        </h1>
        <p>
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
