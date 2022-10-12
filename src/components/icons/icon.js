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
  IconMeeting,
  IconTwitter,
  IconTwitterSquare,
  IconHamburger,
  IconYouTube,
  IconEmail,
  IconJavaScript,
  IconNodeJS,
  IconReact,
  IconTailwindCSS,
  IconHTML,
  IconCSS,
  IconExpress,
  IconJest,
  IconCypress,
  IconEC2,
  IconDocker,
  IconGit,
  IconVSCode,
  IconOSX,
  IconFirebase,
  IconSQL,
  IconGitHubActions,
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
    case 'LinkedinSquare':
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
    case 'JavaScript':
      return IconJavaScript;
    case 'NodeJS':
      return IconNodeJS;
    case 'React':
      return IconReact;
    case 'TailwindCSS':
      return IconTailwindCSS;
    case 'HTML':
      return IconHTML;
    case 'CSS':
      return IconCSS;
    case 'Express':
      return IconExpress;
    case 'Jest':
      return IconJest;
    case 'Cypress':
      return IconCypress;
    case 'EC2':
      return IconEC2;
    case 'Docker':
      return IconDocker;
    case 'Git':
      return IconGit;
    case 'VSCode':
      return IconVSCode;
    case 'OSX':
      return IconOSX;
    case 'Firebase':
      return IconFirebase;
    case 'SQL':
      return IconSQL;
    case 'GitHubActions':
      return IconGitHubActions;
    case 'Meeting':
      return IconMeeting;
    default:
      return IconExternal;
  }
};

const WrappedIcon = props => {
  const IconSVG = GetIcon(props.name);

  return <IconSVG customClass={props.customClass} />;
};

WrappedIcon.propTypes = {
  name: PropTypes.string.isRequired,
  customClass: PropTypes.string,
};

export default WrappedIcon;
