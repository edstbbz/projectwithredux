import React from "react";
import styles from './button.module.css'
export const Button = ({ disabled, children }) => {
  return (
    <button disabled={disabled} className={styles.button} >
      {children || `Submit`}
    </button>
  );
};