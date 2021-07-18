import React from 'react';
import { graphql, Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Layout } from '@components';
import { IconBookmark } from '@components/icons';

const BlogPage = ({ location, data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location}>
      <Helmet title="Blog" />

      <main>
        <header>
          <h1 className="big-heading">Blog</h1>
          <p className="subtitle">
            a collection of articles and posts
          </p>
        </header>

        <ul>
          {posts.length > 0 &&
            posts.map(({ node }, i) => {
              const { frontmatter } = node;
              const { title, description, slug, date, tags } = frontmatter;
              const formattedDate = new Date(date).toLocaleDateString();

              return (
                <article key={i}>
                  <div className="post__inner">
                    <header>
                      <div className="post__icon">
                        <IconBookmark />
                      </div>
                      <h5 className="post__title">
                        <Link to={slug}>{title}</Link>
                      </h5>
                      <p className="post__desc">{description}</p>
                    </header>

                    <footer>
                      <span className="post__date">{formattedDate}</span>
                      <ul className="post__tags">
                        {tags.map((tag, i) => (
                          <li key={i}>
                            <Link to={`/blog/tags/${kebabCase(tag)}/`} className="inline-link">
                              #{tag}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </footer>
                  </div>
                </article>
              );
            })}
        </ul>
      </main>
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
      filter: { fileAbsolutePath: { regex: "/posts/" }, frontmatter: { draft: { ne: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            slug
            date
            tags
            draft
          }
          html
        }
      }
    }
  }
`;
