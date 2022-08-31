/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'gatsby';
import BubbleLink from '@styles/bubbleLink';

const extractImages = node => {
  try {
    /*
    childImageSharp {
      gatsbyImageData(width: 700, formats: [AUTO, PNG])
    }
    */
    //
    const thumbnailData = node.frontmatter.thumbnail;
    const image = thumbnailData.childImageSharp.fluid.src;
    return image;
  } catch {
    return 'http://cmsi-id.com/assets/product/15032016/pt-cahayatiara-mustika-scientific-indonesia_wrv9c_1073.png';
  }
};

const ProjectCard = ({ node }) => {
  const { frontmatter } = node;
  const image = extractImages(node);

  const { github, external, title, description, slug } = frontmatter;

  return (
    <div className="max-w-lg text-left">
      <Link to={slug}><h3>{title}</h3></Link>

      <p className="text-primary-text">{description}</p>


      {github && (
        <BubbleLink linkPath={github} icon="GitHub" color="tertiary">
          GitHub
        </BubbleLink>
      )}
      {external && (
        <BubbleLink linkPath={external} icon="External" color="brand">
          Demo
        </BubbleLink>
      )}


      <div style={{ overflowY: 'clip', zIndex: 0 }}>
        <a href={external || github} aria-label="Project Link" >
          <img src={image} style={{ zIndex: 0 }} alt="Project Screenshot"></img>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
