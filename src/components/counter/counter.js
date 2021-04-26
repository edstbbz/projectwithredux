import React from "react";
import styles from './counter.module.css'
export const Counter = ({ value, maxValue }) => {
  return (
    <span className={styles.counter}>
      {value}/{maxValue}
    </span>
  );
};