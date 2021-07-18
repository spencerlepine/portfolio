import React, { useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Jobs = () => {
  const data = useStaticQuery(graphql`
    query {
      jobs: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/jobs/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              company
              location
              range
              url
            }
            html
          }
        }
      }
    }
  `);

  const jobsData = data.jobs.edges;
  const tabs = useRef([]);
  const revealContainer = useRef(null);

  return (
    <section id="jobs" ref={revealContainer} className="landing-section">
      <h2 className="section-title">Where I’ve Worked</h2>

      <div className="inner">
        <div>
          {jobsData &&
            jobsData.map(({ node }, i) => {
              const { company } = node.frontmatter;
              return (
                <button
                  key={i}
                  ref={el => (tabs.current[i] = el)}
                  id={`tab-${i}`}>
                  <span>{company}</span>
                </button>
              );
            })}
        </div>

        <div>
          {jobsData &&
            jobsData.map(({ node }, i) => {
              const { frontmatter, html } = node;
              const { title, url, company, range } = frontmatter;

              return (
                <div
                  key={i}
                  id={`panel-${i}`}>
                  <h3>
                    <span>{title}</span>
                    <span className="company">
                      &nbsp;@&nbsp;
                      <a href={url} className="inline-link">
                        {company}
                      </a>
                    </span>
                  </h3>

                  <p className="range">{range}</p>

                  <div dangerouslySetInnerHTML={{ __html: html }} />
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
