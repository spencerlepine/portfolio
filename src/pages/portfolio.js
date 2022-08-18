import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Layout, ProjectCard } from '@components';

const ProjectsPage = ({ location, data }) => {
  const projects = data.projects.edges ? data.projects.edges.filter(({ node }) => node.frontmatter.isFeatured && node.frontmatter.tech) : [];
  const hobbyProjects = data.projects.edges ? data.projects.edges.filter(({ node }) => !node.frontmatter.isFeatured && node.frontmatter.tech) : [];

  return (
    <Layout location={location}>
      <Helmet title="Portfolio" />

      <main className="m-auto m-4 bg-white p-4 max-w-5xl mt-3 min-h-1 rounded">
        <header>
          <h1 className="text-4xl m-auto w-max font-semibold">Portfolio</h1>
          <p className="text-xl m-auto w-max font-semibold">Software Engineering Applications</p>
        </header>

        <div className="m-auto w-max p-4">
          <ul className="m-auto">
            <>
              {projects.map(({ node }, i) => (
                <li key={node.frontmatter.date} className="content-center my-20">
                  <ProjectCard node={node} listIndex={i} />
                </li>
              ))}
            </>
          </ul>
        </div>

        <hr />

        <header>
          <h1 className="text-4xl m-auto w-max font-semibold">More Projects</h1>
        </header>

        <div className="m-auto w-max p-4">
          <ul className="m-auto">
            <>
              {hobbyProjects.map(({ node }, i) => (
                <li key={i} className="content-center my-12">
                  <ProjectCard node={node} listIndex={i} customTitleData={{
                    title: 'Hobby Project',
                    styleString: 'text-sm text-green-500',
                  }} />
                </li>
              ))}
            </>
          </ul>
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
