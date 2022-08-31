import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Icon } from '@components/icons';

const colorPallete = {
  tertiary: {
    outlined: 'bg-primary text-tertiary border-tertiary',
    fill: 'bg-tertiary text-primary border-tertiary',
  },
  brand: {
    outlined: 'bg-primary text-button-primary border-button-primary',
    fill: 'bg-button-primary text-primary border-button-primary',
  },
  link: {
    outlined: 'bg-primary text-link-primary border-link-primary',
    fill: 'bg-link-primary text-primary border-link-primary',
  },
};


const BubbleLink = ({ isOutlined, linkPath, children, icon, color }) => {
  const colors = `${colorPallete[color][isOutlined ? 'outlined' : 'fill']}`;
  const bubbleStyles = `${colors} px-3 py-1 border-2 border-solid rounded-md no-underline`;
  const iconStyles = `${colors} h-6 mx-1 inline my-auto`;

  const OptIcon = iconName => (
    <>{iconName && <Icon name={iconName} customClass={iconStyles} />}</>
  );

  return (
    <Link to={linkPath} className={bubbleStyles}>
      {OptIcon(icon)} {children}
    </Link >
  );
};

BubbleLink.propTypes = {
  children: PropTypes.node.isRequired,
  isOutlined: PropTypes.bool,
  linkPath: PropTypes.string.isRequired,
  icon: PropTypes.string,
  color: PropTypes.oneOf(['tertiary', 'brand', 'link']).isRequired,
};

export default BubbleLink;
