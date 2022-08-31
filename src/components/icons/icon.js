import React from 'react';
import PropTypes from 'prop-types';
import {
  IconBookmark,
  IconExternal,
  IconFolder,
  IconGitHub,
  IconGitHubSquare,
  IconLinkedin,
  IconLinkedinSquare,
  IconLogo,
  IconTwitter,
  IconTwitterSquare,
  IconHamburger,
  IconYouTube,
  IconEmail,
} from '@components/icons';

const GetIcon = name => {
  switch (name) {
    case 'Bookmark':
      return IconBookmark;
    case 'Email':
      return IconEmail;
    case 'External':
      return IconExternal;
    case 'Folder':
      return IconFolder;
    case 'GitHub':
      return IconGitHub;
    case 'GitHubSquare':
      return IconGitHubSquare;
    case 'Linkedin':
      return IconLinkedin;
    case 'LinkedinSqaure':
      return IconLinkedinSquare;
    case 'Logo':
      return IconLogo;
    case 'Twitter':
      return IconTwitter;
    case 'TwitterSquare':
      return IconTwitterSquare;
    case 'Hamburger':
      return IconHamburger;
    case 'YouTube':
      return IconYouTube;
    default:
      return IconExternal;
  }
};

const WrappedIcon = props => {
  const IconSVG = GetIcon(props.name);

  return <IconSVG styleProp={props.styleProp} />;
};

WrappedIcon.propTypes = {
  name: PropTypes.string.isRequired,
  styleProp: PropTypes.string,
};

export default WrappedIcon;
