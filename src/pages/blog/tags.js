import React from 'react';
import { Link, graphql } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Layout } from '@components';

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
  location,
}) => (
  <Layout location={location}>
    <Helmet title="Tags" />

    <main className="min-w-min m-auto overflow-hidden pr-2 md:pr-4 max-w-2xl">
      <span className="w-fit-content text-lg">
        <span className="arrow">&larr;</span>
        <Link to="/blog">All posts</Link>
      </span>

      <h1 className="m-auto w-fit-content text-xl text-navy-medium">Tags</h1>
      <ul className="m-3 flex justify-around bg-white flex-wrap p-3">
        {group.map(tag => (
          <li key={tag.fieldValue} className="m-2 bg-blueGray-100 p-2">
            <Link to={`/blog/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue}{' '}
              <span className="count text-blueGray-400">
                ({tag.totalCount})
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  </Layout>
);

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
