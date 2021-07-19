import React from 'react';
import PropTypes from 'prop-types';

const IconExternal = ({ customClass }) => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" className={customClass}>
    <title>Extnernal Link</title>
    <g>
      <path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z" />
    </g>
  </svg>
);

IconExternal.propTypes = {
  customClass: PropTypes.string,
};

export default IconExternal;
