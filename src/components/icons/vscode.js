import React from 'react';
import PropTypes from 'prop-types';

const IconVSCode = ({ customClass }) => (
  <svg className={customClass} xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 234 235.1">
    <title>VSCode Icon</title>

    <style>{'.st0{fill:#0179cb}'}</style>
    <path className="st0" d="M83.3 143.9l-58 45.2L0 176.5V58.7L25.2 46l57.6 45.3L174 0l60 23.9v186.9l-59.7 24.3-91-91.2zm88.9 15.9V75.3l-54.6 42.3 54.6 42.2zM27.3 144.6L56 118.5 27.3 89.9v54.7z" />
  </svg>
);

IconVSCode.propTypes = {
  customClass: PropTypes.string,
};

export default IconVSCode;
