import React from 'react';
import { graphql, Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import PropTypes from 'prop-types';
import { Layout, Head } from '@components';
import LandingSection from '@styles/landingSection';
import NotFoundPage from '@pages/404';
import '@styles/postStyles.css';
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon,
} from 'react-share';

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

const ShareArticleLinks = ({ slug, articleTitle }) => {
  const title = `${articleTitle} - `;
  const url = `spencerlepine.com${slug}`;

  return (
    <span className="flex float-left my-auto">
      <FacebookShareButton url={url} >
        <FacebookIcon size={36} round={true} />
      </FacebookShareButton>

      <TwitterShareButton url={url} title={title} via={'spencerlepine'}>
        <TwitterIcon size={36} round={true} />
      </TwitterShareButton>

      <LinkedinShareButton url={url} >
        <LinkedinIcon size={36} round={true} />
      </LinkedinShareButton>

      <RedditShareButton url={url} title={title} >
        <RedditIcon size={36} round={true} />
      </RedditShareButton>

      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon size={36} round={true} />
      </WhatsappShareButton>
    </span>
  );
};
ShareArticleLinks.propTypes = {
  slug: PropTypes.string.required,
  articleTitle: PropTypes.string.required,
  tags: PropTypes.array,
};

const NextArticleButton = ({ possibleNextArticle }) => {
  const nextArticleHyperlink = possibleNextArticle?.node?.frontmatter?.slug;
  const fullTitle = possibleNextArticle?.node?.frontmatter?.title;
  let nextArticleTitle = fullTitle.substring(0, 22);
  if (fullTitle.length > 22) {
    nextArticleTitle += '...';
  }

  return (
    <>
      {(nextArticleHyperlink && nextArticleTitle) && (
        <>
          <div className="flex ml-auto md:justify-end lg:mt-8">
            <a href={nextArticleHyperlink} className="flex items-center justify-between px-8 rounded-full py-1 bg-gray-400 hover:bg-gray-600 hover:text-black hover-transition-fast text-gray-800 no-underline">
              <span className="text-xs sm:text-sm md:text-base flex">
                <div className="flex flex-col">
                  <span className="mr-auto uppercase text-xs inline-block text-ink-light">
                    next article
                  </span>

                  <span>{nextArticleTitle}</span>
                </div>
                <span className="m-auto"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-circle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="text-2xl mt-1 ml-4 svg-inline--fa fa-chevron-circle-right fa-w-16 w-6"><path fill="currentColor" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z" className=""></path></svg></span>
              </span>
            </a>
          </div>
        </>
      )}
    </>
  );
};
NextArticleButton.propTypes = {
  possibleNextArticle: PropTypes.string,
};

const RelatedArticleSection = ({ moreArticles, slug }) => (
  <LandingSection>
    <div className="mt-4 max-w-2xl mx-auto text-secondary">
      <hr className="border-4 border-secondary bg-secondary mb-0" />
      <h2 className="text-left text-secondary mt-2">Read more</h2>
      <hr />
      <div className="">
        {moreArticles.length > 0 &&
          moreArticles.map(({ node: { frontmatter } }) => (
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
);
RelatedArticleSection.propTypes = {
  moreArticles: PropTypes.array,
  slug: PropTypes.string.required,
};

const PostTemplate = ({ data, location }) => {
  if (!(data && data.markdownRemark)) {
    return <NotFoundPage location={location} />;
  }

  const postData = data.markdownRemark;
  const { frontmatter, html } = postData;
  const { title, date, tags, slug, description, thumbnail } = frontmatter;

  const relatedArticlesData = data.allMarkdownRemark.edges;
  let nextArticle = null;
  let moreArticles = [];
  if (relatedArticlesData && relatedArticlesData[1]) {
    nextArticle = relatedArticlesData[1];
    moreArticles = relatedArticlesData.slice(2);
  }

  return (
    <Layout location={location}>
      <Head title={`${title} | @SpencerLepine - Software Engineer`} description={description} image={extractImage(thumbnail)} />

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

        <div
          className="not-prose text-left max-w-2xl mx-auto text-primary-text"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <div className="mt-8 max-w-2xl mx-auto flex items-center">
          <ShareArticleLinks slug={slug} articleTitle={title} tags={tags} />

          <NextArticleButton possibleNextArticle={nextArticle} />
        </div>

        <RelatedArticleSection moreArticles={moreArticles} slug={slug} />
      </LandingSection>
    </Layout >
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
        thumbnail {
          childImageSharp {
            fluid(quality: 100, maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" }, frontmatter: { draft: { ne: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 4
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