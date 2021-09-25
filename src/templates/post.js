import React from 'react';
import { graphql, Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Layout } from '@components';

const PostTemplate = ({ data, location }) => {
  const { frontmatter, html } = data.markdownRemark;
  const { title, date, tags } = frontmatter;

  return (
    <Layout location={location}>
      <Helmet title={title} />

      <main className="m-auto overflow-hidden pr-2 md:pr-4 max-w-screen-lg w-11/12 bg-white py-3 p-10 break-normal">
        <span className="breadcrumb">
          <span className="arrow">&larr;</span>
          <Link to="/blog">All posts</Link>
        </span>

        <header>
          <h1 className="medium-heading text-blue-900 font-serif text-2xl my-5 font-bold">{title}</h1>
          <p className="subtitle text-blueGray-300">
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
                <Link key={i} to={`/blog/tags/${kebabCase(tag)}/`} className="tag p-1 break-all">
                  #{tag}
                </Link>
              ))}
          </p>
        </header>

        <div className="w-full prose blog-post text-gray-900 font-light tracking-wider leading-loose" dangerouslySetInnerHTML={{ __html: html }} />
      </main>
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
    markdownRemark(frontmatter: { slug: { eq: $path } }) {
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
