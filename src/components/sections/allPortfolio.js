import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { ProjectCard } from '@components';
import BubbleLink from '@styles/bubbleLink';
import LandingSection from '@styles/landingSection';

const Projects = ({ hideViewAllBtn }) => {
  const data = useStaticQuery(graphql`
    query {
      projects: allMarkdownRemark(
        filter: { 
          fileAbsolutePath: { regex: "/portfolio/" }
          frontmatter: { featureSection: { regex: "/(landing)|(portfolio)/"  } }
        }
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
              thumbnail {
                childImageSharp {
                  fluid(quality: 100, maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              slug
              featureSection
            }
          }
        }
      }
    }
  `);

  return (
    <LandingSection id="portfolio">
      <div className="text-center mx-auto max-w-4xl">
        <h2 className="text-title-text mt-0">Portfolio</h2>

        {!hideViewAllBtn && <BubbleLink linkPath='/portfolio' isOutlined color="link">View All</BubbleLink>}

        {data.projects.edges &&
          data.projects.edges.map(({ node }) => (
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
