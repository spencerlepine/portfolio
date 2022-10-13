import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import LandingSection from '@styles/landingSection';

const extractImage = thumbnail => {
  try {
    const thumbnailData = thumbnail.childImageSharp.fluid.src;
    return thumbnailData;
  } catch {
    return 'http://cmsi-id.com/assets/product/15032016/pt-cahayatiara-mustika-scientific-indonesia_wrv9c_1073.png';
  }
};

const ArticleCard = ({ frontmatter: { slug, thumbnail, title, description }, customStyles }) => (
  <Link key={slug} rel="noopener noreferrer" to={slug} className={customStyles}>
    <img src={extractImage(thumbnail)} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
    <div className="space-y-2 lg:col-span-5">
      <h3 className="text-2xl font-semibold hover:underline text-title-text">{title}</h3>
      <p className="text-primary-text">{description}</p>
    </div>
  </Link>
);

const Articles = ({ posts }) => {
  const [firstArticle, ...remainingArticles] = posts;
  const firstArticleStyles = 'block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900 no-underline';
  const articleCardStyles = 'max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block no-underline';

  return (
    <LandingSection id="blog">
      {/* <div className="text-center mx-auto max-w-4xl"> */}
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 text-left">
        <ArticleCard frontmatter={firstArticle.node.frontmatter} customStyles={firstArticleStyles} />

        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {remainingArticles.length > 0 &&
            remainingArticles.map(({ node: { frontmatter } }) => (
              <ArticleCard frontmatter={frontmatter} customStyles={articleCardStyles} key={frontmatter.slug} />
            ))
          }
        </div>
      </div>
    </LandingSection >
  );

};

Articles.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default Articles;

