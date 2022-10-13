import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Layout } from '@components';
import PortfolioSection from '@components/sections/portfolio';
import MoreProjectsSection from '@components/sections/moreProjects';

const ProjectsPage = ({ location }) => (
  <Layout location={location}>
    <Helmet title="Portfolio" />


    <PortfolioSection hideViewAllBtn />
    <MoreProjectsSection hideViewAllBtn />
  </Layout >
);

ProjectsPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default ProjectsPage;

export const pageQuery = graphql`
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
          }
          html
        }
      }
    }
  }
`;
