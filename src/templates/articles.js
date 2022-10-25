import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Layout, Head, Articles, PageButtons } from '@components';

const BlogListTemplate = ({ data, location, pageContext }) => {
  const posts = data.allMarkdownRemark.edges || [];

  return (
    <Layout location={location} >
      <Head title="Blog" description="Spencer Lepine sharing knowledge of software development and learning resources." />

      <Articles posts={posts} pageContext={pageContext} />

      <PageButtons pageContext={pageContext} />
    </Layout>
  );
};

export default BlogListTemplate;

BlogListTemplate.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
  pageContext: PropTypes.object,
};

export const pageQuery = graphql`
  query BlogList($limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" }, frontmatter: { draft: { ne: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            slug
            date
            draft
            thumbnail {
              childImageSharp {
                fluid(quality: 100, maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
