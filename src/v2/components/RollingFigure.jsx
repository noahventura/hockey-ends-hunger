import React from 'react';

// each digit rolls up to its value once, a beat apart, when useReveal sees it.
// The strips are drawn by CSS (::before), so the only text in the page is the real number.
const RollingFigure = ({ value, className = '' }) => {
  let col = 0;
  return (
    <span className={`roll ${className}`}>
      <span className="sr-only">{value}</span>
      <span className="roll__digits" aria-hidden="true">
        {[...value].map((ch, k) =>
          /\d/.test(ch) ? (
            <span className="roll__col" key={k}>
              <span className="roll__strip" style={{ '--d': ch, '--i': col++ }} />
            </span>
          ) : (
            <span className="roll__sym" key={k} data-ch={ch} />
          ),
        )}
      </span>
    </span>
  );
};

export default RollingFigure;
