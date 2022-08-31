import React from 'react';
import { graphql, Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Layout } from '@components';
import LandingSection from '@styles/landingSection';

const PostTemplate = ({ data, location }) => {
  const { frontmatter, html } = data.markdownRemark;
  const { title, date, tags } = frontmatter;

  return (
    <Layout location={location}>
      <Helmet title={title} />

      <LandingSection id="blogPost">
        <span >
          <span >&larr;</span>
          <Link to="/blog">All posts</Link>
        </span>

        <header>
          <h1 >UNDER CONSTRUCTION</h1>{/* TOOD */}
          <h1 >{title}</h1>
          <p >
            <time>
              {new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span>&nbsp;&mdash;&nbsp;</span>
            {tags &&
              tags.length > 0 &&
              tags.map((tag, i) => (
                <Link key={i} to={`/blog/tags/${kebabCase(tag)}/`} >
                  #{tag}
                </Link>
              ))}
          </p>
        </header>

        <div dangerouslySetInnerHTML={{ __html: html }} />
      </LandingSection>
    </Layout>
  );
};

export default PostTemplate;

PostTemplate.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { slug: { eq: $path } } fileAbsolutePath: { regex: "/posts/" }) {
      html
      frontmatter {
        title
        description
        date
        slug
        tags
      }
    }
  }
`;
