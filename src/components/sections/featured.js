import React, { useRef } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
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
              slug
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
            const { external, title, tech, github, cover, description, slug } = frontmatter;
            const image = getImage(cover);

            const cardStyles = 'bg-blue-100 border-blue-100 border-4 p-1 rounded-md';
            // { `${cardStyles} relative h-auto border-solid w-80 m-auto h-full` }
            return (
              <li key={i} ref={el => (revealProjects.current[i] = el)}>
                <div className="project-content relative">
                  <div>
                    <div className="project-image w-auto m-auto md:pb-8">
                      <a href={external ? external : github ? github : '#'} className="m-auto w-full">
                        <GatsbyImage image={image} alt={title} className="img m-auto md:ml-40 md:mr-4" />
                      </a>
                    </div>

                    <div className={`${cardStyles} project-details bg-indigo-50 md:absolute md:-bottom-2 md:rounded-lg p-2 border-solid border-4 border-indigo-100`}>
                      <div className="flex p-3">
                        <h3 className="project-title text-xl inline-block">
                          <Link to={slug} className="project-title">
                            {title}
                          </Link>
                        </h3>
                        <span className="ml-4 bg-blue-200 border-b-4 border-blue-300 px-1 rounded text-navy-dark">
                          {github && (
                            <a href={github} aria-label="GitHub Link" className="inline-block m-1">
                              <Icon name="GitHub" customClass="" />
                            </a>
                          )}
                          {external && (
                            <a href={external} aria-label="External Link" className="external inline-block p-1">
                              <Icon name="External" customClass="" />
                            </a>
                          )}
                        </span>
                      </div>

                      <div className="bg-gray-100 p-3 rounded-md mt-auto">
                        <div className="project-description p-3">
                          <p className="text-charcoal">
                            {description}
                          </p>
                        </div>

                        {tech.length && (
                          <ul className="project-tech-list w-auto flex flex-wrap">
                            {tech.map((tech, i) => (
                              <li key={i} className=" techStyles">
                                {tech}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
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
