import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import LandingSection from '@styles/landingSection';

const Articles = ({ posts }) => (
  <LandingSection id="blog">
    <h2 className="text-title-text">Sharing my knowledge of full-stack development</h2>

    <ul className="max-w-lg mx-auto">
      {posts.length > 0 &&
        posts.map(({ node }) => {
          const { frontmatter } = node;
          const { title, description, slug } = frontmatter;

          return (
            <div key={slug} className="text-left border-4 rounded-tl-xl rounded-tr-xl rounded-bl-xl p-4 my-4">
              <Link to={slug} className="no-underline" >
                <h4 className="no-underline text-xl">
                  {title}
                </h4>
                <p className="text-primary-text no-underline">{description}</p>
              </Link>
            </div>
          );
        })}
    </ul>
  </LandingSection>
);

Articles.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default Articles;

