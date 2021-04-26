import React, { useEffect, useState } from 'react';
import { Button } from '../../components/button/button';
import { Counter } from '../../components/counter/counter';
import { TextInput } from '../../components/input/input';
import styles from './loginPage.module.css';

export const LoginPage = () => {
  const MAX_VALUE = 10;
  const [value, setValue] = useState('');
  const [error, setError] = useState();
  const [disbaled, setDisabled] = useState(false);

  useEffect(() => {
      isValid(value)
  }, [value]);

  const isValid = (value) => {
    const counter = value.length;
    counter > MAX_VALUE || counter < 1 ? setDisabled(true) : setDisabled(false);
    counter > MAX_VALUE ? setError('error') : setError('');
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <TextInput
          className={error}
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <div className={styles.button_area}>
          <Counter value={value.length} maxValue={MAX_VALUE} />
          <Button disabled={disbaled}>Confirm</Button>
        </div>
      </div>
    </div>
  );
};
