import React from 'react';
import PropTypes from 'prop-types';
import SkewWrapper from '@styles/SkewWrapper';

const LandingSection = ({ children, id, isSkewSection }) => {
  if (isSkewSection) {
    return (
      <SkewWrapper>
        <section id={id} className="prose lg:prose-xl text-center min-w-full bg-secondary" style={{ borderBottomRightRadius: '5em', borderTopLeftRadius: '5em' }}>
          {children}
        </section>
      </SkewWrapper>
    );
  }

  return (
    <section id={id} className="prose lg:prose-xl text-center min-w-full my-10">
      {children}
    </section>
  );
};

LandingSection.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  isSkewSection: PropTypes.bool,
};

export default LandingSection;
