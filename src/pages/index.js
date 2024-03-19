import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Layout, Head, Welcome, Contact, ExtraLinks } from '@components';

const LandingPage = ({ location }) => (
  <Layout location={location}>
    <Head title="Spencer Lepine - Software Engineer" />

    <Welcome />
    <ExtraLinks />
    <Contact />
  </Layout>
);

LandingPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default LandingPage;

export const pageQuery = graphql`
  query {
    projects: allMarkdownRemark(
      filter: { 
        fileAbsolutePath: { regex: "/portfolio/" }
        frontmatter: { featureSection: { eq: "landing" } }
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