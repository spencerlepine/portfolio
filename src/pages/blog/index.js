import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Layout } from '@components';
import Articles from '@components/sections/articles';

const BlogPage = ({ location, data }) => (
  <Layout location={location} >

    <Helmet title="Blog" />

    <Articles posts={data.allMarkdownRemark.edges} />
  </Layout>
);

BlogPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default BlogPage;

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" }, frontmatter: { draft: { ne: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            slug
            date
            draft
          }
          html
        }
      }
    }
  }
`;
