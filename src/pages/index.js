import * as React from "react";
import Layout from "../components/Layout/Layout"
import PageLayout from "../components/PageLayout/PageLayout"
import PictureBlob from "../components/PictureBlob/PictureBlob";
import NameWelcome from "../components/NameWelcome/NameWelcome";
import PostWidget from "../components/PostWidget/PostWidget";

import { Link, graphql } from "gatsby"

export default function IndexPage({ data }) {
  return (
    <Layout >
      <PageLayout>
        <PictureBlob />

        <NameWelcome />

        <PostWidget allMdx={data.allMdx} />
      </PageLayout>
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