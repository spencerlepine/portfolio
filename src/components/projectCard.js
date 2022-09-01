/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'gatsby';
import { Icon } from '@components/icons';
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

  const TitleLink = () => {
    if (external) {
      return (
        <Link to={external} target="_blank" className="no-underline"><h3 className="text-title-text">{title} <Icon name="External" customClass="h-6 text-primary-text mx-1 inline" /></h3></Link>
      );
    }

    return (
      <Link to={github} className="no-underline"><h3 className="text-title-text">{title}</h3></Link>
    );
  };
  return (
    <div className="text-left flex flex-wrap mx-auto justify-center">
      <div>
        {TitleLink()}

        <p className="text-primary-text max-w-sm pr-4">{description}</p>

        <BubbleLink linkPath={slug} color="brand" hasMargin>
          Learn More
        </BubbleLink>

        {github && (
          <BubbleLink linkPath={github} icon="GitHub" color="tertiary">
            Repository
          </BubbleLink>
        )}
      </div>

      <a href={external || github} target="_blank" aria-label="Project Link" rel="noreferrer" >
        <div className="max-w-sm ml-auto">
          <img src={image} style={{ zIndex: 0 }} alt="Project Screenshot" className=''></img>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
