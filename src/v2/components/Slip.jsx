import React from 'react';
import Edge from './Edge';

// a label, a dotted leader and a value on one line, the way a receipt or game sheet sets them
export const Row = ({ label, value, note }) => (
  <div className="row-wrap">
    <div className="row">
      <span className="row__label">{label}</span>
      <span className="row__dots" aria-hidden="true" />
      <span className="row__value">{value}</span>
    </div>
    {note && <p className="row__note small">{note}</p>}
  </div>
);

// a paper slip with a torn zigzag bottom edge
export const Slip = ({ children, className = '', edge = 'zigzag', ...rest }) => (
  <div className={`slip-wrap ${className}`} {...rest}>
    <div className="slip">{children}</div>
    <Edge kind={edge} />
  </div>
);

export const SlipGroup = ({ heading, children }) => (
  <div className="slip__group">
    <p className="slip__heading">{heading}</p>
    {children}
  </div>
);

export const SlipTotal = ({ label, value }) => (
  <div className="slip__total">
    <span>{label}</span>
    <span>{value}</span>
  </div>
);
