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

const ProjectCard = ({ node, listIndex, customTitleData }) => {
  const { frontmatter } = node;
  const image = extractImages(node);

  const { github, external, title, tech, description, slug } = frontmatter;
  const leftColumn = (listIndex + 1) % 2 === 0 ? 'image' : 'details';
  const imageAlign = (listIndex + 1) % 2 === 0 ? 'left' : 'right';
  const customTitle = (customTitleData && customTitleData.title) ? customTitleData.title : 'Featured Project';
  const customTitleStyle = (customTitleData && customTitleData.styleString) ? customTitleData.styleString : `text-sm text-orange-400 ${leftColumn === 'image' ? 'ml-auto' : ''} mb-1`;

  const ImageColumn = () => (
    <div className="projectImage align-end opacity-50 hover:opacity-100 transition-opacity	 relative overflow-y-clip my-4" style={{ overflowY: 'clip', zIndex: 0 }}>
      <a href={external || github} aria-label="Project Link" className="inline-block p-1">
        <img className={`md:max-w-sm sm:max-w-xs xs:max-w-xs z-0 absolute ${imageAlign}-10`} src={image} style={{ zIndex: 0 }} alt="Project Screenshot"></img>
      </a>
    </div >
  );

  const ProjectDetails = () => {
    const alignment = leftColumn === 'image' ? 'text-right' : '';

    const ProjectTitleLink = () => (
      <Link to={slug} className="" target="_blank" rel="noreferrer">
        <h3 className="text-xl font-bold">{title}</h3>
      </Link>
    );
    const ProjectSourceLinks = () => (
      <div className={leftColumn !== 'image' ? 'ml-2' : 'mr-2'}>
        {github && (
          <a href={github} aria-label="GitHub Link" className="inline-block px-1">
            <Icon name="GitHub" customClass="" />
          </a>
        )}
        {external && (
          <a href={external} aria-label="External Link" className="external inline-block px-1">
            <Icon name="External" customClass="" />
          </a>
        )}
      </div>
    );

    return (
      <div className={`projectDetails max-w-sm ${alignment} sm:text-left xs:text-left lg:${alignment} md:${alignment}`} style={{ zIndex: 99, minHeight: '17em' }}>
        <header className="p-1">
          <div className="grid">
            <h6 className={customTitleStyle}>{customTitle}</h6>

            <div className={`flex ${leftColumn === 'image' ? 'ml-auto' : ''}`}>
              {leftColumn === 'details' ? <ProjectTitleLink /> : <ProjectSourceLinks />}
              {leftColumn === 'details' ? <ProjectSourceLinks /> : <ProjectTitleLink />}
            </div>
          </div>
        </header>

        <div className="projectDesc p-3 bg-navy-dark z-10 rounded-md border-2 border-navy-dark">
          <p className="text-sm text-gray-300">{description}</p>
        </div>

        <div className={`projectTechnologies max-w-sm ${alignment ? 'ml-auto' : ''}`} style={{ maxWidth: '75%' }}>
          {tech.map((tech, i) => (
            <p
              className="whitespace-nowrap w-min block sm:inline-block xs:inline-block m-1 text-navy-medium p-0.5 text-sm"
              key={i}>
              {tech}
            </p>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      {leftColumn === 'details' ? <ProjectDetails /> : <ImageColumn />}
      {leftColumn === 'details' ? <ImageColumn /> : <ProjectDetails />}
    </div >
  );
};

export default ProjectCard;
