import React from 'react';

export const Button = ({ children, variant = 'primary', onClick, type = 'button' }) => (
  <button type={type} className={`btn btn-${variant}`} onClick={onClick}>
    {children}
  </button>
);