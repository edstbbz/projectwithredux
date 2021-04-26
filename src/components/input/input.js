import React from 'react';
import styles from './input.module.css';

export const TextInput = ({ value, onChange, className }) => {
  return (
    <>
      <label className={styles.label} htmlFor='input'>Enter your name to continue:</label>
      <input
        onChange={onChange}
        className={`${styles.input} ${className}`}
        type="text"
        name='input'
        placeholder="Enter your name..."
        value={value}
      />
    </>
  );
};
