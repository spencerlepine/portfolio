import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

// TODO, super messy file, hard to read

export default function PageButtons({ pageContext }) {
  const { numPages, currentPage } = pageContext;
  if (!numPages || !currentPage) { return null; }

  const Dots = () => <span className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">...</span>;

  const startingNums = [];
  for (let i = currentPage; i <= numPages && i < currentPage + 4; i++) {
    startingNums.push(i);
  }

  const lastPageNumbers = [];
  for (let i = numPages - 3; i < numPages; i++) {
    if (i > startingNums[startingNums.length - 1]) {
      lastPageNumbers.push(i);
    }
  }

  return (
    <div className="text-center my-4">
      <div className="isolate inline-flex -space-x-px rounded-md shadow-sm mx-auto" aria-label="Pagination">
        <Link to={currentPage <= 2 ? '/blog' : `/blog/page/${currentPage - 1}`} className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
          <span className="sr-only">Previous</span>
          {/* <!-- Heroicon name: mini/chevron-left --> */}
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
          </svg>
        </Link>

        {numPages <= 5 ? (
          <>
            {startingNums.map(num => (
              <Link to={num === 1 ? '/blog' : `/blog/page/${num}`} key={num} className={`relative z-10 inline-flex items-center border ${currentPage !== num ? 'border-gray-300 bg-white' : 'border-indigo-500 bg-indigo-50'} px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20`}>
                {num}
              </Link>
            ))}
          </>
        ) : (
          <>
            {startingNums.map(num => (
              <Link to={num === 1 ? '/blog' : `/blog/page/${num}`} key={num} className={`relative z-10 inline-flex items-center border ${currentPage !== num ? 'border-gray-300 bg-white' : 'border-indigo-500 bg-indigo-50'} px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20`}>
                {num}
              </Link>
            ))}
            {lastPageNumbers.length > 0 && (
              <>
                <Dots />
                {lastPageNumbers.map(num => (
                  <Link to={`/blog/page/${num}`} key={num} className={`relative z-10 inline-flex items-center border ${currentPage !== num ? 'border-gray-300 bg-white' : 'border-indigo-500 bg-indigo-50'} px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20`}>
                    {num}
                  </Link>
                ))}
              </>
            )}
          </>
        )}

        <Link to={currentPage === numPages ? `/blog/page/${numPages}` : `/blog/page/${currentPage + 1}`} className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
          <span className="sr-only">Next</span>
          {/* <!-- Heroicon name: mini/chevron-right --> */}
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

PageButtons.propTypes = {
  pageContext: PropTypes.object,
};