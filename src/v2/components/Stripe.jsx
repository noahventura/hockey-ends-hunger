import React from 'react';

// the hem stripe of the white jersey: wide navy, thin white, navy, thin white, wide navy
const Stripe = ({ variant = 'hem', className = '', style }) => (
  <div className={`stripe stripe-${variant} ${className}`} style={style} aria-hidden="true">
    <span />
    <span />
    <span />
    <span />
    <span />
  </div>
);

export default Stripe;
