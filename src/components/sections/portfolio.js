import React from 'react';
import PropTypes from 'prop-types';
import { ProjectCard } from '@components';
import BubbleLink from '@styles/bubbleLink';
import LandingSection from '@styles/landingSection';

const PortfolioShowcase = ({ hideViewAllBtn, projects, sectionTitle }) => (
  <LandingSection id={sectionTitle.toLowerCase()}>
    <div className="text-center mx-auto max-w-4xl py-20">
      <h2 className="text-title-text mt-6">{sectionTitle}</h2>

      {!hideViewAllBtn && <BubbleLink linkPath='/portfolio' isOutlined color="link">View All</BubbleLink>}

      {projects &&
        projects.map(({ node }) => (
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

PortfolioShowcase.propTypes = {
  sectionTitle: PropTypes.string,
  hideViewAllBtn: PropTypes.bool,
  projects: PropTypes.array,
};

export default PortfolioShowcase;
