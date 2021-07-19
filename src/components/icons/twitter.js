import React from 'react';
import PropTypes from 'prop-types';

const IconTwitter = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 700 700">
    <title>Twitter Link</title>

  </svg>
);

IconTwitter.propTypes = {
  name: PropTypes.string.isRequired,
  customClass: PropTypes.string,
};

export default IconTwitter;
