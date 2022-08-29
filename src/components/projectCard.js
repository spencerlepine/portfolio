/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'gatsby';
import { Icon } from '@components/icons';

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

  const { github, external, title, tech, description, slug } = frontmatter;

  const ImageColumn = () => (
    <div style={{ overflowY: 'clip', zIndex: 0 }}>
      <a href={external || github} aria-label="Project Link" >
        <img src={image} style={{ zIndex: 0 }} alt="Project Screenshot"></img>
      </a>
    </div>
  );

  const ProjectDetails = () => {

    const ProjectTitleLink = () => (
      <Link to={slug} >
        <h3 >{title}</h3>
      </Link>
    );

    const ProjectSourceLinks = () => (
      <div>
        {github && (
          <a href={github} aria-label="GitHub Link" >
            <Icon name="GitHub" />
          </a>
        )}
        {external && (
          <a href={external} aria-label="External Link" >
            <Icon name="External" />
          </a>
        )}
      </div>
    );

    return (
      <div>
        <ProjectTitleLink />
        <ProjectSourceLinks />

        <p>{description}</p>

        {tech.map((tech, i) => (
          <p

            key={i}>
            {tech}
          </p>
        ))}
      </div>
    );
  };

  return (
    <div>
      <ProjectDetails />
      <ImageColumn />
    </div>
  );
};

export default ProjectCard;
