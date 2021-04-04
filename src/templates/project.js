import React from 'react';
import { graphql, Link } from 'gatsby';
// import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import { Layout, Head } from '@components';
import BubbleLink from '@styles/bubbleLink';
import LandingSection from '@styles/landingSection';
import NotFoundPage from '@pages/404';

import { Carousel } from 'react-responsive-carousel';
import '@styles/postStyles.css';

const extractImage = image => {
  try {
    const imageData = image.childImageSharp.fluid.src;
    return imageData;
  } catch {
    return '';
  }
};

// const extractImages = frontmatter => {
//   try {
//     const images = frontmatter.screenshots.map(imageObj => imageObj.childImageSharp.fluid.src);
//     return images;
//   } catch {
//     return [];
//   }
// };

const ProjectTemplate = ({ data, location }) => {
  if (!data.allMarkdownRemark.edges[0]) {
    // BUG: it is trying to build page for BOTH paths: "/blog/a-cool-post" , "/blog/a-cool-post/"
    return <NotFoundPage location={location} />;
  }

  const { frontmatter, html } = data.allMarkdownRemark.edges[0].node;
  const { title, description, github, external, thumbnail } = frontmatter;
  const images = [] // extractImages(frontmatter);

  return (
    <Layout location={location}>
      <Head title={`${title} | @SpencerLepine - Software Engineer`} description={description} image={extractImage(thumbnail)} />

      <LandingSection>
        <span>
          <span className="text-title-text">&larr;</span>
          <Link to="/portfolio" className="text-title-text">View Portfolio</Link>
        </span>

        <header className="my-8 max-w-3xl mx-auto text-left flex">
          <h1 className="text-title-text my-0 mr-auto">{title}</h1>

          {github && (
            <BubbleLink linkPath={github} icon="GitHub" color="tertiary" hasHorizontalMargin>
              Repository
            </BubbleLink>
          )}
          {external && (
            <BubbleLink linkPath={external} icon="External" color="green" isOutline hasHorizontalMargin>
              Demo
            </BubbleLink>
          )}
        </header>

        <div className="text-left max-w-3xl mx-auto text-primary-text">
          {images.length > 0 && (
            <div>
              <Carousel dynamicHeight autoPlay centerMode>
                {images.map((imageSrc, i) => (
                  <a href={external || github} key={i}>
                    <img src={imageSrc} alt="Project Screenshot"></img>
                  </a>
                ))}
              </Carousel>
            </div>
          )}
          <div
            className="not-prose text-left max-w-2xl mx-auto text-primary-text"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>

      </LandingSection>
    </Layout >
  );
};

export default ProjectTemplate;

ProjectTemplate.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
};

export const postQuery = graphql`
  query ($path: String!) {
    allMarkdownRemark(
      filter: {frontmatter: {slug: {regex: $path}}, fileAbsolutePath: {regex: "/portfolio/"}}
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            tech
            github
            external
            description
            slug
            thumbnail {
              childImageSharp {
                fluid(quality: 100, maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fileAbsolutePath
        }
      }
    }
  }
`;
