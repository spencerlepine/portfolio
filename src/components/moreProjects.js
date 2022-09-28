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
            thumbnail {
              childImageSharp {
                fluid(quality: 100, maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            slug
            isFeatured
            showInProjects
          }
          html
        }
      }
    }
  }
`);

  const filterProjects = ({ node: { frontmatter: meta } }) => (
    !meta.isFeatured && meta.tech && meta.showInProjects
  );

  const projectsToShow = data.projects.edges ? data.projects.edges.filter(filterProjects) : [];
  return (
    <LandingSection id="portfolio">
      <div className="text-center mx-auto max-w-4xl">
        <h2 className="text-title-text mt-6">More Projects</h2>

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

MoreProjects.propTypes = {
  hideViewAllBtn: PropTypes.bool,
};

export default MoreProjects;
