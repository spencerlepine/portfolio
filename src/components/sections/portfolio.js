import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ProjectCard } from '@components';
import BubbleLink from '@styles/bubbleLink';

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
    <section id="portfolio" className="prose lg:prose-xl text-center min-w-full">
      <h2 className="text-tertiary mt-6">Portfolio</h2>

      <BubbleLink linkPath='/portfolio' isOutlined color="link">View All</BubbleLink>

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
