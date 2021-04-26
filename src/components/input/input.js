import React from 'react';

export const TextInput = ({ value, onChange, className }) => {
  return (
    <input
      onChange={onChange}
      className={`textInput ${className}`}
      type="text"
      placeholder="Enter text"
      value={value}
    />
  );
};
