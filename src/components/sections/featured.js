import React, { useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Icon } from '@components/icons';

const Featured = () => {
  const data = useStaticQuery(graphql`
    {
      featured: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/featured/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              cover {
                childImageSharp {
                  gatsbyImageData(width: 700, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                }
              }
              tech
              github
              external
              description
            }
          }
        }
      }
    }
  `);

  const featuredProjects = data.featured.edges.filter(({ node }) => node);
  const revealTitle = useRef(null);
  const revealProjects = useRef([]);

  return (
    <section id="projects" className="landing-section">
      <h2 className="section-title m-2" ref={revealTitle}>
        Featured Project
      </h2>

      <ul>
        {featuredProjects &&
          featuredProjects.map(({ node }, i) => {
            const { frontmatter } = node;
            const { external, title, tech, github, cover, description } = frontmatter;
            const image = getImage(cover);

            return (
              <li key={i} ref={el => (revealProjects.current[i] = el)}>
                <div className="project-content relative">
                  <div>
                    <div className="project-image w-auto m-auto md:pb-8">
                      <a href={external ? external : github ? github : '#'} className="m-auto w-full">
                        <GatsbyImage image={image} alt={title} className="img m-auto md:ml-40 md:mr-4" />
                      </a>
                    </div>

                    <div className="project-details bg-navy-dark md:absolute md:-bottom-2 md:rounded-lg p-2">
                      <div className="flex p-3">
                        <h3 className="project-title text-xl inline-block">
                          <a href={external} className="text-navy-medium my-1 bg-gray-900 p-1 rounded font-bold">
                            {title}
                          </a>
                        </h3>
                        {github && (
                          <a href={github} aria-label="GitHub Link" className="inline-block pl-3">
                            <Icon name="GitHub" customClass="text-white" />
                          </a>
                        )}
                        {external && (
                          <a href={external} aria-label="External Link" className="external inline-block pl-3">
                            <Icon name="External" customClass="text-white" />
                          </a>
                        )}
                      </div>

                      <div className="project-description p-3">
                        <p className="text-gray-300">
                          {description}
                        </p>
                      </div>

                      {tech.length && (
                        <ul className="project-tech-list w-auto flex flex-wrap">
                          {tech.map((tech, i) => (
                            <li key={i} className="whitespace-nowrap w-min p-1 block sm:inline-block mx-3 my-1 text-navy-light">
                              {tech}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </section >
  );
};

export default Featured;
