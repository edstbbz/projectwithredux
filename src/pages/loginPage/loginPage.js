import React from 'react';
import { TextInput } from '../../components/input/input';
import styles from './loginPage.module.scss'

export const LoginPage = () => {

    return(
        <div className={styles.wrap}>
            <TextInput/>
        </div>
    )
}