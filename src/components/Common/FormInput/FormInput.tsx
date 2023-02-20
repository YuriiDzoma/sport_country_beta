import React from 'react';
import styles from './FormInput.module.scss';

import {InputProps} from './FormInput.types';


const FormInp: React.FC<InputProps> = ({ label, ...otherProps }) => {
  return(
      <div className={styles.formInput}>
        <input className={styles.input} { ...otherProps } type="text"/>
        {
          label && <label className={`${styles.label} ${otherProps.value.length ? styles.label__shrink : ''}`} htmlFor="">{ label }</label>
        }
      </div>
  )
}

export default FormInp;