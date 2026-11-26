import React from 'react';
import { useFitText } from '../lib/useFitText';

// the page's h1: each line rises in on load, and the longest line is sized to fill its column
const FitTitle = ({ lines, max = 200, id = 'page-title', className = '' }) => {
  const ref = useFitText({ max });
  return (
    <div className="fit-title">
      <h1 id={id} ref={ref} className={`display fit-title__h ${className}`}>
        {lines.map((line, i) => (
          <span className="load-line" key={line}>
            <span style={{ '--i': i }}>{line}</span>
          </span>
        ))}
      </h1>
    </div>
  );
};

export default FitTitle;
