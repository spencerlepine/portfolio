import React from 'react';
import { Link, graphql } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import PropTypes from 'prop-types';
import { Layout, Head } from '@components';

// TODO
const TagsPage = ({ data, location }) => {
  const { allMarkdownRemark: { group } } = data;

  return (
    <Layout location={location}>
      <Head title="Tags" />

      <main >
        <span >
          <span >&larr;</span>
          <Link to="/blog">All posts</Link>
        </span>

        <h1>Tags</h1>

        <ul >
          {group.map(tag => (
            <li key={tag.fieldValue} >
              <Link to={`/blog/tags/${kebabCase(tag.fieldValue)}/`}>
                #{tag.fieldValue}{' '}
                <span >
                  ({tag.totalCount})
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
};

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired,
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
  location: PropTypes.object,
};

export default TagsPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000, filter: { frontmatter: { draft: { ne: true } } }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
