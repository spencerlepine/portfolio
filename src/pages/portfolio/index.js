import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Layout, Portfolio, YoutubeShoutout } from '@components';

const ProjectsPage = ({ location, data }) => (
  <Layout location={location}>
    <Helmet title="Portfolio" />

    <Portfolio projects={data.portfolioProjects.edges} sectionTitle="Portfolio" hideViewAllBtn />

    <YoutubeShoutout />

    <Portfolio projects={data.hobbyProjects.edges} sectionTitle="Hobby Projects" hideViewAllBtn />
  </Layout >
);

ProjectsPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default ProjectsPage;

export const pageQuery = graphql`
  query {
    portfolioProjects: allMarkdownRemark(
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
    hobbyProjects: allMarkdownRemark(
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
`;
