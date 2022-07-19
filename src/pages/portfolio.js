import React, { useRef } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Layout } from '@components';
import { Icon } from '@components/icons';

const ProjectsPage = ({ location, data }) => {
  const projects = data.allMarkdownRemark.edges;
  const revealTitle = useRef(null);
  const revealTable = useRef(null);
  const revealProjects = useRef([]);

  return (
    <Layout location={location}>
      <Helmet title="Projects" />

      <main className="m-auto m-4 bg-white p-4 max-w-5xl mt-3 min-h-1 rounded">
        <header ref={revealTitle}>
          <h1 className="text-4xl m-auto w-max font-semibold">Portfolio</h1>
          <p className="text-xl m-auto w-max font-semibold">Software Engineering Applications</p>
        </header>

        <div ref={revealTable} className="m-auto w-max p-4">
          <table>
            <thead>
              <tr>
                <th>Link</th>
                <th>Title</th>
                <th className="hidden md:block">Technologies</th>
              </tr>
            </thead>
            <tbody>
              {projects.length > 0 &&
                projects.map(({ node }, i) => {
                  const {
                    github,
                    external,
                    title,
                    tech,
                    slug,
                    description,
                  } = node.frontmatter;
                  return (
                    <>{tech && (
                      <tr key={i} ref={el => (revealProjects.current[i] = el)} className="bg-indigo-50 p-4 border-solid border-8 border-indigo-100 my-2">
                        <td className="links">
                          <div className="inline-block pl-3">
                            {github && (
                              <a href={github} aria-label="GitHub Link" className="inline-block px-1 ml-auto">
                                <Icon name="GitHub" />
                              </a>
                            )}
                            {external && (
                              <a href={external} aria-label="External Link" className="inline-block px-1">
                                <Icon name="External" />
                              </a>
                            )}
                          </div>
                        </td>

                        <td className="m-3">
                          <p className="project-title w-max mx-2">
                            <a href={slug}>{title}</a>
                          </p>
                        </td>

                        <td className="hidden md:block max-w-md overscroll-auto">
                          <p>{description}</p>
                          {tech && tech.length > 0 &&
                            tech.map((item, i) => (
                              <span
                                className="whitespace-nowrap w-min block sm:inline-block text-indigo-400 m-1 bg-gray-50 shadow-md p-1"
                                key={i}
                              >
                                {item}
                                {''}
                              </span>
                            ))}
                        </td>
                      </tr>
                    )}</>
                  );
                })}
            </tbody>
          </table>
        </div>
      </main>
    </Layout >
  );
};
ProjectsPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default ProjectsPage;

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/portfolio/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            date
            description
            title
            tech
            github
            external
            company
            slug
          }
          html
        }
      }
    }
  }
`;
