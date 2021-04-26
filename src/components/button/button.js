import React from "react";

export const Button = ({ disabled, children }) => {
  return (
    <button disabled={disabled} className="button">
      {children || `Submit`}
    </button>
  );
};