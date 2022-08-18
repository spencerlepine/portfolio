import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { ProjectCard } from '@components';

const MAX_PROJECTS_SHOWN = 2;

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      projects: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/portfolio/" }
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
              slug
            }
          }
        }
      }
    }
  `);

  const projectsToShow = data.projects.edges.filter(({ node }) => node).slice(0, MAX_PROJECTS_SHOWN + 1);

  return (
    <section className="landing-section">
      <div className="m-auto flex-column mt-4">
        <div className="w-auto relative max-w-2xl p-1 mt-2text-lg leading-relaxed text-blueGray-500 flex-1 m-auto">
          <div className="m-auto max-w-xl mb-10">
            <h2 className="m-auto w-fit uppercase px-7 py-2 text-blue-600 bg-blue-50 font-bold m-1 rounded-md text-2xl font-semibold flex">
              Portfolio

              <Link className="archive-link ml-auto" to="/portfolio">
                <p className="font-semibold text-navy-medium text-lg">veiw all</p>
              </Link>
            </h2>

          </div>

          <ul className="m-auto">
            <>
              {projectsToShow &&
                projectsToShow.map(({ node }, i) => (
                  <>
                    {node.frontmatter.tech && (
                      <li key={i} className="content-center my-12">
                        <ProjectCard node={node} listIndex={i} />
                      </li>
                    )}
                  </>
                ))}
            </>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
