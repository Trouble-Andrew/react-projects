import React from 'react';
import styles from './Input.module.scss';
import { InputProps } from './InputProps';

function Input({ label, input }: InputProps) {
  return (
    <div className={styles.input}>
      <label htmlFor={input.id}>{label}</label>
      <input id={'amount_' + input.id} {...input} />
    </div>
  );
}

export default Input;
