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

      <main className="m-auto overflow-hidden pr-2 md:pr-4 max-w-screen-lg w-11/12 bg-white py-3 p-10 break-normal">
        <span className="breadcrumb">
          <span className="arrow">&larr;</span>
          <Link to="/projects">All projects</Link>
        </span>

        <header className="flex">
          <h1 className="medium-heading text-blue-900 font-serif text-2xl my-5 font-bold">{title}</h1>
          <span className="ml-auto px-1 rounded text-navy-dark ml-auto">
            {github && (
              <a href={github} aria-label="GitHub Link" className="inline-block p-1 m-2 bg-blue-100 border-4 border-blue-300">
                GitHub Repository
              </a>
            )}
            {external && (
              <a href={external} aria-label="External Link" className="external inline-block p-1 m-2 bg-blue-100 border-4 border-blue-300">
                Demo
              </a>
            )}
          </span>
        </header>

        <p className="m-3">{description}</p>

        <div className="bg-gray-100 p-3 rounded-md mt-auto">
          {tech.length && (
            <ul className="project-tech-list w-auto flex flex-wrap">
              {tech.map((tech, i) => (
                <li key={i} className=" techStyles">
                  {tech}
                </li>
              ))}
            </ul>
          )}
        </div>

        {images.length > 0 && (
          <div className="project-image w-auto m-auto md:pb-8 border-8 border-gray-200">
            <Carousel dynamicHeight autoPlay centerMode>
              {images.map((imageSrc, i) => (
                <a href={external || github} className="m-auto w-full" key={i}>
                  <img src={imageSrc} alt="Project Screenshot"></img>
                </a>
              ))}
            </Carousel>
          </div>
        )}
        <div className="w-full prose blog-post text-gray-900 font-light tracking-wider leading-loose" dangerouslySetInnerHTML={{ __html: html }} />
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
          fileAbsolutePath: { regex: "/projects/" }
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
