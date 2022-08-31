import React from 'react';
import PropTypes from 'prop-types';

const IconFolder = ({ customClass }) => (
  <svg className={customClass} xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 700 700">
    <title>Folder Link</title>

  </svg>
);

IconFolder.propTypes = {
  customClass: PropTypes.string,
};

export default IconFolder;
