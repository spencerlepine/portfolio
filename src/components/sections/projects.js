import React, { useState, useRef } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Icon } from '@components/icons';

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      projects: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/projects/" }
          frontmatter: { showInProjects: { ne: false } }
        }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              tech
              github
              external
              description
            }
          }
        }
      }
    }
  `);

  const [showMore, setShowMore] = useState(false);
  const revealTitle = useRef(null);
  const revealArchiveLink = useRef(null);

  const GRID_LIMIT = 6;
  const projects = data.projects.edges.filter(({ node }) => node);
  const firstSix = projects.slice(0, GRID_LIMIT);
  const projectsToShow = showMore ? projects : firstSix;

  const projectInner = node => {
    const { frontmatter } = node;
    const { github, external, title, tech, description } = frontmatter;

    return (
      <div className="bg-gray border-solid border-4 border-gray-600 p-3 w-80 m-3">
        <header>
          <div className="flex p-3">
            <h3 className="project-title text-xl inline-block">
              <a href={external} className="text-purple-900 my-1">
                {title}
              </a>
            </h3>
            {github && (
              <a href={github} aria-label="GitHub Link" className="inline-block pl-3">
                <Icon name="GitHub" customClass="" />
              </a>
            )}
            {external && (
              <a href={external} aria-label="External Link" className="external inline-block pl-3">
                <Icon name="External" customClass="" />
              </a>
            )}
          </div>

          <div className="project-description p-3">
            <p className="text-charcoal">
              {description}
            </p>
          </div>
        </header>

        <footer>
          {tech && (
            <ul className="project-tech-list">
              {tech.map((tech, i) => (
                <li
                  className="whitespace-nowrap w-min px-2 py-1 block sm:inline-block mx-3 my-1 text-navy-dark m-5 border-solid border-4 border-gray-300"
                  key={i}>
                  {tech}
                </li>
              ))}
            </ul>
          )}
        </footer>
      </div>
    );
  };

  return (
    <section className="landing-section">
      <h2 ref={revealTitle} className="section-title">Other Projects</h2>

      <Link className="inline-link archive-link m-auto" to="/projects" ref={revealArchiveLink}>
        <p className="whitespace-nowrap w-min m-auto text-navy-medium">view all projects</p>
      </Link>

      <ul className="projects-grid flex flex-row flex-wrap justify-center">
        <>
          {projectsToShow &&
            projectsToShow.map(({ node }, i) => (
              <li key={i}>
                {projectInner(node)}
              </li>
            ))}
        </>
      </ul>

      {/* <button className="more-button" onClick={() => setShowMore(!showMore)}>
        Show {showMore ? 'Less' : 'More'}
      </button> */}
    </section>
  );
};

export default Projects;
