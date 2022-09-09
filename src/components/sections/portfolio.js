import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { ProjectCard } from '@components';
import BubbleLink from '@styles/bubbleLink';
import LandingSection from '@styles/landingSection';

// const MAX_PROJECTS_SHOWN = 3;

const Projects = ({ hideViewAllBtn }) => {
  const data = useStaticQuery(graphql`
  query {
    projects: allMarkdownRemark(
  filter: {
    fileAbsolutePath: {regex: "/portfolio/" }
  frontmatter: {showInProjects: {ne: false } }
        }
  sort: {fields: [frontmatter___date], order: DESC }
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

  // const projectsToShow = data.projects.edges.filter(({ node }) => node.frontmatter.isFeatured && node.frontmatter.tech).slice(0, MAX_PROJECTS_SHOWN);
  // Manually show SquidShop, QuickCart, and Woofer
  const titleChoices = ['SquidShop Ecommerce', 'QuickCart', 'Atelier API'];
  const projectsToShow = data.projects.edges.filter(({ node }) => titleChoices.includes(node.frontmatter.title) && node.frontmatter.tech);

  return (
    <LandingSection id="portfolio">
      <div className="text-center mx-auto max-w-4xl py-20">
        <h2 className="text-title-text mt-6">Portfolio</h2>

        {!hideViewAllBtn && <BubbleLink linkPath='/portfolio' isOutlined color="link">View All</BubbleLink>}

        {projectsToShow &&
          projectsToShow.map(({ node }) => (
            <React.Fragment key={node.frontmatter.slug}>
              {node.frontmatter.tech && (
                <ProjectCard node={node} />
              )}
            </React.Fragment>
          ))
        }
      </div>
    </LandingSection>
  );
};

Projects.propTypes = {
  hideViewAllBtn: PropTypes.bool,
};

export default Projects;
