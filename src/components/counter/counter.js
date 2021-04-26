import React from "react";

export const Counter = ({ value, maxValue }) => {
  return (
    <span className="counter">
      {value}/{maxValue}
    </span>
  );
};