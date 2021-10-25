import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Layout } from '@components';
// import { IconBookmark } from '@components/icons';

const BlogPage = ({ location, data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location} >
      <Helmet title="Blog" />

      <main>
        <header className="">
          <h1 className="text-xl m-auto w-fit-content p-4">sharing my knowledge of full-stack development</h1>
        </header>

        <ul>
          {posts.length > 0 &&
            posts.map(({ node }, i) => {
              const { frontmatter } = node;
              const { title, description, slug } = frontmatter;

              return (
                <article key={i} className="bg-white rounded p-3 max-w-md m-auto">
                  <div className="inner">
                    <Link to={slug} className="font-bold">

                      {/* <div className="inline float-left p-2 h-full">
                        <IconBookmark customClass="inline" />
                      </div> */}
                      <h5 className="title text-xl">
                        {title}
                      </h5>
                      <p className="desc font-light">{description}</p>
                    </Link>
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
            draft
          }
          html
        }
      }
    }
  }
`;
