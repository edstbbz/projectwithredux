import React from 'react';
import { TextInput } from '../../components/input/input';
import styles from './loginPage.module.css';

export const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <TextInput />
      </div>
    </div>
  );
};
