import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
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
              thumbnail {
                childImageSharp {
                  fluid(quality: 100, maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              slug
              isFeatured
            }
          }
        }
      }
    }
  `);

  const projectsToShow = data.projects.edges.filter(({ node }) => node.frontmatter.isFeatured && node.frontmatter.tech).slice(0, MAX_PROJECTS_SHOWN);

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <Link to={'/portfolio'} >View All</Link>

      {projectsToShow &&
        projectsToShow.map(({ node }) => (
          <React.Fragment key={node.frontmatter.slug}>
            {node.frontmatter.tech && (
              <ProjectCard node={node} />
            )}
          </React.Fragment>
        ))
      }
    </section >
  );
};

export default Projects;
