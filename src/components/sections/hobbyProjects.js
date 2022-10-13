import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ProjectCard } from '@components';
import BubbleLink from '@styles/bubbleLink';
import LandingSection from '@styles/landingSection';
import PropTypes from 'prop-types';

const MoreProjects = ({ hideViewAllBtn }) => {
  const data = useStaticQuery(graphql`
    query {
      projects: allMarkdownRemark(
        filter: { 
          fileAbsolutePath: { regex: "/portfolio/" }
          frontmatter: { featureSection: { eq: "hobby" } }
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
        <h2 className="text-title-text mt-6">Hobby Projects</h2>

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

MoreProjects.propTypes = {
  hideViewAllBtn: PropTypes.bool,
};

export default MoreProjects;
