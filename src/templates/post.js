import React from 'react';
import { graphql, Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import PropTypes from 'prop-types';
import { Layout, Head } from '@components';
import LandingSection from '@styles/landingSection';
import NotFoundPage from '@pages/404';


const extractImage = thumbnail => {
  try {
    const thumbnailData = thumbnail.childImageSharp.fluid.src;
    return thumbnailData;
  } catch {
    return 'http://cmsi-id.com/assets/product/15032016/pt-cahayatiara-mustika-scientific-indonesia_wrv9c_1073.png';
  }
};

const ArticleCard = ({ frontmatter: { slug, thumbnail, title, description, date }, customStyles }) => (
  <Link key={slug} rel="noopener noreferrer" to={slug} className={customStyles}>
    <div className="space-y-2 col-span-8 text-left">
      <time className="text-primary-text">
        {new Date(date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </time>
      <h3 className="text-2xl font-semibold hover:underline text-title-text">{title}</h3>
      <p className="text-primary-text font-normal">{description}</p>
    </div>
    <img src={extractImage(thumbnail)} alt="" className="object-cover h-24 col-span-4 rounded sm:h-96 dark:bg-gray-500" />
    <hr className="col-span-12" />
  </Link>
);

ArticleCard.propTypes = {
  frontmatter: PropTypes.object.isRequired,
  customStyles: PropTypes.string,
};

const PostTemplate = ({ data, location }) => {
  if (!(data && data.markdownRemark)) {
    return <NotFoundPage location={location} />;
  }

  const relatedArticlesData = data.allMarkdownRemark.edges;
  const postData = data.markdownRemark;
  const { frontmatter, html } = postData;
  const { title, date, tags, slug, description } = frontmatter;
  const postStyles = 'text-left max-w-2xl mx-auto text-primary-text';

  return (
    <Layout location={location}>
      <Head title={title} description={description} />

      <LandingSection>
        <header className="text-left max-w-2xl mx-auto text-secondary">
          <span className="text-left my-8">
            <span >&larr;</span>
            <Link to="/blog" className="text-secondary">All posts</Link>
          </span>

          <h1 className="text-title-text mt-4">{title}</h1>
          <time>
            {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <p>
            {tags &&
              tags.length > 0 &&
              tags.map((tag, i) => (
                <Link key={i} to={`/blog/tags/${kebabCase(tag)}/`} className="m-1 text-tertiary-text">
                  #{tag}
                </Link>
              ))}
          </p>
        </header>

        <div className={postStyles} dangerouslySetInnerHTML={{ __html: html }} />
      </LandingSection>


      <LandingSection>
        <div className="mt-4 max-w-2xl mx-auto text-secondary">
          <h2 className="text-left text-title-text">Read more</h2>
          <hr />
          <div className="">
            {relatedArticlesData.length > 0 &&
              relatedArticlesData.map(({ node: { frontmatter } }) => (
                <>
                  {frontmatter.slug === slug ? (
                    <></>
                  ) : (
                    <ArticleCard frontmatter={frontmatter} customStyles="block gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline grid grid-cols-12 dark:bg-gray-900 no-underline" key={frontmatter.slug} />
                  )}
                </>
              ))
            }
          </div>
        </div>
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
  query MyQuery($path: String!) {
    markdownRemark(frontmatter: { slug: { regex: $path } }) {
      html
      frontmatter {
        title
        description
        date
        slug
        tags
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" }, frontmatter: { draft: { ne: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            slug
            date
            draft
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