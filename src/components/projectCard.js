/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'gatsby';
import { Icon } from '@components/icons';

const ProjectCard = ({ node, listIndex }) => {
  const { frontmatter } = node;
  const { github, external, title, tech, description, slug } = frontmatter;
  const leftColumn = listIndex % 2 === 1 ? 'details' : 'image';
  const imageAlign = listIndex % 2 !== 1 ? 'left' : 'right';

  const ImageColumn = () => (
    <div className="projectImage align-end opacity-50 relative overflow-y-clip" style={{ overflowY: 'clip', zIndex: 0 }}>
      <img className={`md:max-w-sm sm:max-w-xs xs:max-w-xs z-0 absolute ${imageAlign}-10`} src={'https://img.youtube.com/vi/7CqJlxBYj-M/0.jpg'} style={{ zIndex: 0 }} alt="Project Screenshot"></img>
    </div>
  );

  const ProjectDetails = () => {
    const alignment = leftColumn === 'image' ? 'text-right' : '';

    return (
      <div className={`projectDetails max-w-sm ${alignment} sm:text-left xs:text-left lg:${alignment} md:${alignment}`} style={{ zIndex: 99 }}>
        <header className="p-1">
          <div className="grid">
            <h6 className="text-sm text-orange-400">Featured Project</h6>

            <Link to={slug} className="" target="_blank" rel="noreferrer">
              <h3 className="text-xl font-bold">{title}</h3>
            </Link>
          </div>
        </header>

        <div className="projectDesc p-3 bg-navy-dark z-10 rounded-sm border-2 border-navy-dark">
          <p className="text-sm text-gray-200">{description}</p>
        </div>

        <div className={`projectTechnologies max-w-sm ${alignment ? 'ml-auto' : ''}`} style={{ maxWidth: '70%' }}>
          {tech.map((tech, i) => (
            <p
              className="whitespace-nowrap w-min block sm:inline-block xs:inline-block m-1 text-navy-medium p-1 text-sm"
              key={i}>
              {tech}
            </p>
          ))}
        </div>

        <div className="rounded text-navy-dark p-2">
          {github && (
            <a href={github} aria-label="GitHub Link" className="inline-block p-1">
              <Icon name="GitHub" customClass="" />
            </a>
          )}
          {external && (
            <a href={external} aria-label="External Link" className="external inline-block p-1">
              <Icon name="External" customClass="" />
            </a>
          )}
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
