import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Icon } from '@components/icons';

const colorPalette = {
  tertiary: {
    outlined: 'bg-primary text-tertiary border-tertiary',
    fill: 'bg-tertiary text-white border-tertiary',
  },
  brand: {
    outlined: 'bg-none text-secondary border-secondary',
    fill: 'bg-secondary text-primary border-secondary',
  },
  button: {
    outlined: 'bg-primary text-button-primary border-button-primary',
    fill: 'bg-button-primary text-primary border-button-primary',
  },
  link: {
    outlined: 'bg-primary text-link-primary border-link-primary',
    fill: 'bg-link-primary text-primary border-link-primary',
  },
  green: {
    outlined: 'bg-primary text-tertiary border-tertiary',
    fill: 'bg-green-600 text-white border-green-600',
  },
  readmore: {
    outlined: '',
    fill: 'bg-tertiary text-gray-400 opacity-50 border-none',
  },
};


const BubbleLink = ({ isOutlined, linkPath, children, icon, color, isLarger, hasMargin, hasHorizontalMargin }) => {
  const sizes = `${isLarger ? `px-6 py-3 rounded-2xl border-2 text-lg ${hasMargin ? 'mr-2' : ''}` : `px-5 py-2 border-2 rounded-xl ${hasMargin ? 'mr-2' : ''}`}`;
  const colors = `${colorPalette[color][isOutlined ? 'outlined' : 'fill']}`;
  const bubbleStyles = `${colors} ${sizes} border-solid no-underline truncate ${hasHorizontalMargin ? 'mx-1' : ''}`;

  const OptIcon = iconName => (<>{iconName && <Icon name={iconName} customClass={`${colors} h-6 mx-1 inline my-auto`} />}</>);

  return (
    <Link to={linkPath} className={bubbleStyles} target={linkPath.slice(0, 5) === 'https' ? '_blank' : ''}>
      {OptIcon(icon)} {children}
    </Link >
  );
};

BubbleLink.propTypes = {
  children: PropTypes.node.isRequired,
  isOutlined: PropTypes.bool,
  linkPath: PropTypes.string.isRequired,
  icon: PropTypes.string,
  color: PropTypes.oneOf(['tertiary', 'brand', 'link', 'button']).isRequired,
  isLarger: PropTypes.bool,
  hasMargin: PropTypes.bool,
  hasHorizontalMargin: PropTypes.bool,
};

export default BubbleLink;
