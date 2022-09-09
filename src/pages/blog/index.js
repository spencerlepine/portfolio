import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Layout } from '@components';
import LandingSection from '@styles/landingSection';

const BlogPage = ({ location, data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location} >

      <Helmet title="Blog" />

      <LandingSection id="blog">
        <h2 className="text-title-text">Sharing my knowledge of full-stack development</h2>

        <ul className="max-w-lg mx-auto">
          {posts.length > 0 &&
            posts.map(({ node }) => {
              const { frontmatter } = node;
              const { title, description, slug } = frontmatter;

              return (
                <div key={slug} className="text-left border-4 rounded-tl-xl rounded-tr-xl rounded-bl-xl p-4 my-4">
                  <Link to={slug} className="no-underline" >
                    <h4 className="no-underline text-xl">
                      {title}
                    </h4>
                    <p className="text-primary-text no-underline">{description}</p>
                  </Link>
                </div>
              );
            })}
        </ul>
      </LandingSection>
    </Layout>
  );
};

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
