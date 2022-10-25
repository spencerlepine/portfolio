import React from 'react';
import { Link, graphql } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import PropTypes from 'prop-types';
import { Layout, Head } from '@components';
import LandingSection from '@styles/landingSection';

const TagsPage = ({ data, location }) => {
  const { allMarkdownRemark: { group } } = data;

  return (
    <Layout location={location}>
      <Head title={`Tags`} />

      <LandingSection>
        <h1>All Tags</h1>

        <h3>
          <span className="text-secondary">&larr;</span>
          <Link to="/blog" className="text-secondary">View all posts</Link>
        </h3>

        <div className="flex flex-col max-w-sm m-auto">
          {group.map(tag => (
            <Link to={`/blog/tags/${kebabCase(tag.fieldValue)}/`} key={tag.fieldValue} className="no-underline hover:underline">
              #{tag.fieldValue}{' '}
              <span >
                ({tag.totalCount})
              </span>
            </Link>
          ))}
        </div>
      </LandingSection>
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
