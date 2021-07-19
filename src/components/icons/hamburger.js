import React from 'react';
import PropTypes from 'prop-types';

const IconHamburger = ({ customClass }) => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" className={customClass}>
    <title>Hamburger</title>
    <path fill="currentColor" d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
  </svg>
);

IconHamburger.propTypes = {
  name: PropTypes.string.isRequired,
  customClass: PropTypes.string,
};

export default IconHamburger;
