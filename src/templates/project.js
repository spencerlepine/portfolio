import React from 'react';
import { graphql, Link } from 'gatsby';
// import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import { Layout, Head } from '@components';
import BubbleLink from '@styles/bubbleLink';
import LandingSection from '@styles/landingSection';
import NotFoundPage from '@pages/404';

import { Carousel } from 'react-responsive-carousel';

const extractImages = imageEdges => {
  try {
    /*
    childImageSharp {
      gatsbyImageData(width: 700, formats: [AUTO, PNG])
    }
    */
    //

    const images = imageEdges.edges[0].node.frontmatter.screenshots.map(imageObj => imageObj.childImageSharp.fluid.src);
    return images;
  } catch {
    return [];
  }
};

const ProjectTemplate = ({ data, location }) => {
  if (!data.allMarkdownRemark.edges[0]) {
    // BUG: it is trying to build page for BOTH paths: "/blog/a-cool-post" , "/blog/a-cool-post/"
    return <NotFoundPage location={location} />;
  }

  const { frontmatter, html } = data.allMarkdownRemark.edges[0].node;
  // eslint-disable-next-line no-unused-vars
  const { title, description, tech, github, external } = frontmatter;
  const images = extractImages(data.allMarkdownRemark);

  return (
    <Layout location={location}>
      <Head title={title} description={description} />

      <LandingSection>
        <span >
          <span >&larr;</span>
          <Link to="/portfolio">View Portfolio</Link>
        </span>

        <header className="my-8">
          <h1 className="text-title-text">{title}</h1>
          <span >
            {github && (
              <BubbleLink linkPath={github} icon="GitHub" color="tertiary">
                Repository
              </BubbleLink>
            )}
            {external && (
              <BubbleLink linkPath={external} icon="External" color="brand" isOutline>
                Demo
              </BubbleLink>
            )}
          </span>
        </header>

        {/* 
        <div>
          {tech && tech.length && (
            <ul >
              {tech.map((tech, i) => (
                <li key={i} >
                  {tech}
                </li>
              ))}
            </ul>
          )}
        </div> */}

        <div className="text-left max-w-3xl mx-auto">
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
          <div dangerouslySetInnerHTML={{ __html: html }} />
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
            screenshots {
              childImageSharp {
                fluid(quality: 100, maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            tech
            github
            external
            description
            slug
          }
          fileAbsolutePath
        }
      }
    }
  }
`;
