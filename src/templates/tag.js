import React from 'react';
import { Link, graphql } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import PropTypes from 'prop-types';
import { Layout, Head, Articles } from '@components';
import LandingSection from '@styles/landingSection';


const TagTemplate = ({ pageContext, data, location }) => {
  const { tag } = pageContext;
  const { edges } = data.allMarkdownRemark;

  return (
    <Layout location={location}>
      <Head title={`#${tag} Articles`} />

      <LandingSection>
        <h1>
          <span>#{tag}</span> Articles
        </h1>

        <h3>
          <span className="text-secondary">&larr;</span>
          <Link to="/blog/tags" className="text-secondary">View all tags</Link>
        </h3>

        <h3>
          <span className="text-secondary">&larr;</span>
          <Link to="/blog" className="text-secondary">View all posts</Link>
        </h3>

        <Articles posts={edges} pageContext={{ currentPage: 1 }} />
      </LandingSection>
    </Layout>
  );
};

export default TagTemplate;

TagTemplate.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired,
      ),
    }),
  }),
  location: PropTypes.object,
};

export const pageQuery = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            description
            date
            slug
            tags
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
