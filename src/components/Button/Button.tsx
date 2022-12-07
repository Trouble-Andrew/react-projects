import React from 'react';
import styles from './Button.module.scss';
import { ButtonProps } from './ButtonProps';

function Button({ type, children, onClick }: ButtonProps) {
  return (
    <button className={styles.button} onClick={onClick} type={type || 'button'}>
      {children}
    </button>
  );
}

export default Button;
