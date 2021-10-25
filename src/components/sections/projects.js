import React, { useRef } from 'react';
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

  // const [showMore, setShowMore] = useState(false);
  const revealTitle = useRef(null);
  const revealArchiveLink = useRef(null);

  // const GRID_LIMIT = 6;
  const projects = data.projects.edges.filter(({ node }) => node);
  // const firstSix = projects.slice(0, GRID_LIMIT);
  const projectsToShow = projects; // showMore ? projects : firstSix;

  const projectInner = node => {
    const { frontmatter } = node;
    const { github, external, title, tech, description } = frontmatter;

    const mainLink = external || github;

    const cardStyles = 'bg-blue-200 border-blue-100 border-4 p-1 rounded-md'; // "bg-indigo-50 border-indigo-100"
    const techStyles = 'bg-purple-400 whitespace-nowrap w-min block sm:inline-block m-1 text-purple-50 shadow-md p-1';

    return (
      <div className={`${cardStyles} relative h-auto border-solid w-80 m-auto h-full`}>
        <header className="p-1">
          <div className="flex flex-wrap">
            <a href={mainLink} className="project-title mr-3 p-0" target="_blank" rel="noreferrer">
              <h3 className="project-title text-xl inline-block p-0">
                {title}
              </h3>
            </a>
            <span className="ml-auto bg-blue-100 border-b-4 border-blue-300 px-1 rounded">
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
            </span>
          </div>
        </header >

        <div className="bg-blue-100 p-3 rounded-md mt-auto">
          <div className="project-description p-3">
            <p className="text-charcoal">
              {description}
            </p>
          </div>

          <div className="relative h-5/6">
            {tech && (
              <ul className="project-tech-list">
                {tech.map((tech, i) => (
                  <li
                    className={techStyles}
                    key={i}>
                    {tech}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div >
    );
  };

  return (
    <section className="landing-section">
      <h2 ref={revealTitle} className="section-title">Other Projects</h2>

      <Link className="inline-link archive-link m-auto" to="/projects" ref={revealArchiveLink}>
        <p className="whitespace-nowrap w-min m-auto text-navy-medium">view all projects</p>
      </Link>

      <ul className="projects-grid grid auto-rows-fr grid-flow-row md:grid-cols-2 auto-rows-fr w-max m-auto">
        <>
          {projectsToShow &&
            projectsToShow.map(({ node }, i) => (
              <li key={i} className="content-center m-2">
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
