import React from 'react';
import PropTypes from 'prop-types';
import {
  IconBookmark,
  IconExternal,
  IconFolder,
  IconGitHub,
  IconLinkedin,
  IconLogo,
  IconTwitter,
} from '@components/icons';

const Icon = ({ name, customClass }) => {
  switch (name) {
    case 'Bookmark':
      return <IconBookmark customClass={customClass} />;
    case 'External':
      return <IconExternal customClass={customClass} />;
    case 'Folder':
      return <IconFolder customClass={customClass} />;
    case 'GitHub':
      return <IconGitHub customClass={customClass} />;
    case 'Linkedin':
      return <IconLinkedin customClass={customClass} />;
    case 'Logo':
      return <IconLogo customClass={customClass} />;
    case 'Twitter':
      return <IconTwitter customClass={customClass} />;
    default:
      return <IconExternal customClass={customClass} />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  customClass: PropTypes.string,
};

export default Icon;
