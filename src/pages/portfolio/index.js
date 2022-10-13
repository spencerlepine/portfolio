import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Layout } from '@components';
import AllPortfolioSection from '@components/sections/allPortfolio';
import MoreProjectsSection from '@components/sections/hobbyProjects';
import YoutubeShoutout from '@components/sections/youtube';

const ProjectsPage = ({ location }) => (
  <Layout location={location}>
    <Helmet title="Portfolio" />

    <AllPortfolioSection hideViewAllBtn />

    <YoutubeShoutout />

    <MoreProjectsSection hideViewAllBtn />
  </Layout >
);

ProjectsPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default ProjectsPage;

