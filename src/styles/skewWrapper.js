import React from 'react';
import PropTypes from 'prop-types';

const SkewWrapper = props => (
  <>
    <div className="skew skew-top ml-20">
      <svg className="w-full h-8 text-secondary md:h-12 lg:h-20" viewBox="0 0 10 10" preserveAspectRatio="none"><polygon fill="currentColor" points="0 10 11 0 11 11"></polygon></svg>
    </div>
    {props.children}
    <div className="skew skew-bottom mr-20">
      <svg className="w-full h-8 text-secondary md:h-12 lg:h-20" viewBox="0 0 10 10" preserveAspectRatio="none"><polygon fill="currentColor" points="0 0 10 0 0 10"></polygon></svg>
    </div>
  </>
);

SkewWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SkewWrapper;
