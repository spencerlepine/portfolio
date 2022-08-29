import React from 'react';
import { graphql, Link } from 'gatsby';
// import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Layout } from '@components';

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
  const { frontmatter, html } = data.markdown.edges[0].node;
  const { title, description, tech, github, external } = frontmatter;
  const images = extractImages(data.markdown);

  return (
    <Layout location={location}>
      <Helmet title={title} />

      <main >
        <span >
          <span >&larr;</span>
          <Link to="/portfolio">View Portfolio</Link>
        </span>

        <header >
          <h1 >{title}</h1>
          <span >
            {github && (
              <a href={github} aria-label="GitHub Link" >
                GitHub Repository
              </a>
            )}
            {external && (
              <a href={external} aria-label="External Link" >
                Demo
              </a>
            )}
          </span>
        </header>

        <p >{description}</p>

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
        </div>

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
      </main>
    </Layout >
  );
};

export default ProjectTemplate;

ProjectTemplate.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
};

export const postQuery = graphql`
  query($path: String!) {
     markdown: allMarkdownRemark(
        filter: {
          frontmatter: { slug: { eq: $path } }
          fileAbsolutePath: { regex: "/portfolio/" }
      }
      ) {
        edges {
          node {
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
          }
        }
      }
  }
`;
