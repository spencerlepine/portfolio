import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

function getStart(currentPage, numPages) {
  return numPages - currentPage;
}

export default function PageButtons({ pageContext }) {
  const { numPages, currentPage } = pageContext;
  if (!numPages || !currentPage) { return null; }

  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prev = currentPage === 2 ? '/blog' : `/blog/page/${currentPage - 1}`;
  const next = currentPage + 1;

  const start = getStart(currentPage, numPages);
  const nums = Array.from({ length: 5 }).map((_, i) => i + start);

  return (
    <div>
      <div>
        {!isFirst && (
          <span>
            <Link to={prev} rel="prev">
              Previous
            </Link>
          </span>
        )}
        <span>
          <ul>
            {nums.map(num => (
              <li key={num} className={num === currentPage ? 'num-active' : ''}>
                <Link to={num === 1 ? '/blog' : `/blog/page/${num}`}>{num}</Link>
              </li>
            ))}
          </ul>
        </span>
        {!isLast && (
          <span>
            <Link to={`/blog/page/${next}`} rel="next">
              Next
            </Link>
          </span>
        )}
      </div>
    </div>
  );
}

PageButtons.propTypes = {
  pageContext: PropTypes.object,
};